---
sidebar_label: Kubernetes
---

# Kubernetes Resource Data Models

```mdx-code-block
import ZoomPanPinch from '@site/src/components/ZoomPanPinch';
```

:::info

See [How to Collect Kubernetes Resource Data](../../how-to-guides/data-sources/collect-kubernetes-resource-data.md) for step-by-step directions to configure Resoto to collect [Kuberenetes](https://kubernetes.io) resources.

:::

## `kubernetes_cluster`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_cluster data model"
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
class resource {
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
class account {
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_cluster {
**cluster_info**: kubernetes_cluster_info
}
class kubernetes_cluster_info {
**major**: string
**minor**: string
**platform**: string
**server_url**: string
}
resource <|--- account
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_cluster
account <|--- kubernetes_cluster
kubernetes_cluster --> kubernetes_cluster_info
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_cluster resource relationships"
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
class kubernetes_ingress_class {
}
class kubernetes_storage_class {
}
class kubernetes_node {
}
class kubernetes_cluster {
}
class kubernetes_cluster_role {
}
class kubernetes_mutating_webhook_configuration {
}
class kubernetes_flow_schema {
}
class kubernetes_volume_attachment {
}
class kubernetes_priority_level_configuration {
}
class kubernetes_validating_webhook_configuration {
}
class kubernetes_cluster_role_binding {
}
class kubernetes_namespace {
}
class kubernetes_csi_driver {
}
class kubernetes_priority_class {
}
class kubernetes_persistent_volume {
}
class kubernetes_csi_node {
}
kubernetes_node -[#1A83AF]-> kubernetes_csi_node
kubernetes_cluster -[#1A83AF]-> kubernetes_storage_class
kubernetes_cluster -[#1A83AF]-> kubernetes_cluster_role
kubernetes_cluster -[#1A83AF]-> kubernetes_mutating_webhook_configuration
kubernetes_cluster -[#1A83AF]-> kubernetes_flow_schema
kubernetes_cluster -[#1A83AF]-> kubernetes_volume_attachment
kubernetes_cluster -[#1A83AF]-> kubernetes_priority_level_configuration
kubernetes_cluster -[#1A83AF]-> kubernetes_node
kubernetes_cluster -[#1A83AF]-> kubernetes_validating_webhook_configuration
kubernetes_cluster -[#1A83AF]-> kubernetes_cluster_role_binding
kubernetes_cluster -[#1A83AF]-> kubernetes_ingress_class
kubernetes_cluster -[#1A83AF]-> kubernetes_namespace
kubernetes_cluster -[#1A83AF]-> kubernetes_csi_driver
kubernetes_cluster -[#1A83AF]-> kubernetes_priority_class
kubernetes_cluster -[#1A83AF]-> kubernetes_persistent_volume
kubernetes_cluster -[#1A83AF]-> kubernetes_csi_node
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_cluster_role`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_cluster_role data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_cluster_role {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_cluster_role
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_cluster_role resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_cluster_role {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_cluster_role
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_cluster_role_binding`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_cluster_role_binding data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_cluster_role_binding {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_cluster_role_binding
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_cluster_role_binding resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_cluster_role_binding {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_cluster_role_binding
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_config_map`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_config_map data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_config_map {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_config_map
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_config_map resource relationships"
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
class kubernetes_pod {
}
class kubernetes_namespace {
}
class kubernetes_config_map {
}
kubernetes_pod -[#1A83AF]-> kubernetes_config_map
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_config_map
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_controller_revision`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_controller_revision data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_controller_revision {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_controller_revision
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_controller_revision resource relationships"
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
class kubernetes_daemon_set {
}
class kubernetes_controller_revision {
}
class kubernetes_namespace {
}
class kubernetes_stateful_set {
}
kubernetes_daemon_set -[#1A83AF]-> kubernetes_controller_revision
kubernetes_namespace -[#1A83AF]-> kubernetes_daemon_set
kubernetes_namespace -[#1A83AF]-> kubernetes_stateful_set
kubernetes_namespace -[#1A83AF]-> kubernetes_controller_revision
kubernetes_stateful_set -[#1A83AF]-> kubernetes_controller_revision
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_cron_job`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_cron_job data model"
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
class resource {
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
class kubernetes_label_selector {
**match_expressions**: kubernetes_label_selector_requirement[]
**match_labels**: dictionary[string, string]
}
class kubernetes_label_selector_requirement {
**key**: string
**operator**: string
**values**: string[]
}
class kubernetes_pod_template_spec {
**spec**: kubernetes_pod_spec
}
class kubernetes_pod_spec {
**active_deadline_seconds**: int64
**automount_service_account_token**: boolean
**containers**: kubernetes_container[]
**dns_policy**: string
**enable_service_links**: boolean
**ephemeral_containers**: kubernetes_container[]
**host_ipc**: boolean
**host_network**: boolean
**host_pid**: boolean
**hostname**: string
**init_containers**: kubernetes_container[]
**node_name**: string
**preemption_policy**: string
**priority**: int64
**priority_class_name**: string
**restart_policy**: string
**runtime_class_name**: string
**scheduler_name**: string
**security_context**: kubernetes_pod_security_context
**service_account**: string
**service_account_name**: string
**set_hostname_as_fqdn**: boolean
**share_process_namespace**: boolean
**subdomain**: string
**termination_grace_period_seconds**: int64
**tolerations**: kubernetes_toleration[]
**volumes**: kubernetes_volume[]
}
class kubernetes_container {
**args**: string[]
**command**: string[]
**image**: string
**image_pull_policy**: string
**name**: string
**ports**: kubernetes_container_port[]
**resources**: kubernetes_resource_requirements
**security_context**: kubernetes_security_context
**stdin**: boolean
**stdin_once**: boolean
**termination_message_path**: string
**termination_message_policy**: string
**tty**: boolean
**volume_devices**: kubernetes_volume_device[]
**volume_mounts**: kubernetes_volume_mount[]
**working_dir**: string
}
class kubernetes_container_port {
**container_port**: int64
**host_ip**: string
**host_port**: int64
**name**: string
**protocol**: string
}
class kubernetes_resource_requirements {
**limits**: any
**requests**: any
}
class kubernetes_security_context {
**allow_privilege_escalation**: boolean
**privileged**: boolean
**proc_mount**: string
**read_only_root_filesystem**: boolean
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**windows_options**: any
}
class kubernetes_volume_device {
**device_path**: string
**name**: string
}
class kubernetes_volume_mount {
**mount_path**: string
**mount_propagation**: string
**name**: string
**read_only**: boolean
**sub_path**: string
**sub_path_expr**: string
}
class kubernetes_pod_security_context {
**fs_group**: int64
**fs_group_change_policy**: string
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**supplemental_groups**: int64[]
**windows_options**: any
}
class kubernetes_toleration {
**effect**: string
**key**: string
**operator**: string
**toleration_seconds**: int64
**value**: string
}
class kubernetes_volume {
**aws_elastic_block_store**: any
**azure_disk**: any
**azure_file**: any
**cephfs**: any
**cinder**: any
**config_map**: any
**csi**: any
**downward_api**: any
**empty_dir**: any
**ephemeral**: any
**fc**: any
**flex_volume**: any
**flocker**: any
**gce_persistent_disk**: any
**git_repo**: any
**glusterfs**: any
**host_path**: any
**iscsi**: any
**name**: string
**nfs**: any
**persistent_volume_claim**: any
**photon_persistent_disk**: any
**portworx_volume**: any
**projected**: any
**quobyte**: any
**rbd**: any
**scale_io**: any
**secret**: any
**storageos**: any
**vsphere_volume**: any
}
class kubernetes_job_template_spec {
**spec**: kubernetes_job_spec
}
class kubernetes_job_spec {
**active_deadline_seconds**: int64
**backoff_limit**: int64
**completion_mode**: string
**completions**: int64
**manual_selector**: boolean
**parallelism**: int64
**selector**: kubernetes_label_selector
**suspend**: boolean
**template**: kubernetes_pod_template_spec
**ttl_seconds_after_finished**: int64
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_cron_job_status_active {
**api_version**: string
**field_path**: string
**name**: string
**namespace**: string
**resource_version**: string
**uid**: string
}
class kubernetes_cron_job {
**cron_job_status**: kubernetes_cron_job_status
**cron_job_spec**: kubernetes_cron_job_spec
}
class kubernetes_cron_job_spec {
**concurrency_policy**: string
**failed_jobs_history_limit**: int64
**job_template**: kubernetes_job_template_spec
**schedule**: string
**starting_deadline_seconds**: int64
**successful_jobs_history_limit**: int64
**suspend**: boolean
**time_zone**: string
}
class kubernetes_cron_job_status {
**active**: kubernetes_cron_job_status_active[]
**last_schedule_time**: datetime
**last_successful_time**: datetime
}
kubernetes_label_selector --> kubernetes_label_selector_requirement
kubernetes_pod_template_spec --> kubernetes_pod_spec
kubernetes_pod_spec --> kubernetes_container
kubernetes_pod_spec --> kubernetes_pod_security_context
kubernetes_pod_spec --> kubernetes_toleration
kubernetes_pod_spec --> kubernetes_volume
kubernetes_container --> kubernetes_container_port
kubernetes_container --> kubernetes_resource_requirements
kubernetes_container --> kubernetes_security_context
kubernetes_container --> kubernetes_volume_device
kubernetes_container --> kubernetes_volume_mount
kubernetes_job_template_spec --> kubernetes_job_spec
kubernetes_job_spec --> kubernetes_label_selector
kubernetes_job_spec --> kubernetes_pod_template_spec
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_cron_job
kubernetes_cron_job --> kubernetes_cron_job_status
kubernetes_cron_job --> kubernetes_cron_job_spec
kubernetes_cron_job_spec --> kubernetes_job_template_spec
kubernetes_cron_job_status --> kubernetes_cron_job_status_active
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_cron_job resource relationships"
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
class kubernetes_namespace {
}
class kubernetes_job {
}
class kubernetes_cron_job {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_job
kubernetes_namespace -[#1A83AF]-> kubernetes_cron_job
kubernetes_cron_job -[#1A83AF]-> kubernetes_job
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_csi_driver`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_csi_driver data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_csi_driver {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_csi_driver
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_csi_driver resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_csi_driver {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_csi_driver
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_csi_node`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_csi_node data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_csi_node {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_csi_node
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_csi_node resource relationships"
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
class kubernetes_node {
}
class kubernetes_cluster {
}
class kubernetes_csi_node {
}
kubernetes_node -[#1A83AF]-> kubernetes_csi_node
kubernetes_cluster -[#1A83AF]-> kubernetes_node
kubernetes_cluster -[#1A83AF]-> kubernetes_csi_node
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_csi_storage_capacity`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_csi_storage_capacity data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_csi_storage_capacity {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_csi_storage_capacity
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_csi_storage_capacity resource relationships"
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
class kubernetes_csi_storage_capacity {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_daemon_set`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_daemon_set data model"
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
class resource {
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
class kubernetes_label_selector {
**match_expressions**: kubernetes_label_selector_requirement[]
**match_labels**: dictionary[string, string]
}
class kubernetes_label_selector_requirement {
**key**: string
**operator**: string
**values**: string[]
}
class kubernetes_pod_template_spec {
**spec**: kubernetes_pod_spec
}
class kubernetes_pod_spec {
**active_deadline_seconds**: int64
**automount_service_account_token**: boolean
**containers**: kubernetes_container[]
**dns_policy**: string
**enable_service_links**: boolean
**ephemeral_containers**: kubernetes_container[]
**host_ipc**: boolean
**host_network**: boolean
**host_pid**: boolean
**hostname**: string
**init_containers**: kubernetes_container[]
**node_name**: string
**preemption_policy**: string
**priority**: int64
**priority_class_name**: string
**restart_policy**: string
**runtime_class_name**: string
**scheduler_name**: string
**security_context**: kubernetes_pod_security_context
**service_account**: string
**service_account_name**: string
**set_hostname_as_fqdn**: boolean
**share_process_namespace**: boolean
**subdomain**: string
**termination_grace_period_seconds**: int64
**tolerations**: kubernetes_toleration[]
**volumes**: kubernetes_volume[]
}
class kubernetes_container {
**args**: string[]
**command**: string[]
**image**: string
**image_pull_policy**: string
**name**: string
**ports**: kubernetes_container_port[]
**resources**: kubernetes_resource_requirements
**security_context**: kubernetes_security_context
**stdin**: boolean
**stdin_once**: boolean
**termination_message_path**: string
**termination_message_policy**: string
**tty**: boolean
**volume_devices**: kubernetes_volume_device[]
**volume_mounts**: kubernetes_volume_mount[]
**working_dir**: string
}
class kubernetes_container_port {
**container_port**: int64
**host_ip**: string
**host_port**: int64
**name**: string
**protocol**: string
}
class kubernetes_resource_requirements {
**limits**: any
**requests**: any
}
class kubernetes_security_context {
**allow_privilege_escalation**: boolean
**privileged**: boolean
**proc_mount**: string
**read_only_root_filesystem**: boolean
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**windows_options**: any
}
class kubernetes_volume_device {
**device_path**: string
**name**: string
}
class kubernetes_volume_mount {
**mount_path**: string
**mount_propagation**: string
**name**: string
**read_only**: boolean
**sub_path**: string
**sub_path_expr**: string
}
class kubernetes_pod_security_context {
**fs_group**: int64
**fs_group_change_policy**: string
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**supplemental_groups**: int64[]
**windows_options**: any
}
class kubernetes_toleration {
**effect**: string
**key**: string
**operator**: string
**toleration_seconds**: int64
**value**: string
}
class kubernetes_volume {
**aws_elastic_block_store**: any
**azure_disk**: any
**azure_file**: any
**cephfs**: any
**cinder**: any
**config_map**: any
**csi**: any
**downward_api**: any
**empty_dir**: any
**ephemeral**: any
**fc**: any
**flex_volume**: any
**flocker**: any
**gce_persistent_disk**: any
**git_repo**: any
**glusterfs**: any
**host_path**: any
**iscsi**: any
**name**: string
**nfs**: any
**persistent_volume_claim**: any
**photon_persistent_disk**: any
**portworx_volume**: any
**projected**: any
**quobyte**: any
**rbd**: any
**scale_io**: any
**secret**: any
**storageos**: any
**vsphere_volume**: any
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_daemon_set {
**daemon_set_status**: kubernetes_daemon_set_status
**daemon_set_spec**: kubernetes_daemon_set_spec
}
class kubernetes_daemon_set_status {
**collision_count**: int64
**conditions**: kubernetes_daemon_set_status_conditions[]
**current_number_scheduled**: int64
**desired_number_scheduled**: int64
**number_available**: int64
**number_misscheduled**: int64
**number_ready**: int64
**number_unavailable**: int64
**observed_generation**: int64
**updated_number_scheduled**: int64
}
class kubernetes_daemon_set_status_conditions {
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_daemon_set_spec {
**min_ready_seconds**: int64
**revision_history_limit**: int64
**selector**: kubernetes_label_selector
**template**: kubernetes_pod_template_spec
}
kubernetes_label_selector --> kubernetes_label_selector_requirement
kubernetes_pod_template_spec --> kubernetes_pod_spec
kubernetes_pod_spec --> kubernetes_container
kubernetes_pod_spec --> kubernetes_pod_security_context
kubernetes_pod_spec --> kubernetes_toleration
kubernetes_pod_spec --> kubernetes_volume
kubernetes_container --> kubernetes_container_port
kubernetes_container --> kubernetes_resource_requirements
kubernetes_container --> kubernetes_security_context
kubernetes_container --> kubernetes_volume_device
kubernetes_container --> kubernetes_volume_mount
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_daemon_set
kubernetes_daemon_set --> kubernetes_daemon_set_status
kubernetes_daemon_set --> kubernetes_daemon_set_spec
kubernetes_daemon_set_status --> kubernetes_daemon_set_status_conditions
kubernetes_daemon_set_spec --> kubernetes_label_selector
kubernetes_daemon_set_spec --> kubernetes_pod_template_spec
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_daemon_set resource relationships"
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
class kubernetes_daemon_set {
}
class kubernetes_pod {
}
class kubernetes_controller_revision {
}
class kubernetes_namespace {
}
kubernetes_daemon_set -[#1A83AF]-> kubernetes_pod
kubernetes_daemon_set -[#1A83AF]-> kubernetes_controller_revision
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_daemon_set
kubernetes_namespace -[#1A83AF]-> kubernetes_controller_revision
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_deployment`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_deployment data model"
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
class resource {
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
class kubernetes_label_selector {
**match_expressions**: kubernetes_label_selector_requirement[]
**match_labels**: dictionary[string, string]
}
class kubernetes_label_selector_requirement {
**key**: string
**operator**: string
**values**: string[]
}
class kubernetes_pod_template_spec {
**spec**: kubernetes_pod_spec
}
class kubernetes_pod_spec {
**active_deadline_seconds**: int64
**automount_service_account_token**: boolean
**containers**: kubernetes_container[]
**dns_policy**: string
**enable_service_links**: boolean
**ephemeral_containers**: kubernetes_container[]
**host_ipc**: boolean
**host_network**: boolean
**host_pid**: boolean
**hostname**: string
**init_containers**: kubernetes_container[]
**node_name**: string
**preemption_policy**: string
**priority**: int64
**priority_class_name**: string
**restart_policy**: string
**runtime_class_name**: string
**scheduler_name**: string
**security_context**: kubernetes_pod_security_context
**service_account**: string
**service_account_name**: string
**set_hostname_as_fqdn**: boolean
**share_process_namespace**: boolean
**subdomain**: string
**termination_grace_period_seconds**: int64
**tolerations**: kubernetes_toleration[]
**volumes**: kubernetes_volume[]
}
class kubernetes_container {
**args**: string[]
**command**: string[]
**image**: string
**image_pull_policy**: string
**name**: string
**ports**: kubernetes_container_port[]
**resources**: kubernetes_resource_requirements
**security_context**: kubernetes_security_context
**stdin**: boolean
**stdin_once**: boolean
**termination_message_path**: string
**termination_message_policy**: string
**tty**: boolean
**volume_devices**: kubernetes_volume_device[]
**volume_mounts**: kubernetes_volume_mount[]
**working_dir**: string
}
class kubernetes_container_port {
**container_port**: int64
**host_ip**: string
**host_port**: int64
**name**: string
**protocol**: string
}
class kubernetes_resource_requirements {
**limits**: any
**requests**: any
}
class kubernetes_security_context {
**allow_privilege_escalation**: boolean
**privileged**: boolean
**proc_mount**: string
**read_only_root_filesystem**: boolean
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**windows_options**: any
}
class kubernetes_volume_device {
**device_path**: string
**name**: string
}
class kubernetes_volume_mount {
**mount_path**: string
**mount_propagation**: string
**name**: string
**read_only**: boolean
**sub_path**: string
**sub_path_expr**: string
}
class kubernetes_pod_security_context {
**fs_group**: int64
**fs_group_change_policy**: string
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**supplemental_groups**: int64[]
**windows_options**: any
}
class kubernetes_toleration {
**effect**: string
**key**: string
**operator**: string
**toleration_seconds**: int64
**value**: string
}
class kubernetes_volume {
**aws_elastic_block_store**: any
**azure_disk**: any
**azure_file**: any
**cephfs**: any
**cinder**: any
**config_map**: any
**csi**: any
**downward_api**: any
**empty_dir**: any
**ephemeral**: any
**fc**: any
**flex_volume**: any
**flocker**: any
**gce_persistent_disk**: any
**git_repo**: any
**glusterfs**: any
**host_path**: any
**iscsi**: any
**name**: string
**nfs**: any
**persistent_volume_claim**: any
**photon_persistent_disk**: any
**portworx_volume**: any
**projected**: any
**quobyte**: any
**rbd**: any
**scale_io**: any
**secret**: any
**storageos**: any
**vsphere_volume**: any
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_rolling_update_deployment {
**max_surge**: any
**max_unavailable**: any
}
class kubernetes_deployment_strategy {
**rolling_update**: kubernetes_rolling_update_deployment
**type**: string
}
class kubernetes_deployment {
**deployment_status**: kubernetes_deployment_status
**deployment_spec**: kubernetes_deployment_spec
}
class kubernetes_deployment_status {
**available_replicas**: int64
**collision_count**: int64
**conditions**: kubernetes_deployment_status_condition[]
**observed_generation**: int64
**ready_replicas**: int64
**replicas**: int64
**unavailable_replicas**: int64
**updated_replicas**: int64
}
class kubernetes_deployment_status_condition {
**last_transition_time**: datetime
**last_update_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_deployment_spec {
**min_ready_seconds**: int64
**paused**: boolean
**progress_deadline_seconds**: int64
**replicas**: int64
**revision_history_limit**: int64
**selector**: kubernetes_label_selector
**strategy**: kubernetes_deployment_strategy
**template**: kubernetes_pod_template_spec
}
kubernetes_label_selector --> kubernetes_label_selector_requirement
kubernetes_pod_template_spec --> kubernetes_pod_spec
kubernetes_pod_spec --> kubernetes_container
kubernetes_pod_spec --> kubernetes_pod_security_context
kubernetes_pod_spec --> kubernetes_toleration
kubernetes_pod_spec --> kubernetes_volume
kubernetes_container --> kubernetes_container_port
kubernetes_container --> kubernetes_resource_requirements
kubernetes_container --> kubernetes_security_context
kubernetes_container --> kubernetes_volume_device
kubernetes_container --> kubernetes_volume_mount
resource <|--- kubernetes_resource
kubernetes_deployment_strategy --> kubernetes_rolling_update_deployment
kubernetes_resource <|--- kubernetes_deployment
kubernetes_deployment --> kubernetes_deployment_status
kubernetes_deployment --> kubernetes_deployment_spec
kubernetes_deployment_status --> kubernetes_deployment_status_condition
kubernetes_deployment_spec --> kubernetes_label_selector
kubernetes_deployment_spec --> kubernetes_deployment_strategy
kubernetes_deployment_spec --> kubernetes_pod_template_spec
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_deployment resource relationships"
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
class kubernetes_namespace {
}
class kubernetes_deployment {
}
class kubernetes_replica_set {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_deployment
kubernetes_namespace -[#1A83AF]-> kubernetes_replica_set
kubernetes_deployment -[#1A83AF]-> kubernetes_replica_set
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_endpoint`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_endpoint data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_endpoint {
**subsets**: kubernetes_endpoint_subset[]
}
class kubernetes_endpoint_subset {
**addresses**: kubernetes_endpoint_address[]
**ports**: kubernetes_endpoint_port[]
}
class kubernetes_endpoint_address {
**ip**: string
**node_name**: string
}
class kubernetes_endpoint_port {
**name**: string
**port**: int64
**protocol**: string
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_endpoint
kubernetes_endpoint --> kubernetes_endpoint_subset
kubernetes_endpoint_subset --> kubernetes_endpoint_address
kubernetes_endpoint_subset --> kubernetes_endpoint_port
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_endpoint resource relationships"
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
class kubernetes_pod {
}
class kubernetes_endpoint {
}
class kubernetes_endpoint_slice {
}
class kubernetes_node {
}
class kubernetes_namespace {
}
kubernetes_endpoint -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_endpoint -[#1A83AF]-> kubernetes_pod
kubernetes_endpoint -[#1A83AF]-> kubernetes_node
kubernetes_node -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_endpoint
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_endpoint_slice`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_endpoint_slice data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_endpoint_slice {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_endpoint_slice
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_endpoint_slice resource relationships"
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
class kubernetes_endpoint {
}
class kubernetes_endpoint_slice {
}
class kubernetes_namespace {
}
class kubernetes_service {
}
kubernetes_endpoint -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_namespace -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_namespace -[#1A83AF]-> kubernetes_endpoint
kubernetes_namespace -[#1A83AF]-> kubernetes_service
kubernetes_service -[#1A83AF]-> kubernetes_endpoint_slice
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_flow_schema`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_flow_schema data model"
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
class resource {
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
class kubernetes_flow_schema_status {
**conditions**: kubernetes_flow_schema_status_conditions[]
}
class kubernetes_flow_schema_status_conditions {
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_flow_schema {
**flow_schema_status**: kubernetes_flow_schema_status
}
kubernetes_flow_schema_status --> kubernetes_flow_schema_status_conditions
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_flow_schema
kubernetes_flow_schema --> kubernetes_flow_schema_status
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_flow_schema resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_flow_schema {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_flow_schema
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_horizontal_pod_autoscaler`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_horizontal_pod_autoscaler data model"
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
class resource {
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
class kubernetes_cross_object_reference {
**api_version**: string
**resource_kind**: string
**name**: string
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_horizontal_pod_autoscaler_status {
**current_cpu_utilization_percentage**: int64
**current_replicas**: int64
**desired_replicas**: int64
**last_scale_time**: datetime
**observed_generation**: int64
}
class kubernetes_horizontal_pod_autoscaler_spec {
**max_replicas**: int64
**min_replicas**: int64
**scale_target_ref**: kubernetes_cross_object_reference
**target_cpu_utilization_percentage**: int64
}
class kubernetes_horizontal_pod_autoscaler {
**horizontal_pod_autoscaler_status**: kubernetes_horizontal_pod_autoscaler_status
**horizontal_pod_autoscaler_spec**: kubernetes_horizontal_pod_autoscaler_spec
}
resource <|--- kubernetes_resource
kubernetes_horizontal_pod_autoscaler_spec --> kubernetes_cross_object_reference
kubernetes_resource <|--- kubernetes_horizontal_pod_autoscaler
kubernetes_horizontal_pod_autoscaler --> kubernetes_horizontal_pod_autoscaler_status
kubernetes_horizontal_pod_autoscaler --> kubernetes_horizontal_pod_autoscaler_spec
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_horizontal_pod_autoscaler resource relationships"
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
class kubernetes_horizontal_pod_autoscaler {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_ingress`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_ingress data model"
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
class resource {
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
class kubernetes_ingress_rule {
**host**: string
**http**: any
}
class load_balancer {
**lb_type**: string
**public_ip_address**: string
**backends**: string[]
}
class kubernetes_ingress_status_loadbalancer_ingress {
**hostname**: string
**ip**: string
**ports**: kubernetes_ingress_status_loadbalancer_ingress_ports[]
}
class kubernetes_ingress_status_loadbalancer_ingress_ports {
**error**: string
**port**: int64
**protocol**: string
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_ingress_status {
**load_balancer**: kubernetes_ingress_status_loadbalancer
}
class kubernetes_ingress_status_loadbalancer {
**ingress**: kubernetes_ingress_status_loadbalancer_ingress[]
}
class kubernetes_ingress_tls {
**hosts**: string[]
**secret_name**: string
}
class kubernetes_ingress {
**ingress_status**: kubernetes_ingress_status
**ingress_spec**: kubernetes_ingress_spec
}
class kubernetes_ingress_spec {
**ingress_class_name**: string
**rules**: kubernetes_ingress_rule[]
**tls**: kubernetes_ingress_tls[]
}
resource <|--- load_balancer
kubernetes_ingress_status_loadbalancer_ingress --> kubernetes_ingress_status_loadbalancer_ingress_ports
resource <|--- kubernetes_resource
kubernetes_ingress_status --> kubernetes_ingress_status_loadbalancer
kubernetes_ingress_status_loadbalancer --> kubernetes_ingress_status_loadbalancer_ingress
kubernetes_resource <|--- kubernetes_ingress
load_balancer <|--- kubernetes_ingress
kubernetes_ingress --> kubernetes_ingress_status
kubernetes_ingress --> kubernetes_ingress_spec
kubernetes_ingress_spec --> kubernetes_ingress_rule
kubernetes_ingress_spec --> kubernetes_ingress_tls
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_ingress resource relationships"
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
class kubernetes_ingress {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_ingress_class`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_ingress_class data model"
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
class resource {
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
class kubernetes_ingress_class {
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
kubernetes_resource <|--- kubernetes_ingress_class
resource <|--- kubernetes_resource
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_ingress_class resource relationships"
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
class kubernetes_ingress_class {
}
class kubernetes_cluster {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_ingress_class
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_job`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_job data model"
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
class resource {
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
class kubernetes_label_selector {
**match_expressions**: kubernetes_label_selector_requirement[]
**match_labels**: dictionary[string, string]
}
class kubernetes_label_selector_requirement {
**key**: string
**operator**: string
**values**: string[]
}
class kubernetes_job_status {
**active**: int64
**completed_indexes**: string
**completion_time**: datetime
**conditions**: kubernetes_job_status_conditions[]
**failed**: int64
**ready**: int64
**start_time**: datetime
**succeeded**: int64
}
class kubernetes_job_status_conditions {
**last_probe_time**: datetime
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_pod_template_spec {
**spec**: kubernetes_pod_spec
}
class kubernetes_pod_spec {
**active_deadline_seconds**: int64
**automount_service_account_token**: boolean
**containers**: kubernetes_container[]
**dns_policy**: string
**enable_service_links**: boolean
**ephemeral_containers**: kubernetes_container[]
**host_ipc**: boolean
**host_network**: boolean
**host_pid**: boolean
**hostname**: string
**init_containers**: kubernetes_container[]
**node_name**: string
**preemption_policy**: string
**priority**: int64
**priority_class_name**: string
**restart_policy**: string
**runtime_class_name**: string
**scheduler_name**: string
**security_context**: kubernetes_pod_security_context
**service_account**: string
**service_account_name**: string
**set_hostname_as_fqdn**: boolean
**share_process_namespace**: boolean
**subdomain**: string
**termination_grace_period_seconds**: int64
**tolerations**: kubernetes_toleration[]
**volumes**: kubernetes_volume[]
}
class kubernetes_container {
**args**: string[]
**command**: string[]
**image**: string
**image_pull_policy**: string
**name**: string
**ports**: kubernetes_container_port[]
**resources**: kubernetes_resource_requirements
**security_context**: kubernetes_security_context
**stdin**: boolean
**stdin_once**: boolean
**termination_message_path**: string
**termination_message_policy**: string
**tty**: boolean
**volume_devices**: kubernetes_volume_device[]
**volume_mounts**: kubernetes_volume_mount[]
**working_dir**: string
}
class kubernetes_container_port {
**container_port**: int64
**host_ip**: string
**host_port**: int64
**name**: string
**protocol**: string
}
class kubernetes_resource_requirements {
**limits**: any
**requests**: any
}
class kubernetes_security_context {
**allow_privilege_escalation**: boolean
**privileged**: boolean
**proc_mount**: string
**read_only_root_filesystem**: boolean
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**windows_options**: any
}
class kubernetes_volume_device {
**device_path**: string
**name**: string
}
class kubernetes_volume_mount {
**mount_path**: string
**mount_propagation**: string
**name**: string
**read_only**: boolean
**sub_path**: string
**sub_path_expr**: string
}
class kubernetes_pod_security_context {
**fs_group**: int64
**fs_group_change_policy**: string
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**supplemental_groups**: int64[]
**windows_options**: any
}
class kubernetes_toleration {
**effect**: string
**key**: string
**operator**: string
**toleration_seconds**: int64
**value**: string
}
class kubernetes_volume {
**aws_elastic_block_store**: any
**azure_disk**: any
**azure_file**: any
**cephfs**: any
**cinder**: any
**config_map**: any
**csi**: any
**downward_api**: any
**empty_dir**: any
**ephemeral**: any
**fc**: any
**flex_volume**: any
**flocker**: any
**gce_persistent_disk**: any
**git_repo**: any
**glusterfs**: any
**host_path**: any
**iscsi**: any
**name**: string
**nfs**: any
**persistent_volume_claim**: any
**photon_persistent_disk**: any
**portworx_volume**: any
**projected**: any
**quobyte**: any
**rbd**: any
**scale_io**: any
**secret**: any
**storageos**: any
**vsphere_volume**: any
}
class kubernetes_job_spec {
**active_deadline_seconds**: int64
**backoff_limit**: int64
**completion_mode**: string
**completions**: int64
**manual_selector**: boolean
**parallelism**: int64
**selector**: kubernetes_label_selector
**suspend**: boolean
**template**: kubernetes_pod_template_spec
**ttl_seconds_after_finished**: int64
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_job {
**job_status**: kubernetes_job_status
**job_spec**: kubernetes_job_spec
}
kubernetes_label_selector --> kubernetes_label_selector_requirement
kubernetes_job_status --> kubernetes_job_status_conditions
kubernetes_pod_template_spec --> kubernetes_pod_spec
kubernetes_pod_spec --> kubernetes_container
kubernetes_pod_spec --> kubernetes_pod_security_context
kubernetes_pod_spec --> kubernetes_toleration
kubernetes_pod_spec --> kubernetes_volume
kubernetes_container --> kubernetes_container_port
kubernetes_container --> kubernetes_resource_requirements
kubernetes_container --> kubernetes_security_context
kubernetes_container --> kubernetes_volume_device
kubernetes_container --> kubernetes_volume_mount
kubernetes_job_spec --> kubernetes_label_selector
kubernetes_job_spec --> kubernetes_pod_template_spec
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_job
kubernetes_job --> kubernetes_job_status
kubernetes_job --> kubernetes_job_spec
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_job resource relationships"
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
class kubernetes_pod {
}
class kubernetes_namespace {
}
class kubernetes_job {
}
class kubernetes_cron_job {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_job
kubernetes_namespace -[#1A83AF]-> kubernetes_cron_job
kubernetes_job -[#1A83AF]-> kubernetes_pod
kubernetes_cron_job -[#1A83AF]-> kubernetes_job
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_limit_range`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_limit_range data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_limit_range {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_limit_range
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_limit_range resource relationships"
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
class kubernetes_limit_range {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_mutating_webhook_configuration`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_mutating_webhook_configuration data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_mutating_webhook_configuration {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_mutating_webhook_configuration
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_mutating_webhook_configuration resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_mutating_webhook_configuration {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_mutating_webhook_configuration
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_namespace`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_namespace data model"
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
class resource {
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
class region {
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_namespace {
**namespace_status**: kubernetes_namespace_status
}
class kubernetes_namespace_status {
**conditions**: kubernetes_namespace_status_conditions[]
**phase**: string
}
class kubernetes_namespace_status_conditions {
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
resource <|--- region
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_namespace
region <|--- kubernetes_namespace
kubernetes_namespace --> kubernetes_namespace_status
kubernetes_namespace_status --> kubernetes_namespace_status_conditions
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_namespace resource relationships"
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
class kubernetes_daemon_set {
}
class kubernetes_pod {
}
class kubernetes_controller_revision {
}
class kubernetes_endpoint {
}
class kubernetes_endpoint_slice {
}
class kubernetes_service_account {
}
class kubernetes_secret {
}
class kubernetes_cluster {
}
class kubernetes_namespace {
}
class kubernetes_service {
}
class kubernetes_stateful_set {
}
class kubernetes_pod_disruption_budget {
}
class kubernetes_role {
}
class kubernetes_deployment {
}
class kubernetes_replica_set {
}
class kubernetes_persistent_volume_claim {
}
class kubernetes_config_map {
}
class kubernetes_job {
}
class kubernetes_cron_job {
}
class kubernetes_role_binding {
}
kubernetes_daemon_set -[#1A83AF]-> kubernetes_pod
kubernetes_daemon_set -[#1A83AF]-> kubernetes_controller_revision
kubernetes_pod -[#1A83AF]-> kubernetes_secret
kubernetes_pod -[#1A83AF]-> kubernetes_persistent_volume_claim
kubernetes_pod -[#1A83AF]-> kubernetes_config_map
kubernetes_endpoint -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_endpoint -[#1A83AF]-> kubernetes_pod
kubernetes_service_account -[#1A83AF]-> kubernetes_secret
kubernetes_cluster -[#1A83AF]-> kubernetes_namespace
kubernetes_namespace -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_daemon_set
kubernetes_namespace -[#1A83AF]-> kubernetes_deployment
kubernetes_namespace -[#1A83AF]-> kubernetes_service_account
kubernetes_namespace -[#1A83AF]-> kubernetes_persistent_volume_claim
kubernetes_namespace -[#1A83AF]-> kubernetes_config_map
kubernetes_namespace -[#1A83AF]-> kubernetes_secret
kubernetes_namespace -[#1A83AF]-> kubernetes_endpoint
kubernetes_namespace -[#1A83AF]-> kubernetes_stateful_set
kubernetes_namespace -[#1A83AF]-> kubernetes_role
kubernetes_namespace -[#1A83AF]-> kubernetes_controller_revision
kubernetes_namespace -[#1A83AF]-> kubernetes_replica_set
kubernetes_namespace -[#1A83AF]-> kubernetes_job
kubernetes_namespace -[#1A83AF]-> kubernetes_cron_job
kubernetes_namespace -[#1A83AF]-> kubernetes_pod_disruption_budget
kubernetes_namespace -[#1A83AF]-> kubernetes_role_binding
kubernetes_namespace -[#1A83AF]-> kubernetes_service
kubernetes_service -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_service -[#1A83AF]-> kubernetes_pod
kubernetes_stateful_set -[#1A83AF]-> kubernetes_pod
kubernetes_stateful_set -[#1A83AF]-> kubernetes_controller_revision
kubernetes_deployment -[#1A83AF]-> kubernetes_replica_set
kubernetes_replica_set -[#1A83AF]-> kubernetes_pod
kubernetes_job -[#1A83AF]-> kubernetes_pod
kubernetes_cron_job -[#1A83AF]-> kubernetes_job
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_network_policy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_network_policy data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_network_policy_status_conditions {
**last_transition_time**: datetime
**message**: string
**observed_generation**: int64
**reason**: string
**status**: string
**type**: string
}
class kubernetes_network_policy {
**network_policy_status**: kubernetes_network_policy_status
}
class kubernetes_network_policy_status {
**conditions**: kubernetes_network_policy_status_conditions[]
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_network_policy
kubernetes_network_policy --> kubernetes_network_policy_status
kubernetes_network_policy_status --> kubernetes_network_policy_status_conditions
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_network_policy resource relationships"
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
class kubernetes_network_policy {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_node`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_node data model"
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
class resource {
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
class instance {
**instance_cores**: double
**instance_memory**: double
**instance_type**: string
**instance_status**: instance_status
}
class kubernetes_node_system_info {
**architecture**: string
**boot_id**: string
**container_runtime_version**: string
**kernel_version**: string
**kube_proxy_version**: string
**kubelet_version**: string
**machine_id**: string
**operating_system**: string
**os_image**: string
**system_uuid**: string
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_node_status_config {
**active**: kubernetes_node_status_config_active
**assigned**: kubernetes_node_status_config_active
**error**: string
}
class kubernetes_node_status_config_active {
**config_map**: kubernetes_node_status_config_active_configmap
}
class kubernetes_node_status_config_active_configmap {
**kubelet_config_key**: string
**name**: string
**namespace**: string
**resource_version**: string
**uid**: string
}
class kubernetes_node_spec {
**external_id**: string
**pod_cidr**: string
**pod_cidrs**: string[]
**provider_id**: string
**taints**: kubernetes_taint[]
**unschedulable**: boolean
}
class kubernetes_taint {
**effect**: string
**key**: string
**time_added**: datetime
**value**: string
}
class kubernetes_daemon_endpoint {
**port**: int64
}
class kubernetes_node {
**provider_id**: string
**node_status**: kubernetes_node_status
**node_spec**: kubernetes_node_spec
}
class kubernetes_attached_volume {
**device_path**: string
**name**: string
}
class kubernetes_node_status {
**addresses**: kubernetes_node_status_addresses[]
**capacity**: any
**conditions**: kubernetes_node_status_conditions[]
**config**: kubernetes_node_status_config
**daemon_endpoints**: kubernetes_node_daemon_endpoint
**images**: kubernetes_node_status_images[]
**node_info**: kubernetes_node_system_info
**phase**: string
**volumes_attached**: kubernetes_attached_volume[]
**volumes_in_use**: string[]
}
class kubernetes_node_status_addresses {
**address**: string
**type**: string
}
class kubernetes_node_status_conditions {
**last_heartbeat_time**: datetime
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_node_daemon_endpoint {
**kubelet_endpoint**: kubernetes_daemon_endpoint
}
class kubernetes_node_status_images {
**names**: string[]
**size_bytes**: int64
}
resource <|--- instance
resource <|--- kubernetes_resource
kubernetes_node_status_config --> kubernetes_node_status_config_active
kubernetes_node_status_config_active --> kubernetes_node_status_config_active_configmap
kubernetes_node_spec --> kubernetes_taint
kubernetes_resource <|--- kubernetes_node
instance <|--- kubernetes_node
kubernetes_node --> kubernetes_node_status
kubernetes_node --> kubernetes_node_spec
kubernetes_node_status --> kubernetes_node_status_addresses
kubernetes_node_status --> kubernetes_node_status_conditions
kubernetes_node_status --> kubernetes_node_status_config
kubernetes_node_status --> kubernetes_node_daemon_endpoint
kubernetes_node_status --> kubernetes_node_status_images
kubernetes_node_status --> kubernetes_node_system_info
kubernetes_node_status --> kubernetes_attached_volume
kubernetes_node_daemon_endpoint --> kubernetes_daemon_endpoint
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_node resource relationships"
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
class kubernetes_pod {
}
class kubernetes_endpoint {
}
class kubernetes_node {
}
class kubernetes_cluster {
}
class kubernetes_csi_node {
}
kubernetes_endpoint -[#1A83AF]-> kubernetes_pod
kubernetes_endpoint -[#1A83AF]-> kubernetes_node
kubernetes_node -[#1A83AF]-> kubernetes_pod
kubernetes_node -[#1A83AF]-> kubernetes_csi_node
kubernetes_cluster -[#1A83AF]-> kubernetes_node
kubernetes_cluster -[#1A83AF]-> kubernetes_csi_node
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_persistent_volume`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_persistent_volume data model"
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
class resource {
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
class volume {
**volume_size**: int64
**volume_type**: string
**volume_status**: volume_status
**volume_iops**: int64
**volume_throughput**: int64
**volume_encrypted**: boolean
**snapshot_before_delete**: boolean
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_persistent_volume {
**persistent_volume_status**: kubernetes_persistent_volume_status
**persistent_volume_spec**: kubernetes_persistent_volume_spec
}
class kubernetes_persistent_volume_status {
**message**: string
**phase**: string
**reason**: string
}
class kubernetes_persistent_volume_spec {
**access_modes**: string[]
**aws_elastic_block_store**: kubernetes_persistent_volume_spec_aws_elastic_block_store
**azure_disk**: string
**azure_file**: string
**capacity**: dictionary[string, any]
**cephfs**: string
**cinder**: string
**claim_ref**: dictionary[string, any]
**csi**: any
**fc**: string
**flex_volume**: string
**flocker**: string
**gce_persistent_disk**: string
**glusterfs**: string
**host_path**: string
**iscsi**: string
**local**: string
**mount_options**: string[]
**nfs**: string
**node_affinity**: string
**persistent_volume_reclaim_policy**: string
**photon_persistent_disk**: string
**portworx_volume**: string
**quobyte**: string
**rbd**: string
**scale_io**: string
**storage_class_name**: string
**storageos**: string
**volume_mode**: string
**vsphere_volume**: string
}
class kubernetes_persistent_volume_spec_aws_elastic_block_store {
**volume_id**: string
**fs_type**: string
}
resource <|--- volume
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_persistent_volume
volume <|--- kubernetes_persistent_volume
kubernetes_persistent_volume --> kubernetes_persistent_volume_status
kubernetes_persistent_volume --> kubernetes_persistent_volume_spec
kubernetes_persistent_volume_spec --> kubernetes_persistent_volume_spec_aws_elastic_block_store
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_persistent_volume resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_persistent_volume {
}
class kubernetes_persistent_volume_claim {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_persistent_volume
kubernetes_persistent_volume_claim -[#1A83AF]-> kubernetes_persistent_volume
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_persistent_volume_claim`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_persistent_volume_claim data model"
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
class resource {
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
class kubernetes_label_selector {
**match_expressions**: kubernetes_label_selector_requirement[]
**match_labels**: dictionary[string, string]
}
class kubernetes_label_selector_requirement {
**key**: string
**operator**: string
**values**: string[]
}
class kubernetes_resource_requirements {
**limits**: any
**requests**: any
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_persistent_volume_claim_status {
**access_modes**: string[]
**allocated_resources**: string
**conditions**: kubernetes_persistent_volume_claim_status_conditions[]
**phase**: string
**resize_status**: string
}
class kubernetes_persistent_volume_claim_status_conditions {
**last_probe_time**: datetime
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_persistent_volume_claim {
**persistent_volume_claim_status**: kubernetes_persistent_volume_claim_status
**persistent_volume_claim_spec**: kubernetes_persistent_volume_claim_spec
}
class kubernetes_persistent_volume_claim_spec {
**access_modes**: string[]
**resources**: kubernetes_resource_requirements
**selector**: kubernetes_label_selector
**storage_class_name**: string
**volume_mode**: string
**volume_name**: string
}
kubernetes_label_selector --> kubernetes_label_selector_requirement
resource <|--- kubernetes_resource
kubernetes_persistent_volume_claim_status --> kubernetes_persistent_volume_claim_status_conditions
kubernetes_resource <|--- kubernetes_persistent_volume_claim
kubernetes_persistent_volume_claim --> kubernetes_persistent_volume_claim_status
kubernetes_persistent_volume_claim --> kubernetes_persistent_volume_claim_spec
kubernetes_persistent_volume_claim_spec --> kubernetes_resource_requirements
kubernetes_persistent_volume_claim_spec --> kubernetes_label_selector
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_persistent_volume_claim resource relationships"
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
class kubernetes_pod {
}
class kubernetes_namespace {
}
class kubernetes_persistent_volume {
}
class kubernetes_persistent_volume_claim {
}
kubernetes_pod -[#1A83AF]-> kubernetes_persistent_volume_claim
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_persistent_volume_claim
kubernetes_persistent_volume_claim -[#1A83AF]-> kubernetes_persistent_volume
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_pod`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_pod data model"
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
class resource {
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
class kubernetes_pod_spec {
**active_deadline_seconds**: int64
**automount_service_account_token**: boolean
**containers**: kubernetes_container[]
**dns_policy**: string
**enable_service_links**: boolean
**ephemeral_containers**: kubernetes_container[]
**host_ipc**: boolean
**host_network**: boolean
**host_pid**: boolean
**hostname**: string
**init_containers**: kubernetes_container[]
**node_name**: string
**preemption_policy**: string
**priority**: int64
**priority_class_name**: string
**restart_policy**: string
**runtime_class_name**: string
**scheduler_name**: string
**security_context**: kubernetes_pod_security_context
**service_account**: string
**service_account_name**: string
**set_hostname_as_fqdn**: boolean
**share_process_namespace**: boolean
**subdomain**: string
**termination_grace_period_seconds**: int64
**tolerations**: kubernetes_toleration[]
**volumes**: kubernetes_volume[]
}
class kubernetes_container {
**args**: string[]
**command**: string[]
**image**: string
**image_pull_policy**: string
**name**: string
**ports**: kubernetes_container_port[]
**resources**: kubernetes_resource_requirements
**security_context**: kubernetes_security_context
**stdin**: boolean
**stdin_once**: boolean
**termination_message_path**: string
**termination_message_policy**: string
**tty**: boolean
**volume_devices**: kubernetes_volume_device[]
**volume_mounts**: kubernetes_volume_mount[]
**working_dir**: string
}
class kubernetes_container_port {
**container_port**: int64
**host_ip**: string
**host_port**: int64
**name**: string
**protocol**: string
}
class kubernetes_resource_requirements {
**limits**: any
**requests**: any
}
class kubernetes_security_context {
**allow_privilege_escalation**: boolean
**privileged**: boolean
**proc_mount**: string
**read_only_root_filesystem**: boolean
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**windows_options**: any
}
class kubernetes_volume_device {
**device_path**: string
**name**: string
}
class kubernetes_volume_mount {
**mount_path**: string
**mount_propagation**: string
**name**: string
**read_only**: boolean
**sub_path**: string
**sub_path_expr**: string
}
class kubernetes_pod_security_context {
**fs_group**: int64
**fs_group_change_policy**: string
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**supplemental_groups**: int64[]
**windows_options**: any
}
class kubernetes_toleration {
**effect**: string
**key**: string
**operator**: string
**toleration_seconds**: int64
**value**: string
}
class kubernetes_volume {
**aws_elastic_block_store**: any
**azure_disk**: any
**azure_file**: any
**cephfs**: any
**cinder**: any
**config_map**: any
**csi**: any
**downward_api**: any
**empty_dir**: any
**ephemeral**: any
**fc**: any
**flex_volume**: any
**flocker**: any
**gce_persistent_disk**: any
**git_repo**: any
**glusterfs**: any
**host_path**: any
**iscsi**: any
**name**: string
**nfs**: any
**persistent_volume_claim**: any
**photon_persistent_disk**: any
**portworx_volume**: any
**projected**: any
**quobyte**: any
**rbd**: any
**scale_io**: any
**secret**: any
**storageos**: any
**vsphere_volume**: any
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_pod_status_conditions {
**last_probe_time**: datetime
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_pod {
**pod_status**: kubernetes_pod_status
**pod_spec**: kubernetes_pod_spec
}
class kubernetes_container_state_running {
**started_at**: datetime
}
class kubernetes_container_state_terminated {
**container_id**: string
**exit_code**: int64
**finished_at**: datetime
**message**: string
**reason**: string
**signal**: int64
**started_at**: datetime
}
class kubernetes_container_status {
**container_id**: string
**image**: string
**image_id**: string
**last_state**: kubernetes_container_state
**name**: string
**ready**: boolean
**restart_count**: int64
**started**: boolean
**state**: kubernetes_container_state
}
class kubernetes_container_state {
**running**: kubernetes_container_state_running
**terminated**: kubernetes_container_state_terminated
**waiting**: kubernetes_container_state_waiting
}
class kubernetes_container_state_waiting {
**message**: string
**reason**: string
}
class kubernetes_pod_status {
**conditions**: kubernetes_pod_status_conditions[]
**container_statuses**: kubernetes_container_status[]
**ephemeral_container_statuses**: kubernetes_container_state[]
**host_ip**: string
**init_container_statuses**: kubernetes_container_status[]
**message**: string
**nominated_node_name**: string
**phase**: string
**pod_ip**: string
**pod_ips**: kubernetes_pod_ips[]
**qos_class**: string
**reason**: string
**start_time**: datetime
}
class kubernetes_pod_ips {
**ip**: string
}
kubernetes_pod_spec --> kubernetes_container
kubernetes_pod_spec --> kubernetes_pod_security_context
kubernetes_pod_spec --> kubernetes_toleration
kubernetes_pod_spec --> kubernetes_volume
kubernetes_container --> kubernetes_container_port
kubernetes_container --> kubernetes_resource_requirements
kubernetes_container --> kubernetes_security_context
kubernetes_container --> kubernetes_volume_device
kubernetes_container --> kubernetes_volume_mount
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_pod
kubernetes_pod --> kubernetes_pod_status
kubernetes_pod --> kubernetes_pod_spec
kubernetes_container_status --> kubernetes_container_state
kubernetes_container_state --> kubernetes_container_state_running
kubernetes_container_state --> kubernetes_container_state_terminated
kubernetes_container_state --> kubernetes_container_state_waiting
kubernetes_pod_status --> kubernetes_pod_status_conditions
kubernetes_pod_status --> kubernetes_container_status
kubernetes_pod_status --> kubernetes_container_state
kubernetes_pod_status --> kubernetes_pod_ips
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_pod resource relationships"
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
class kubernetes_daemon_set {
}
class kubernetes_pod {
}
class kubernetes_endpoint {
}
class kubernetes_node {
}
class kubernetes_secret {
}
class kubernetes_namespace {
}
class kubernetes_service {
}
class kubernetes_stateful_set {
}
class kubernetes_replica_set {
}
class kubernetes_persistent_volume_claim {
}
class kubernetes_config_map {
}
class kubernetes_job {
}
kubernetes_daemon_set -[#1A83AF]-> kubernetes_pod
kubernetes_pod -[#1A83AF]-> kubernetes_secret
kubernetes_pod -[#1A83AF]-> kubernetes_persistent_volume_claim
kubernetes_pod -[#1A83AF]-> kubernetes_config_map
kubernetes_endpoint -[#1A83AF]-> kubernetes_pod
kubernetes_endpoint -[#1A83AF]-> kubernetes_node
kubernetes_node -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_daemon_set
kubernetes_namespace -[#1A83AF]-> kubernetes_persistent_volume_claim
kubernetes_namespace -[#1A83AF]-> kubernetes_config_map
kubernetes_namespace -[#1A83AF]-> kubernetes_secret
kubernetes_namespace -[#1A83AF]-> kubernetes_endpoint
kubernetes_namespace -[#1A83AF]-> kubernetes_stateful_set
kubernetes_namespace -[#1A83AF]-> kubernetes_replica_set
kubernetes_namespace -[#1A83AF]-> kubernetes_job
kubernetes_namespace -[#1A83AF]-> kubernetes_service
kubernetes_service -[#1A83AF]-> kubernetes_pod
kubernetes_stateful_set -[#1A83AF]-> kubernetes_pod
kubernetes_replica_set -[#1A83AF]-> kubernetes_pod
kubernetes_job -[#1A83AF]-> kubernetes_pod
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_pod_disruption_budget`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_pod_disruption_budget data model"
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
class resource {
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
class kubernetes_pod_disruption_budget_spec {
**max_unavailable**: any
**min_available**: any
**selector**: kubernetes_label_selector
}
class kubernetes_label_selector {
**match_expressions**: kubernetes_label_selector_requirement[]
**match_labels**: dictionary[string, string]
}
class kubernetes_label_selector_requirement {
**key**: string
**operator**: string
**values**: string[]
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_pod_disruption_budget_status_conditions {
**last_transition_time**: datetime
**message**: string
**observed_generation**: int64
**reason**: string
**status**: string
**type**: string
}
class kubernetes_pod_disruption_budget {
**pod_disruption_budget_status**: kubernetes_pod_disruption_budget_status
**pod_disruption_budget_spec**: kubernetes_pod_disruption_budget_spec
}
class kubernetes_pod_disruption_budget_status {
**conditions**: kubernetes_pod_disruption_budget_status_conditions[]
**current_healthy**: int64
**desired_healthy**: int64
**disrupted_pods**: any
**disruptions_allowed**: int64
**expected_pods**: int64
**observed_generation**: int64
}
kubernetes_pod_disruption_budget_spec --> kubernetes_label_selector
kubernetes_label_selector --> kubernetes_label_selector_requirement
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_pod_disruption_budget
kubernetes_pod_disruption_budget --> kubernetes_pod_disruption_budget_status
kubernetes_pod_disruption_budget --> kubernetes_pod_disruption_budget_spec
kubernetes_pod_disruption_budget_status --> kubernetes_pod_disruption_budget_status_conditions
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_pod_disruption_budget resource relationships"
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
class kubernetes_namespace {
}
class kubernetes_pod_disruption_budget {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_pod_disruption_budget
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_pod_template`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_pod_template data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_pod_template {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_pod_template
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_pod_template resource relationships"
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
class kubernetes_pod_template {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_priority_class`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_priority_class data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_priority_class {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_priority_class
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_priority_class resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_priority_class {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_priority_class
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_priority_level_configuration`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_priority_level_configuration data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_priority_level_configuration {
**priority_level_configuration_status**: kubernetes_priority_level_configuration_status
}
class kubernetes_priority_level_configuration_status {
**conditions**: kubernetes_priority_level_configuration_status_conditions[]
}
class kubernetes_priority_level_configuration_status_conditions {
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_priority_level_configuration
kubernetes_priority_level_configuration --> kubernetes_priority_level_configuration_status
kubernetes_priority_level_configuration_status --> kubernetes_priority_level_configuration_status_conditions
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_priority_level_configuration resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_priority_level_configuration {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_priority_level_configuration
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_replica_set`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_replica_set data model"
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
class resource {
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
class kubernetes_label_selector {
**match_expressions**: kubernetes_label_selector_requirement[]
**match_labels**: dictionary[string, string]
}
class kubernetes_label_selector_requirement {
**key**: string
**operator**: string
**values**: string[]
}
class kubernetes_replica_set_spec {
**min_ready_seconds**: int64
**replicas**: int64
**selector**: kubernetes_label_selector
**template**: kubernetes_pod_template_spec
}
class kubernetes_pod_template_spec {
**spec**: kubernetes_pod_spec
}
class kubernetes_pod_spec {
**active_deadline_seconds**: int64
**automount_service_account_token**: boolean
**containers**: kubernetes_container[]
**dns_policy**: string
**enable_service_links**: boolean
**ephemeral_containers**: kubernetes_container[]
**host_ipc**: boolean
**host_network**: boolean
**host_pid**: boolean
**hostname**: string
**init_containers**: kubernetes_container[]
**node_name**: string
**preemption_policy**: string
**priority**: int64
**priority_class_name**: string
**restart_policy**: string
**runtime_class_name**: string
**scheduler_name**: string
**security_context**: kubernetes_pod_security_context
**service_account**: string
**service_account_name**: string
**set_hostname_as_fqdn**: boolean
**share_process_namespace**: boolean
**subdomain**: string
**termination_grace_period_seconds**: int64
**tolerations**: kubernetes_toleration[]
**volumes**: kubernetes_volume[]
}
class kubernetes_container {
**args**: string[]
**command**: string[]
**image**: string
**image_pull_policy**: string
**name**: string
**ports**: kubernetes_container_port[]
**resources**: kubernetes_resource_requirements
**security_context**: kubernetes_security_context
**stdin**: boolean
**stdin_once**: boolean
**termination_message_path**: string
**termination_message_policy**: string
**tty**: boolean
**volume_devices**: kubernetes_volume_device[]
**volume_mounts**: kubernetes_volume_mount[]
**working_dir**: string
}
class kubernetes_container_port {
**container_port**: int64
**host_ip**: string
**host_port**: int64
**name**: string
**protocol**: string
}
class kubernetes_resource_requirements {
**limits**: any
**requests**: any
}
class kubernetes_security_context {
**allow_privilege_escalation**: boolean
**privileged**: boolean
**proc_mount**: string
**read_only_root_filesystem**: boolean
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**windows_options**: any
}
class kubernetes_volume_device {
**device_path**: string
**name**: string
}
class kubernetes_volume_mount {
**mount_path**: string
**mount_propagation**: string
**name**: string
**read_only**: boolean
**sub_path**: string
**sub_path_expr**: string
}
class kubernetes_pod_security_context {
**fs_group**: int64
**fs_group_change_policy**: string
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**supplemental_groups**: int64[]
**windows_options**: any
}
class kubernetes_toleration {
**effect**: string
**key**: string
**operator**: string
**toleration_seconds**: int64
**value**: string
}
class kubernetes_volume {
**aws_elastic_block_store**: any
**azure_disk**: any
**azure_file**: any
**cephfs**: any
**cinder**: any
**config_map**: any
**csi**: any
**downward_api**: any
**empty_dir**: any
**ephemeral**: any
**fc**: any
**flex_volume**: any
**flocker**: any
**gce_persistent_disk**: any
**git_repo**: any
**glusterfs**: any
**host_path**: any
**iscsi**: any
**name**: string
**nfs**: any
**persistent_volume_claim**: any
**photon_persistent_disk**: any
**portworx_volume**: any
**projected**: any
**quobyte**: any
**rbd**: any
**scale_io**: any
**secret**: any
**storageos**: any
**vsphere_volume**: any
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_replica_set_status_conditions {
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_replica_set {
**replica_set_status**: kubernetes_replica_set_status
**replica_set_spec**: kubernetes_replica_set_spec
}
class kubernetes_replica_set_status {
**available_replicas**: int64
**conditions**: kubernetes_replica_set_status_conditions[]
**fully_labeled_replicas**: int64
**observed_generation**: int64
**ready_replicas**: int64
**replicas**: int64
}
kubernetes_label_selector --> kubernetes_label_selector_requirement
kubernetes_replica_set_spec --> kubernetes_label_selector
kubernetes_replica_set_spec --> kubernetes_pod_template_spec
kubernetes_pod_template_spec --> kubernetes_pod_spec
kubernetes_pod_spec --> kubernetes_container
kubernetes_pod_spec --> kubernetes_pod_security_context
kubernetes_pod_spec --> kubernetes_toleration
kubernetes_pod_spec --> kubernetes_volume
kubernetes_container --> kubernetes_container_port
kubernetes_container --> kubernetes_resource_requirements
kubernetes_container --> kubernetes_security_context
kubernetes_container --> kubernetes_volume_device
kubernetes_container --> kubernetes_volume_mount
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_replica_set
kubernetes_replica_set --> kubernetes_replica_set_status
kubernetes_replica_set --> kubernetes_replica_set_spec
kubernetes_replica_set_status --> kubernetes_replica_set_status_conditions
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_replica_set resource relationships"
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
class kubernetes_pod {
}
class kubernetes_namespace {
}
class kubernetes_deployment {
}
class kubernetes_replica_set {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_deployment
kubernetes_namespace -[#1A83AF]-> kubernetes_replica_set
kubernetes_deployment -[#1A83AF]-> kubernetes_replica_set
kubernetes_replica_set -[#1A83AF]-> kubernetes_pod
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_replication_controller`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_replication_controller data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_replication_controller {
**replication_controller_status**: kubernetes_replication_controller_status
}
class kubernetes_replication_controller_status {
**available_replicas**: int64
**conditions**: kubernetes_replication_controller_status_conditions[]
**fully_labeled_replicas**: int64
**observed_generation**: int64
**ready_replicas**: int64
**replicas**: int64
}
class kubernetes_replication_controller_status_conditions {
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_replication_controller
kubernetes_replication_controller --> kubernetes_replication_controller_status
kubernetes_replication_controller_status --> kubernetes_replication_controller_status_conditions
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_replication_controller resource relationships"
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
class kubernetes_replication_controller {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_resource`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_resource data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
resource <|--- kubernetes_resource
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_resource resource relationships"
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
class kubernetes_resource {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_resource_quota`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_resource_quota data model"
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
class resource {
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
class kubernetes_resource_quota_status {
**hard**: any
**used**: any
}
class phantom_resource {
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class quota {
**quota**: double
**usage**: double
**quota_type**: string
}
class kubernetes_resource_quota_spec {
**hard**: any
**scope_selector**: any
**scopes**: string[]
}
class kubernetes_resource_quota {
**resource_quota_status**: kubernetes_resource_quota_status
**resource_quota_spec**: kubernetes_resource_quota_spec
}
resource <|--- phantom_resource
resource <|--- kubernetes_resource
phantom_resource <|--- quota
kubernetes_resource <|--- kubernetes_resource_quota
quota <|--- kubernetes_resource_quota
kubernetes_resource_quota --> kubernetes_resource_quota_status
kubernetes_resource_quota --> kubernetes_resource_quota_spec
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_resource_quota resource relationships"
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
class kubernetes_resource_quota {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_role`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_role data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_role {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_role
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_role resource relationships"
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
class kubernetes_namespace {
}
class kubernetes_role {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_role
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_role_binding`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_role_binding data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_role_binding {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_role_binding
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_role_binding resource relationships"
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
class kubernetes_namespace {
}
class kubernetes_role_binding {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_role_binding
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_runtime_class`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_runtime_class data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_runtime_class {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_runtime_class
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_runtime_class resource relationships"
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
class kubernetes_runtime_class {
}
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_secret`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_secret data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_secret {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_secret
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_secret resource relationships"
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
class kubernetes_pod {
}
class kubernetes_service_account {
}
class kubernetes_secret {
}
class kubernetes_namespace {
}
kubernetes_pod -[#1A83AF]-> kubernetes_secret
kubernetes_service_account -[#1A83AF]-> kubernetes_secret
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_service_account
kubernetes_namespace -[#1A83AF]-> kubernetes_secret
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_service`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_service data model"
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
class resource {
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
class kubernetes_loadbalancer_ingress {
**hostname**: string
**ip**: string
**ports**: kubernetes_loadbalancer_ingress_ports[]
}
class kubernetes_loadbalancer_ingress_ports {
**error**: string
**port**: int64
**protocol**: string
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_service {
**service_status**: kubernetes_service_status
**service_spec**: kubernetes_service_spec
}
class kubernetes_service_status {
**conditions**: kubernetes_service_status_conditions[]
**load_balancer**: kubernetes_loadbalancer_status
}
class kubernetes_service_status_conditions {
**last_transition_time**: datetime
**message**: string
**observed_generation**: int64
**reason**: string
**status**: string
**type**: string
}
class kubernetes_loadbalancer_status {
**ingress**: kubernetes_loadbalancer_ingress[]
}
class kubernetes_service_spec {
**allocate_load_balancer_node_ports**: boolean
**cluster_ip**: string
**cluster_ips**: string[]
**external_ips**: string[]
**external_name**: string
**external_traffic_policy**: string
**health_check_node_port**: int64
**internal_traffic_policy**: string
**ip_families**: string[]
**ip_family_policy**: string
**load_balancer_class**: string
**load_balancer_ip**: string
**load_balancer_source_ranges**: string[]
**ports**: kubernetes_service_port[]
**publish_not_ready_addresses**: boolean
**session_affinity**: string
**type**: string
}
class kubernetes_service_port {
**app_protocol**: string
**name**: string
**node_port**: int64
**port**: int64
**protocol**: string
**target_port**: any
}
kubernetes_loadbalancer_ingress --> kubernetes_loadbalancer_ingress_ports
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_service
kubernetes_service --> kubernetes_service_status
kubernetes_service --> kubernetes_service_spec
kubernetes_service_status --> kubernetes_service_status_conditions
kubernetes_service_status --> kubernetes_loadbalancer_status
kubernetes_loadbalancer_status --> kubernetes_loadbalancer_ingress
kubernetes_service_spec --> kubernetes_service_port
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_service resource relationships"
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
class kubernetes_pod {
}
class kubernetes_endpoint_slice {
}
class kubernetes_namespace {
}
class kubernetes_service {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_service
kubernetes_service -[#1A83AF]-> kubernetes_endpoint_slice
kubernetes_service -[#1A83AF]-> kubernetes_pod
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_service_account`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_service_account data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_service_account {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_service_account
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_service_account resource relationships"
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
class kubernetes_service_account {
}
class kubernetes_secret {
}
class kubernetes_namespace {
}
kubernetes_service_account -[#1A83AF]-> kubernetes_secret
kubernetes_namespace -[#1A83AF]-> kubernetes_service_account
kubernetes_namespace -[#1A83AF]-> kubernetes_secret
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_stateful_set`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_stateful_set data model"
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
class resource {
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
class kubernetes_label_selector {
**match_expressions**: kubernetes_label_selector_requirement[]
**match_labels**: dictionary[string, string]
}
class kubernetes_label_selector_requirement {
**key**: string
**operator**: string
**values**: string[]
}
class kubernetes_pod_template_spec {
**spec**: kubernetes_pod_spec
}
class kubernetes_pod_spec {
**active_deadline_seconds**: int64
**automount_service_account_token**: boolean
**containers**: kubernetes_container[]
**dns_policy**: string
**enable_service_links**: boolean
**ephemeral_containers**: kubernetes_container[]
**host_ipc**: boolean
**host_network**: boolean
**host_pid**: boolean
**hostname**: string
**init_containers**: kubernetes_container[]
**node_name**: string
**preemption_policy**: string
**priority**: int64
**priority_class_name**: string
**restart_policy**: string
**runtime_class_name**: string
**scheduler_name**: string
**security_context**: kubernetes_pod_security_context
**service_account**: string
**service_account_name**: string
**set_hostname_as_fqdn**: boolean
**share_process_namespace**: boolean
**subdomain**: string
**termination_grace_period_seconds**: int64
**tolerations**: kubernetes_toleration[]
**volumes**: kubernetes_volume[]
}
class kubernetes_container {
**args**: string[]
**command**: string[]
**image**: string
**image_pull_policy**: string
**name**: string
**ports**: kubernetes_container_port[]
**resources**: kubernetes_resource_requirements
**security_context**: kubernetes_security_context
**stdin**: boolean
**stdin_once**: boolean
**termination_message_path**: string
**termination_message_policy**: string
**tty**: boolean
**volume_devices**: kubernetes_volume_device[]
**volume_mounts**: kubernetes_volume_mount[]
**working_dir**: string
}
class kubernetes_container_port {
**container_port**: int64
**host_ip**: string
**host_port**: int64
**name**: string
**protocol**: string
}
class kubernetes_resource_requirements {
**limits**: any
**requests**: any
}
class kubernetes_security_context {
**allow_privilege_escalation**: boolean
**privileged**: boolean
**proc_mount**: string
**read_only_root_filesystem**: boolean
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**windows_options**: any
}
class kubernetes_volume_device {
**device_path**: string
**name**: string
}
class kubernetes_volume_mount {
**mount_path**: string
**mount_propagation**: string
**name**: string
**read_only**: boolean
**sub_path**: string
**sub_path_expr**: string
}
class kubernetes_pod_security_context {
**fs_group**: int64
**fs_group_change_policy**: string
**run_as_group**: int64
**run_as_non_root**: boolean
**run_as_user**: int64
**se_linux_options**: any
**seccomp_profile**: any
**supplemental_groups**: int64[]
**windows_options**: any
}
class kubernetes_toleration {
**effect**: string
**key**: string
**operator**: string
**toleration_seconds**: int64
**value**: string
}
class kubernetes_volume {
**aws_elastic_block_store**: any
**azure_disk**: any
**azure_file**: any
**cephfs**: any
**cinder**: any
**config_map**: any
**csi**: any
**downward_api**: any
**empty_dir**: any
**ephemeral**: any
**fc**: any
**flex_volume**: any
**flocker**: any
**gce_persistent_disk**: any
**git_repo**: any
**glusterfs**: any
**host_path**: any
**iscsi**: any
**name**: string
**nfs**: any
**persistent_volume_claim**: any
**photon_persistent_disk**: any
**portworx_volume**: any
**projected**: any
**quobyte**: any
**rbd**: any
**scale_io**: any
**secret**: any
**storageos**: any
**vsphere_volume**: any
}
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_stateful_set_status_condition {
**last_transition_time**: datetime
**message**: string
**reason**: string
**status**: string
**type**: string
}
class kubernetes_stateful_set_status {
**available_replicas**: int64
**collision_count**: int64
**conditions**: kubernetes_stateful_set_status_condition[]
**current_replicas**: int64
**current_revision**: string
**observed_generation**: int64
**ready_replicas**: int64
**replicas**: int64
**update_revision**: string
**updated_replicas**: int64
}
class kubernetes_stateful_set {
**stateful_set_status**: kubernetes_stateful_set_status
**stateful_set_spec**: kubernetes_stateful_set_spec
}
class kubernetes_stateful_set_spec {
**min_ready_seconds**: int64
**pod_management_policy**: string
**replicas**: int64
**revision_history_limit**: int64
**selector**: kubernetes_label_selector
**service_name**: string
**template**: kubernetes_pod_template_spec
}
kubernetes_label_selector --> kubernetes_label_selector_requirement
kubernetes_pod_template_spec --> kubernetes_pod_spec
kubernetes_pod_spec --> kubernetes_container
kubernetes_pod_spec --> kubernetes_pod_security_context
kubernetes_pod_spec --> kubernetes_toleration
kubernetes_pod_spec --> kubernetes_volume
kubernetes_container --> kubernetes_container_port
kubernetes_container --> kubernetes_resource_requirements
kubernetes_container --> kubernetes_security_context
kubernetes_container --> kubernetes_volume_device
kubernetes_container --> kubernetes_volume_mount
resource <|--- kubernetes_resource
kubernetes_stateful_set_status --> kubernetes_stateful_set_status_condition
kubernetes_resource <|--- kubernetes_stateful_set
kubernetes_stateful_set --> kubernetes_stateful_set_status
kubernetes_stateful_set --> kubernetes_stateful_set_spec
kubernetes_stateful_set_spec --> kubernetes_label_selector
kubernetes_stateful_set_spec --> kubernetes_pod_template_spec
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_stateful_set resource relationships"
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
class kubernetes_pod {
}
class kubernetes_controller_revision {
}
class kubernetes_namespace {
}
class kubernetes_stateful_set {
}
kubernetes_namespace -[#1A83AF]-> kubernetes_pod
kubernetes_namespace -[#1A83AF]-> kubernetes_stateful_set
kubernetes_namespace -[#1A83AF]-> kubernetes_controller_revision
kubernetes_stateful_set -[#1A83AF]-> kubernetes_pod
kubernetes_stateful_set -[#1A83AF]-> kubernetes_controller_revision
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_storage_class`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_storage_class data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_storage_class {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_storage_class
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_storage_class resource relationships"
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
class kubernetes_storage_class {
}
class kubernetes_cluster {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_storage_class
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_validating_webhook_configuration`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_validating_webhook_configuration data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_validating_webhook_configuration {
}
resource <|--- kubernetes_resource
kubernetes_resource <|--- kubernetes_validating_webhook_configuration
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_validating_webhook_configuration resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_validating_webhook_configuration {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_validating_webhook_configuration
@enduml
```

</ZoomPanPinch>
</div>
</details>

## `kubernetes_volume_attachment`

<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_volume_attachment data model"
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
class resource {
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
class kubernetes_resource {
**resource_version**: string
**namespace**: string
**labels**: dictionary[string, string]
}
class kubernetes_volume_attachment_status {
**attach_error**: kubernetes_volume_error
**attached**: boolean
**attachment_metadata**: any
**detach_error**: kubernetes_volume_error
}
class kubernetes_volume_error {
**message**: string
**time**: datetime
}
class kubernetes_volume_attachment {
**volume_attachment_status**: kubernetes_volume_attachment_status
**volume_attachment_spec**: kubernetes_volume_attachment_spec
}
class kubernetes_volume_attachment_spec {
**attacher**: string
**node_name**: string
**source**: any
}
resource <|--- kubernetes_resource
kubernetes_volume_attachment_status --> kubernetes_volume_error
kubernetes_resource <|--- kubernetes_volume_attachment
kubernetes_volume_attachment --> kubernetes_volume_attachment_status
kubernetes_volume_attachment --> kubernetes_volume_attachment_spec
@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgAlt="Diagram of kubernetes_volume_attachment resource relationships"
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
class kubernetes_cluster {
}
class kubernetes_volume_attachment {
}
kubernetes_cluster -[#1A83AF]-> kubernetes_volume_attachment
@enduml
```

</ZoomPanPinch>
</div>
</details>
