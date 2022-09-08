# Templates

Resoto allows to use templates to define [custom commands](/docs/reference/cli#custom-commands) as well as [search templates](/docs/reference/cli/search-commands/templates).

It uses the well known [mustache](https://mustache.github.io/) templating engine to render templates.

The `templates` command also has the ability to test templates. We use this functionality here to illustrate how to use templates.

## Template Parameter

A template parameter has a name and is surrounded by curly braces `{{name}}`.  
The parameter with the curly braces gets replaced by the value of the parameter when the template is rendered.

```bash title="A template parameter exmaple"
# template definition: Hello {{name}} - I feel {{mood}}.
# value definition: name=John, mood=happy
> template test name=John, mood=happy Hello {{name}} - I feel {{mood}}.
​Hello John - I feel happy.
```

## If/Then Parameter

It is possible to guard a template section. The if/then template is put into a start and end section `{{#prop}} .. {{/prop}}`. The template is rendered, if the parameter `prop` is not empty and not false.

```bash title="A if/then template parameter example"
# name is defined - the hello section is rendered.
> template test name=John {{#name}}Hello {{name}}. {{/name}}Nice to meet you!
​Hello John. Nice to meet you!

# name is false - the hello section is omitted.
> template test name=false {{#name}}Hello {{name}}. {{/name}}Nice to meet you!
​Nice to meet you!

# name is not defined - the hello section is omitted.
> template test {{#name}}Hello {{name}}. {{/name}}Nice to meet you!
​Nice to meet you!
```

If/then parameters can also be negated using the `{{^prop}} .. {{/prop}}` syntax. The inner section is only rendered, if `prop` is false or undefined.

```bash title="A negated if/then template parameter example"
# name is defined - the hello section is rendered.
> template test name=John {{^name}}Hello stranger. {{/name}}Nice to meet you!
​Nice to meet you!

# name is false - the hello section is omitted.
> template test name=false {{^name}}Hello stranger. {{/name}}Nice to meet you!
​Hello stranger. Nice to meet you!

# name is not defined - the hello section is omitted.
> template test {{^name}}Hello stranger. {{/name}}Nice to meet you!
​Hello stranger. Nice to meet you!
```

## List Parameter

It is possible to render a list of values. The list template is put into a start and end section `{{#list}} .. {{/list}}`. Every element of the list is passed to the section content.

```bash title="A list template parameter example"
> template test ls=[{name:Lisa},{name:Bart},{name:Maggie}] {{#ls}}The name is {{name}}. {{/ls}}
​The name is Lisa. The name is Bart. The name is Maggie.
```

## Special Functions

### `with_index`

A list parameter can be called with the `with_index` function. Every element of the list will be enriched with the following properties:

- `first`: boolean, true if the element is the first element of the list
- `last`: boolean, true if the element is the last element of the list
- `index`: integer, the index of the element in the list

```bash title="A list template parameter example with index"
> template test ls=[{name:Lisa},{name:Bart},{name:Maggie}] {{#ls.with_index}}
​  The name of the {{#first}}first {{/first}}{{#last}}last {{/last}}person is {{name}}({{index}}). {{/ls.with_index}}

​  The name of the first person is Lisa(0).
​  The name of the person is Bart(1).
​  The name of the last person is Maggie(2).
```

### `from_now`

A string parameter is interpreted as duration and can be translated into a date using the current time.

```bash title="A duration template parameter example"
> template test duration=3d After the duration of {{duration}} it will be {{duration.from_now}}.
​After the duration of 3d it will be 2022-04-22T10:53:01Z.
```
