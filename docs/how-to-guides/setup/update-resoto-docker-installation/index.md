---
sidebar_label: Update a Docker based Resoto installation
---

# Update a Docker based Resoto installation

The docker based installation relies on a docker compose stack. This stack defines the structure of the installation. Updating a docker based installation boils down to updating the compose file.

## Directions

1. Go to the [latest available Release](https://github.com/someengineering/resoto/releases/latest). If you want to use another specific version, choose the release from the [Release Overview](https://github.com/someengineering/resoto/releases).
2. Under the `Assets` section you will find the [`docker-compose.yaml`](https://github.com/someengineering/resoto/releases/latest/download/docker-compose.yaml) file, that you need to download. Please make sure that the file name stays exactly the same.
3. Restart your compose stack

   ```shell
   $ docker-compose up -d
   ```

   :::note

   [Docker Compose V2 integrated compose functions in to the Docker platform.](https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command)

   In Docker Compose V2, the command is `docker compose` (no hyphen) instead of `docker-compose`.

   :::
