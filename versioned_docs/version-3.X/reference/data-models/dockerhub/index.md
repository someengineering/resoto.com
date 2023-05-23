---
sidebar_label: Docker Hub
slug: /reference/data-models/docker-hub
---

# Docker Hub Resource Data Models

```mdx-code-block
import ZoomPanPinch from '@site/src/components/ZoomPanPinch';
```

## `dockerhub_namespace`

<ZoomPanPinch>

```plantuml alt="Diagram of dockerhub_namespace data model"
@startuml
hide empty members
skinparam ArrowColor #ffaf37
skinparam ArrowFontColor #ffaf37
skinparam ArrowFontName Helvetica
skinparam ArrowThickness 2
skinparam BackgroundColor transparent
skinparam ClassAttributeFontColor #d9b8ff
skinparam ClassBackgroundColor #3d176e
skinparam ClassBorderColor #000d19
skinparam ClassFontColor #d9b8ff
skinparam ClassFontName Helvetica
skinparam ClassFontSize 17
skinparam NoteBackgroundColor #d9b8ff
skinparam NoteBorderColor #000d19
skinparam NoteFontColor #3d176e
skinparam NoteFontName Helvetica
skinparam Padding 5
skinparam RoundCorner 5
skinparam Shadowing false
skinparam stereotypeCBackgroundColor #e98df7
skinparam stereotypeIBackgroundColor #e98df7

class dockerhub_resource [[#dockerhub_resource]] {

}
class resource [[#resource]] {
**id**: string
**tags**: dictionary[string, string]
**name**: string
**ctime**: datetime
**age**: duration
**mtime**: datetime
**last_update**: duration
**atime**: datetime
**last_access**: duration
**kind**: string
}
class account [[#account]] {

}
class dockerhub_namespace [[#dockerhub_namespace]] {
**count**: int64
}
resource <|--- account
dockerhub_resource <|--- dockerhub_namespace
account <|--- dockerhub_namespace

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```plantuml alt="Diagram of dockerhub_namespace resource relationships"
@startuml
hide empty members
skinparam ArrowColor #ffaf37
skinparam ArrowFontColor #ffaf37
skinparam ArrowFontName Helvetica
skinparam ArrowThickness 2
skinparam BackgroundColor transparent
skinparam ClassAttributeFontColor #d9b8ff
skinparam ClassBackgroundColor #3d176e
skinparam ClassBorderColor #000d19
skinparam ClassFontColor #d9b8ff
skinparam ClassFontName Helvetica
skinparam ClassFontSize 17
skinparam NoteBackgroundColor #d9b8ff
skinparam NoteBorderColor #000d19
skinparam NoteFontColor #3d176e
skinparam NoteFontName Helvetica
skinparam Padding 5
skinparam RoundCorner 5
skinparam Shadowing false
skinparam stereotypeCBackgroundColor #e98df7
skinparam stereotypeIBackgroundColor #e98df7

class dockerhub_namespace [[#dockerhub_namespace]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `dockerhub_repository`

<ZoomPanPinch>

```plantuml alt="Diagram of dockerhub_repository data model"
@startuml
hide empty members
skinparam ArrowColor #ffaf37
skinparam ArrowFontColor #ffaf37
skinparam ArrowFontName Helvetica
skinparam ArrowThickness 2
skinparam BackgroundColor transparent
skinparam ClassAttributeFontColor #d9b8ff
skinparam ClassBackgroundColor #3d176e
skinparam ClassBorderColor #000d19
skinparam ClassFontColor #d9b8ff
skinparam ClassFontName Helvetica
skinparam ClassFontSize 17
skinparam NoteBackgroundColor #d9b8ff
skinparam NoteBorderColor #000d19
skinparam NoteFontColor #3d176e
skinparam NoteFontName Helvetica
skinparam Padding 5
skinparam RoundCorner 5
skinparam Shadowing false
skinparam stereotypeCBackgroundColor #e98df7
skinparam stereotypeIBackgroundColor #e98df7

class dockerhub_repository [[#dockerhub_repository]] {
**repository_type**: string
**is_private**: boolean
**star_count**: int64
**pull_count**: int64
**affiliation**: string
**media_types**: string[]
}
class dockerhub_resource [[#dockerhub_resource]] {

}
class resource [[#resource]] {
**id**: string
**tags**: dictionary[string, string]
**name**: string
**ctime**: datetime
**age**: duration
**mtime**: datetime
**last_update**: duration
**atime**: datetime
**last_access**: duration
**kind**: string
}
dockerhub_resource <|--- dockerhub_repository
resource <|--- dockerhub_repository

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```plantuml alt="Diagram of dockerhub_repository resource relationships"
@startuml
hide empty members
skinparam ArrowColor #ffaf37
skinparam ArrowFontColor #ffaf37
skinparam ArrowFontName Helvetica
skinparam ArrowThickness 2
skinparam BackgroundColor transparent
skinparam ClassAttributeFontColor #d9b8ff
skinparam ClassBackgroundColor #3d176e
skinparam ClassBorderColor #000d19
skinparam ClassFontColor #d9b8ff
skinparam ClassFontName Helvetica
skinparam ClassFontSize 17
skinparam NoteBackgroundColor #d9b8ff
skinparam NoteBorderColor #000d19
skinparam NoteFontColor #3d176e
skinparam NoteFontName Helvetica
skinparam Padding 5
skinparam RoundCorner 5
skinparam Shadowing false
skinparam stereotypeCBackgroundColor #e98df7
skinparam stereotypeIBackgroundColor #e98df7

class dockerhub_repository [[#dockerhub_repository]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>
