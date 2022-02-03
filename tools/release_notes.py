import csv
import subprocess
import sys
from collections import namedtuple, defaultdict
from typing import Dict, List

import re

Commit = namedtuple(
    "Commit",
    ["commit_hash", "author", "component", "group", "message", "pr", "timestamp"],
)

long_names = {"feat": "Features", "fix": "Fixes", "chore": "Chores"}
rewrite_component = {"api-docs": "docs", "README": "docs"}


def git_commits(from_tag: str, to_tag: str):
    return subprocess.run(
        [
            "git",
            "--no-pager",
            "log",
            "--pretty=format:%h§%aN§%s§%at",
            f"{from_tag}..{to_tag}",
        ],
        capture_output=True,
        text=True,
    ).stdout.splitlines()


def group_by(f, iterable):
    v = defaultdict(list)
    for item in iterable:
        key = f(item)
        v[key].append(item)
    return v


def parse_commit(row: list[str]) -> Commit:
    commit_hash, author, msg, time = row
    brackets = re.findall("\\[([^]]+)]", msg)
    if len(brackets) == 2:
        component, group = brackets
    elif len(brackets) == 1:
        component, group = brackets[0], "feat"
    else:
        component, group = "resoto", "feat"
    message, pr = re.fullmatch("(?:\\[.+])?\s*(.*)\\(#(\d+)\\)", msg).groups()
    return Commit(
        commit_hash,
        author,
        rewrite_component.get(component, component),
        group,
        message,
        pr,
        time,
    )


def show_log(from_tag: str, to_tag: str):
    grouped: Dict[str, List[Commit]] = group_by(
        lambda c: c.group,
        [
            parse_commit(row)
            for row in csv.reader(git_commits(from_tag, to_tag), delimiter="§")
        ],
    )

    print(f"# v{to_tag}\n")
    for group, commits in grouped.items():
        print(f"\n## {long_names.get(group, group)}\n")
        for commit in commits:
            print(
                f"- [`{commit.commit_hash}`](https://github.com/someengineering/resoto/commit/{commit.commit_hash}) "
                f'<span class="badge badge--secondary">{commit.component}</span> {commit.message}'
                f"([#{commit.pr}](https://github.com/someengineering/resoto/pull/{commit.pr}))"
            )


if len(sys.argv) != 3:
    print(f"Usage: {sys.argv[0]} <from_tag> <to_tag>")
else:
    show_log(sys.argv[1], sys.argv[2])
