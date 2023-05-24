---
sidebar_label: PostHog
---

# PostHog Resource Data Models

```mdx-code-block
import ZoomPanPinch from '@site/src/components/ZoomPanPinch';
```

## `posthog_event`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of posthog_event data model"
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
class posthog_event [[#posthog_event]] {
**project_id**: int64
**count**: int64
**description**: string
**posthog_tags**: string[]
**volume_30_day**: int64
**query_usage_30_day**: int64
**is_action**: boolean
**action_id**: int64
**last_seen_at**: string
**verified**: boolean
**verified_at**: string
**is_calculating**: boolean
**last_calculated_at**: string
**post_to_slack**: boolean
}
class posthog_resource [[#posthog_resource]] {

}
posthog_resource <|--- posthog_event
resource <|--- posthog_event

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of posthog_event resource relationships"
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

class posthog_event [[#posthog_event]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `posthog_project`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of posthog_project data model"
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
class account [[#account]] {

}
class posthog_resource [[#posthog_resource]] {

}
class posthog_project [[#posthog_project]] {
**project_id**: int64
**app_urls**: string[]
**slack_incoming_webhook**: string[]
**anonymize_ips**: boolean
**completed_snippet_onboarding**: boolean
**timezone**: string
**test_account_filters**: any
**test_account_filters_default_checked**: boolean
**path_cleaning_filters**: any
**data_attributes**: any
**person_display_name_properties**: string[]
**correlation_config**: dictionary[any, any]
**session_recording_opt_in**: boolean
**access_control**: boolean
**primary_dashboard**: int64
**live_events_columns**: string[]
**recording_domains**: string[]
}
resource <|--- account
posthog_resource <|--- posthog_project
account <|--- posthog_project

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of posthog_project resource relationships"
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

class posthog_project [[#posthog_project]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>
