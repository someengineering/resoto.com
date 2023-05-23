---
sidebar_label: Slack
---

# Slack Resource Data Models

```mdx-code-block
import ZoomPanPinch from '@site/src/components/ZoomPanPinch';
```

## `slack_conversation`

<ZoomPanPinch>

```plantuml alt="Diagram of slack_conversation data model"
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
class slack_conversation [[#slack_conversation]] {
**creator**: string
**is_archived**: boolean
**is_channel**: boolean
**is_ext_shared**: boolean
**is_general**: boolean
**is_group**: boolean
**is_im**: boolean
**is_member**: boolean
**is_mpim**: boolean
**is_org_shared**: boolean
**is_pending_ext_shared**: boolean
**is_private**: boolean
**is_shared**: boolean
**name_normalized**: string
**num_members**: int64
**parent_conversation**: string
**pending_connected_team_ids**: string[]
**pending_shared**: string[]
**previous_names**: string[]
**shared_team_ids**: string[]
**unlinked**: int64
**topic**: string
**topic_creator**: string
**topic_last_set**: int64
**purpose**: string
**purpose_creator**: string
**purpose_last_set**: int64
}
class slack_resource [[#slack_resource]] {

}
slack_resource <|--- slack_conversation
resource <|--- slack_conversation

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```plantuml alt="Diagram of slack_conversation resource relationships"
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

class slack_conversation [[#slack_conversation]] {

}
class slack_user [[#slack_user]] {

}
class slack_region [[#slack_region]] {

}
slack_conversation -[#1A83AF]-> slack_user
slack_region -[#1A83AF]-> slack_conversation
slack_region -[#1A83AF]-> slack_user

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `slack_region`

<ZoomPanPinch>

```plantuml alt="Diagram of slack_region data model"
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
class region [[#region]] {

}
class slack_resource [[#slack_resource]] {

}
class slack_region [[#slack_region]] {

}
resource <|--- region
slack_resource <|--- slack_region
region <|--- slack_region

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```plantuml alt="Diagram of slack_region resource relationships"
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

class slack_conversation [[#slack_conversation]] {

}
class slack_user [[#slack_user]] {

}
class slack_region [[#slack_region]] {

}
class slack_usergroup [[#slack_usergroup]] {

}
class slack_team [[#slack_team]] {

}
slack_conversation -[#1A83AF]-> slack_user
slack_region -[#1A83AF]-> slack_usergroup
slack_region -[#1A83AF]-> slack_conversation
slack_region -[#1A83AF]-> slack_user
slack_usergroup -[#1A83AF]-> slack_user
slack_team -[#1A83AF]-> slack_region

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `slack_team`

<ZoomPanPinch>

```plantuml alt="Diagram of slack_team data model"
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

class account [[#account]] {

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
class slack_resource [[#slack_resource]] {

}
class slack_team [[#slack_team]] {
**domain**: string
**email_domain**: string
**icon**: string
}
resource <|--- account
slack_resource <|--- slack_team
account <|--- slack_team

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```plantuml alt="Diagram of slack_team resource relationships"
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

class slack_region [[#slack_region]] {

}
class slack_team [[#slack_team]] {

}
slack_team -[#1A83AF]-> slack_region

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `slack_user`

<ZoomPanPinch>

```plantuml alt="Diagram of slack_user data model"
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
class user [[#user]] {

}
class slack_resource [[#slack_resource]] {

}
class slack_user [[#slack_user]] {
**real_name**: string
**team_id**: string
**deleted**: boolean
**color**: string
**tz**: string
**tz_label**: string
**tz_offset**: int64
**is_admin**: boolean
**is_app_user**: boolean
**is_bot**: boolean
**is_owner**: boolean
**is_primary_owner**: boolean
**is_restricted**: boolean
**is_ultra_restricted**: boolean
**email**: string
**phone**: string
**status_emoji**: string
**status_expiration**: int64
**status_text**: string
**status_text_canonical**: string
**title**: string
**guest_invited_by**: string
**first_name**: string
**last_name**: string
**skype**: string
**display_name**: string
**display_name_normalized**: string
**image_24**: string
**image_32**: string
**image_48**: string
**image_72**: string
**image_192**: string
**image_512**: string
**real_name_normalized**: string
}
resource <|--- user
slack_resource <|--- slack_user
user <|--- slack_user

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```plantuml alt="Diagram of slack_user resource relationships"
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

class slack_conversation [[#slack_conversation]] {

}
class slack_user [[#slack_user]] {

}
class slack_region [[#slack_region]] {

}
class slack_usergroup [[#slack_usergroup]] {

}
slack_conversation -[#1A83AF]-> slack_user
slack_region -[#1A83AF]-> slack_usergroup
slack_region -[#1A83AF]-> slack_conversation
slack_region -[#1A83AF]-> slack_user
slack_usergroup -[#1A83AF]-> slack_user

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `slack_usergroup`

<ZoomPanPinch>

```plantuml alt="Diagram of slack_usergroup data model"
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
class slack_resource [[#slack_resource]] {

}
class slack_usergroup [[#slack_usergroup]] {
**auto_provision**: boolean
**auto_type**: string
**created_by**: string
**description**: string
**enterprise_subteam_id**: string
**handle**: string
**is_external**: boolean
**is_subteam**: boolean
**is_usergroup**: boolean
**team_id**: string
**updated_by**: string
**user_count**: int64
}
class group [[#group]] {

}
slack_resource <|--- slack_usergroup
group <|--- slack_usergroup
resource <|--- group

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```plantuml alt="Diagram of slack_usergroup resource relationships"
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

class slack_user [[#slack_user]] {

}
class slack_region [[#slack_region]] {

}
class slack_usergroup [[#slack_usergroup]] {

}
slack_region -[#1A83AF]-> slack_usergroup
slack_region -[#1A83AF]-> slack_user
slack_usergroup -[#1A83AF]-> slack_user

@enduml
```

</ZoomPanPinch>
</div>
</details>
