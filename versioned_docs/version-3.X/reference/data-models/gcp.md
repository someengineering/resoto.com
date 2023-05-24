---
sidebar_label: Google Cloud
slug: /reference/data-models/google-cloud
---

# Google Cloud Resource Data Models

```mdx-code-block
import ZoomPanPinch from '@site/src/components/ZoomPanPinch';
```

:::info

See [How to Collect Google Cloud Resource Data](../../how-to-guides/data-sources/collect-google-cloud-resource-data.md) for step-by-step directions to configure Resoto to collect [Google Cloud](https://cloud.google.com) resources.

:::

## `gcp_accelerator_type`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_accelerator_type data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_accelerator_type [[#gcp_accelerator_type]] {
**type_maximum_cards_per_instance**: int64
}
gcp_resource <|--- gcp_accelerator_type

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_accelerator_type resource relationships"
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

class gcp_accelerator_type [[#gcp_accelerator_type]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_address`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_address data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_address [[#gcp_address]] {
**address**: string
**address_type**: string
**ip_version**: string
**ipv6_endpoint_type**: string
**network**: string
**network_tier**: string
**prefix_length**: int64
**purpose**: string
**status**: string
**subnetwork**: string
**users**: string[]
}
gcp_resource <|--- gcp_address

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_address resource relationships"
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

class gcp_address [[#gcp_address]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_autoscaler`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_autoscaler data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class autoscaling_group [[#autoscaling_group]] {
**min_size**: int64
**max_size**: int64
}
class gcp_autoscaler [[#gcp_autoscaler]] {

}
resource <|--- autoscaling_group
gcp_resource <|--- gcp_autoscaler
autoscaling_group <|--- gcp_autoscaler

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_autoscaler resource relationships"
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

class gcp_instance_group_manager [[#gcp_instance_group_manager]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_autoscaler [[#gcp_autoscaler]] {

}
class gcp_zone [[#gcp_zone]] {

}
gcp_region -[#1A83AF]-> gcp_instance_group_manager
gcp_region -[#1A83AF]-> gcp_autoscaler
gcp_region -[#1A83AF]-> gcp_zone
gcp_autoscaler -[#1A83AF]-> gcp_instance_group_manager
gcp_zone -[#1A83AF]-> gcp_autoscaler

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_backend_bucket`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_backend_bucket data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_backend_bucket_cdn_policy_negative_caching_policy [[#gcp_backend_bucket_cdn_policy_negative_caching_policy]] {
**code**: int64
**ttl**: int64
}
class gcp_backend_bucket_cdn_policy_cache_key_policy [[#gcp_backend_bucket_cdn_policy_cache_key_policy]] {
**include_http_headers**: string[]
**query_string_whitelist**: string[]
}
class gcp_backend_bucket [[#gcp_backend_bucket]] {
**bucket_name**: string
**backend_bucket_cdn_policy**: gcp_backend_bucket_cdn_policy
**compression_mode**: string
**custom_response_headers**: string[]
**edge_security_policy**: string
**enable_cdn**: boolean
}
class gcp_backend_bucket_cdn_policy [[#gcp_backend_bucket_cdn_policy]] {
**bypass_cache_on_request_headers**: string[]
**cache_key_policy**: gcp_backend_bucket_cdn_policy_cache_key_policy
**cache_mode**: string
**client_ttl**: int64
**default_ttl**: int64
**max_ttl**: int64
**negative_caching**: boolean
**negative_caching_policy**: gcp_backend_bucket_cdn_policy_negative_caching_policy[]
**request_coalescing**: boolean
**serve_while_stale**: int64
**signed_url_cache_max_age_sec**: string
**signed_url_key_names**: string[]
}
gcp_resource <|--- gcp_backend_bucket
gcp_backend_bucket --> gcp_backend_bucket_cdn_policy
gcp_backend_bucket_cdn_policy --> gcp_backend_bucket_cdn_policy_cache_key_policy
gcp_backend_bucket_cdn_policy --> gcp_backend_bucket_cdn_policy_negative_caching_policy

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_backend_bucket resource relationships"
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

class gcp_backend_bucket [[#gcp_backend_bucket]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_backend_service`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_backend_service data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_backend_service [[#gcp_backend_service]] {

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
gcp_resource <|--- gcp_backend_service
resource <|--- gcp_backend_service

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_backend_service resource relationships"
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

class gcp_service_attachment [[#gcp_service_attachment]] {

}
class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_instance_group [[#gcp_instance_group]] {

}
class gcp_http_health_check [[#gcp_http_health_check]] {

}
class gcp_network_endpoint_group [[#gcp_network_endpoint_group]] {

}
class gcp_health_check [[#gcp_health_check]] {

}
class gcp_https_health_check [[#gcp_https_health_check]] {

}
class gcp_target_tcp_proxy [[#gcp_target_tcp_proxy]] {

}
class gcp_target_ssl_proxy [[#gcp_target_ssl_proxy]] {

}
class gcp_url_map [[#gcp_url_map]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_region [[#gcp_region]] {

}
gcp_service_attachment -[#1A83AF]-> gcp_backend_service
gcp_backend_service -[#1A83AF]-> gcp_instance_group
gcp_backend_service -[#1A83AF]-> gcp_http_health_check
gcp_backend_service -[#1A83AF]-> gcp_network_endpoint_group
gcp_backend_service -[#1A83AF]-> gcp_health_check
gcp_backend_service -[#1A83AF]-> gcp_https_health_check
gcp_target_tcp_proxy -[#1A83AF]-> gcp_backend_service
gcp_target_ssl_proxy -[#1A83AF]-> gcp_backend_service
gcp_url_map -[#1A83AF]-> gcp_backend_service
gcp_project -[#1A83AF]-> gcp_http_health_check
gcp_project -[#1A83AF]-> gcp_backend_service
gcp_project -[#1A83AF]-> gcp_region
gcp_project -[#1A83AF]-> gcp_target_ssl_proxy
gcp_project -[#1A83AF]-> gcp_health_check
gcp_project -[#1A83AF]-> gcp_https_health_check
gcp_project -[#1A83AF]-> gcp_target_tcp_proxy
gcp_region -[#1A83AF]-> gcp_instance_group
gcp_region -[#1A83AF]-> gcp_network_endpoint_group
gcp_region -[#1A83AF]-> gcp_backend_service
gcp_region -[#1A83AF]-> gcp_health_check
gcp_region -[#1A83AF]-> gcp_url_map

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_billing_account`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_billing_account data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_billing_account [[#gcp_billing_account]] {
**display_name**: string
**master_billing_account**: string
**open**: boolean
}
gcp_resource <|--- gcp_billing_account

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_billing_account resource relationships"
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

class gcp_project_billing_info [[#gcp_project_billing_info]] {

}
class gcp_billing_account [[#gcp_billing_account]] {

}
gcp_billing_account -[#1A83AF]-> gcp_project_billing_info

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_bucket`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_bucket data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class bucket [[#bucket]] {

}
class gcp_bucket [[#gcp_bucket]] {
**bucket_location**: string
**bucket_location_type**: string
**storage_class**: string
**zone_separation**: boolean
}
resource <|--- bucket
gcp_resource <|--- gcp_bucket
bucket <|--- gcp_bucket

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_bucket resource relationships"
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

class gcp_project [[#gcp_project]] {

}
class gcp_bucket [[#gcp_bucket]] {

}
gcp_project -[#1A83AF]-> gcp_bucket

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_commitment`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_commitment data model"
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

class gcp_share_settings_project_config [[#gcp_share_settings_project_config]] {
**project_id**: string
}
class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_commitment [[#gcp_commitment]] {
**auto_renew**: boolean
**commitment_category**: string
**end_timestamp**: datetime
**license_resource**: gcp_license_resource_commitment
**merge_source_commitments**: string[]
**plan**: string
**reservations**: gcp_reservation[]
**resources**: gcp_resource_commitment[]
**split_source_commitment**: string
**start_timestamp**: datetime
**status**: string
**status_message**: string
**type**: string
}
class gcp_license_resource_commitment [[#gcp_license_resource_commitment]] {
**amount**: string
**cores_per_license**: string
**license**: string
}
class gcp_reservation [[#gcp_reservation]] {
**commitment**: string
**creation_timestamp**: datetime
**description**: string
**id**: string
**name**: string
**satisfies_pzs**: boolean
**self_link**: string
**share_settings**: gcp_share_settings
**specific_reservation**: gcp_allocation_specific_sku_reservation
**specific_reservation_required**: boolean
**status**: string
**zone**: string
}
class gcp_share_settings [[#gcp_share_settings]] {
**project_map**: dictionary[string, gcp_share_settings_project_config]
**share_type**: string
}
class gcp_allocation_specific_sku_reservation [[#gcp_allocation_specific_sku_reservation]] {
**assured_count**: string
**count**: string
**in_use_count**: string
**instance_properties**: gcp_allocation_specific_sku_allocation_reserved_instance_properties
}
class gcp_allocation_specific_sku_allocation_reserved_instance_properties [[#gcp_allocation_specific_sku_allocation_reserved_instance_properties]] {
**guest_accelerators**: gcp_accelerator_config[]
**local_ssds**: gcp_allocation_specific_sku_allocation_allocated_instance_properties_reserved_disk[]
**location_hint**: string
**machine_type**: string
**min_cpu_platform**: string
}
class gcp_accelerator_config [[#gcp_accelerator_config]] {
**accelerator_count**: int64
**accelerator_type**: string
}
class gcp_allocation_specific_sku_allocation_allocated_instance_properties_reserved_disk [[#gcp_allocation_specific_sku_allocation_allocated_instance_properties_reserved_disk]] {
**disk_size_gb**: string
**interface**: string
}
class gcp_resource_commitment [[#gcp_resource_commitment]] {
**accelerator_type**: string
**amount**: string
**type**: string
}
gcp_resource <|--- gcp_commitment
gcp_commitment --> gcp_license_resource_commitment
gcp_commitment --> gcp_reservation
gcp_commitment --> gcp_resource_commitment
gcp_reservation --> gcp_share_settings
gcp_reservation --> gcp_allocation_specific_sku_reservation
gcp_share_settings --> gcp_share_settings_project_config
gcp_allocation_specific_sku_reservation --> gcp_allocation_specific_sku_allocation_reserved_instance_properties
gcp_allocation_specific_sku_allocation_reserved_instance_properties --> gcp_accelerator_config
gcp_allocation_specific_sku_allocation_reserved_instance_properties --> gcp_allocation_specific_sku_allocation_allocated_instance_properties_reserved_disk

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_commitment resource relationships"
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

class gcp_commitment [[#gcp_commitment]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_container_cluster`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_container_cluster data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_container_node_pool [[#gcp_container_node_pool]] {
**autoscaling**: gcp_container_node_pool_autoscaling
**conditions**: gcp_container_status_condition[]
**config**: gcp_container_node_config
**initial_node_count**: int64
**instance_group_urls**: string[]
**locations**: string[]
**management**: gcp_container_node_management
**max_pods_constraint**: string
**name**: string
**network_config**: gcp_container_node_network_config
**pod_ipv4_cidr_size**: int64
**self_link**: string
**status**: string
**status_message**: string
**update_info**: gcp_container_update_info
**upgrade_settings**: gcp_container_upgrade_settings
**version**: string
}
class gcp_container_node_pool_autoscaling [[#gcp_container_node_pool_autoscaling]] {
**autoprovisioned**: boolean
**enabled**: boolean
**location_policy**: string
**max_node_count**: int64
**min_node_count**: int64
**total_max_node_count**: int64
**total_min_node_count**: int64
}
class gcp_container_status_condition [[#gcp_container_status_condition]] {
**canonical_code**: string
**code**: string
**message**: string
}
class gcp_container_node_config [[#gcp_container_node_config]] {
**accelerators**: gcp_container_accelerator_config[]
**advanced_machine_features**: string
**boot_disk_kms_key**: string
**confidential_nodes**: boolean
**disk_size_gb**: int64
**disk_type**: string
**gcfs_config**: boolean
**gvnic**: boolean
**image_type**: string
**kubelet_config**: gcp_container_node_kubelet_config
**labels**: dictionary[string, string]
**linux_node_config**: gcp_container_linux_node_config
**local_ssd_count**: int64
**logging_config**: gcp_container_node_pool_logging_config
**machine_type**: string
**metadata**: dictionary[string, string]
**min_cpu_platform**: string
**node_group**: string
**oauth_scopes**: string[]
**preemptible**: boolean
**reservation_affinity**: gcp_container_reservation_affinity
**sandbox_config**: string
**service_account**: string
**shielded_instance_config**: gcp_container_shielded_instance_config
**spot**: boolean
**tags**: string[]
**taints**: gcp_container_node_taint[]
**workload_metadata_config**: string
}
class gcp_container_accelerator_config [[#gcp_container_accelerator_config]] {
**accelerator_count**: string
**accelerator_type**: string
**gpu_partition_size**: string
**gpu_sharing_config**: gcp_container_gpu_sharing_config
}
class gcp_container_gpu_sharing_config [[#gcp_container_gpu_sharing_config]] {
**gpu_sharing_strategy**: string
**max_shared_clients_per_gpu**: string
}
class gcp_container_node_kubelet_config [[#gcp_container_node_kubelet_config]] {
**cpu_cfs_quota**: boolean
**cpu_cfs_quota_period**: string
**cpu_manager_policy**: string
**pod_pids_limit**: string
}
class gcp_container_linux_node_config [[#gcp_container_linux_node_config]] {
**sysctls**: dictionary[string, string]
}
class gcp_container_node_pool_logging_config [[#gcp_container_node_pool_logging_config]] {
**variant_config**: string
}
class gcp_container_reservation_affinity [[#gcp_container_reservation_affinity]] {
**consume_reservation_type**: string
**key**: string
**values**: string[]
}
class gcp_container_shielded_instance_config [[#gcp_container_shielded_instance_config]] {
**enable_integrity_monitoring**: boolean
**enable_secure_boot**: boolean
}
class gcp_container_node_taint [[#gcp_container_node_taint]] {
**effect**: string
**key**: string
**value**: string
}
class gcp_container_node_management [[#gcp_container_node_management]] {
**auto_repair**: boolean
**auto_upgrade**: boolean
**upgrade_options**: gcp_container_auto_upgrade_options
}
class gcp_container_auto_upgrade_options [[#gcp_container_auto_upgrade_options]] {
**auto_upgrade_start_time**: datetime
**description**: string
}
class gcp_container_node_network_config [[#gcp_container_node_network_config]] {
**create_pod_range**: boolean
**network_performance_config**: string
**pod_ipv4_cidr_block**: string
**pod_range**: string
}
class gcp_container_update_info [[#gcp_container_update_info]] {
**blue_green_info**: gcp_container_blue_green_info
}
class gcp_container_blue_green_info [[#gcp_container_blue_green_info]] {
**blue_instance_group_urls**: string[]
**blue_pool_deletion_start_time**: datetime
**green_instance_group_urls**: string[]
**green_pool_version**: string
**phase**: string
}
class gcp_container_upgrade_settings [[#gcp_container_upgrade_settings]] {
**blue_green_settings**: gcp_container_blue_green_settings
**max_surge**: int64
**max_unavailable**: int64
**strategy**: string
}
class gcp_container_blue_green_settings [[#gcp_container_blue_green_settings]] {
**node_pool_soak_duration**: string
**standard_rollout_policy**: gcp_container_standard_rollout_policy
}
class gcp_container_standard_rollout_policy [[#gcp_container_standard_rollout_policy]] {
**batch_node_count**: int64
**batch_percentage**: double
**batch_soak_duration**: string
}
class gcp_container_database_encryption [[#gcp_container_database_encryption]] {
**key_name**: string
**state**: string
}
class gcp_container_resource_usage_export_config [[#gcp_container_resource_usage_export_config]] {
**bigquery_destination**: string
**consumption_metering_config**: boolean
**enable_network_egress_metering**: boolean
}
class gcp_container_monitoring_component_config [[#gcp_container_monitoring_component_config]] {
**enable_components**: string[]
}
class gcp_container_authenticator_groups_config [[#gcp_container_authenticator_groups_config]] {
**enabled**: boolean
**security_group**: string
}
class gcp_container_master_authorized_networks_config [[#gcp_container_master_authorized_networks_config]] {
**cidr_blocks**: gcp_container_cidr_block[]
**enabled**: boolean
}
class gcp_container_cidr_block [[#gcp_container_cidr_block]] {
**cidr_block**: string
**display_name**: string
}
class gcp_container_network_config [[#gcp_container_network_config]] {
**datapath_provider**: string
**default_snat_status**: boolean
**dns_config**: gcp_container_dns_config
**enable_intra_node_visibility**: boolean
**enable_l4ilb_subsetting**: boolean
**network**: string
**private_ipv6_google_access**: string
**service_external_ips_config**: boolean
**subnetwork**: string
}
class gcp_container_dns_config [[#gcp_container_dns_config]] {
**cluster_dns**: string
**cluster_dns_domain**: string
**cluster_dns_scope**: string
}
class gcp_container_cloud_run_config [[#gcp_container_cloud_run_config]] {
**disabled**: boolean
**load_balancer_type**: string
}
class gcp_container_maintenance_policy [[#gcp_container_maintenance_policy]] {
**resource_version**: string
**window**: gcp_container_maintenance_window
}
class gcp_container_maintenance_window [[#gcp_container_maintenance_window]] {
**daily_maintenance_window**: gcp_container_daily_maintenance_window
**maintenance_exclusions**: dictionary[string, gcp_container_time_window]
**recurring_window**: gcp_container_recurring_time_window
}
class gcp_container_daily_maintenance_window [[#gcp_container_daily_maintenance_window]] {
**duration**: string
**start_time**: datetime
}
class gcp_container_time_window [[#gcp_container_time_window]] {
**end_time**: datetime
**maintenance_exclusion_options**: string
**start_time**: datetime
}
class gcp_container_recurring_time_window [[#gcp_container_recurring_time_window]] {
**recurrence**: string
**window**: gcp_container_time_window
}
class gcp_container_pub_sub [[#gcp_container_pub_sub]] {
**enabled**: boolean
**filter**: gcp_container_filter
**topic**: string
}
class gcp_container_filter [[#gcp_container_filter]] {
**event_type**: string[]
}
class gcp_container_node_pool_auto_config [[#gcp_container_node_pool_auto_config]] {
**network_tags**: gcp_container_network_tags
}
class gcp_container_network_tags [[#gcp_container_network_tags]] {
**tags**: string[]
}
class gcp_container_logging_config [[#gcp_container_logging_config]] {
**component_config**: gcp_container_logging_component_config
}
class gcp_container_logging_component_config [[#gcp_container_logging_component_config]] {
**enable_components**: string[]
}
class gcp_container_master_auth [[#gcp_container_master_auth]] {
**client_certificate**: string
**client_certificate_config**: boolean
**client_key**: string
**cluster_ca_certificate**: string
**password**: string
**username**: string
}
class gcp_container_addons_config [[#gcp_container_addons_config]] {
**cloud_run_config**: gcp_container_cloud_run_config
**config_connector_config**: boolean
**dns_cache_config**: boolean
**gce_persistent_disk_csi_driver_config**: boolean
**gcp_filestore_csi_driver_config**: boolean
**gke_backup_agent_config**: boolean
**horizontal_pod_autoscaling**: boolean
**http_load_balancing**: boolean
**kubernetes_dashboard**: boolean
**network_policy_config**: boolean
}
class gcp_container_private_cluster_config [[#gcp_container_private_cluster_config]] {
**enable_private_endpoint**: boolean
**enable_private_nodes**: boolean
**master_global_access_config**: boolean
**master_ipv4_cidr_block**: string
**peering_name**: string
**private_endpoint**: string
**public_endpoint**: string
}
class gcp_container_cluster [[#gcp_container_cluster]] {
**addons_config**: gcp_container_addons_config
**authenticator_groups_config**: gcp_container_authenticator_groups_config
**autopilot**: boolean
**autoscaling**: gcp_container_cluster_autoscaling
**binary_authorization**: gcp_container_binary_authorization
**cluster_ipv4_cidr**: string
**conditions**: gcp_container_status_condition[]
**confidential_nodes**: boolean
**cost_management_config**: boolean
**create_time**: datetime
**current_master_version**: string
**current_node_count**: int64
**current_node_version**: string
**database_encryption**: gcp_container_database_encryption
**default_max_pods_constraint**: string
**enable_kubernetes_alpha**: boolean
**enable_tpu**: boolean
**endpoint**: string
**etag**: string
**expire_time**: datetime
**identity_service_config**: boolean
**initial_cluster_version**: string
**initial_node_count**: int64
**instance_group_urls**: string[]
**ip_allocation_policy**: gcp_container_ip_allocation_policy
**legacy_abac**: boolean
**location**: string
**locations**: string[]
**logging_config**: gcp_container_logging_config
**logging_service**: string
**container_cluster_maintenance_policy**: gcp_container_maintenance_policy
**master_auth**: gcp_container_master_auth
**master_authorized_networks_config**: gcp_container_master_authorized_networks_config
**mesh_certificates**: boolean
**monitoring_config**: gcp_container_monitoring_config
**monitoring_service**: string
**network**: string
**network_config**: gcp_container_network_config
**network_policy**: gcp_container_network_policy
**node_config**: gcp_container_node_config
**node_ipv4_cidr_size**: int64
**node_pool_auto_config**: gcp_container_node_pool_auto_config
**node_pool_defaults**: gcp_container_node_pool_defaults
**node_pools**: gcp_container_node_pool[]
**notification_config**: gcp_container_notification_config
**private_cluster_config**: gcp_container_private_cluster_config
**release_channel**: string
**resource_labels**: dictionary[string, string]
**resource_usage_export_config**: gcp_container_resource_usage_export_config
**services_ipv4_cidr**: string
**shielded_nodes**: boolean
**status**: string
**status_message**: string
**subnetwork**: string
**tpu_ipv4_cidr_block**: string
**vertical_pod_autoscaling**: boolean
**workload_identity_config**: string
}
class gcp_container_cluster_autoscaling [[#gcp_container_cluster_autoscaling]] {
**autoprovisioning_locations**: string[]
**autoprovisioning_node_pool_defaults**: gcp_container_autoprovisioning_node_pool_defaults
**autoscaling_profile**: string
**enable_node_autoprovisioning**: boolean
**resource_limits**: gcp_container_resource_limit[]
}
class gcp_container_autoprovisioning_node_pool_defaults [[#gcp_container_autoprovisioning_node_pool_defaults]] {
**boot_disk_kms_key**: string
**disk_size_gb**: int64
**disk_type**: string
**image_type**: string
**management**: gcp_container_node_management
**min_cpu_platform**: string
**oauth_scopes**: string[]
**service_account**: string
**shielded_instance_config**: gcp_container_shielded_instance_config
**upgrade_settings**: gcp_container_upgrade_settings
}
class gcp_container_resource_limit [[#gcp_container_resource_limit]] {
**maximum**: string
**minimum**: string
**resource_type**: string
}
class gcp_container_binary_authorization [[#gcp_container_binary_authorization]] {
**enabled**: boolean
**evaluation_mode**: string
}
class gcp_container_ip_allocation_policy [[#gcp_container_ip_allocation_policy]] {
**cluster_ipv4_cidr**: string
**cluster_ipv4_cidr_block**: string
**cluster_secondary_range_name**: string
**create_subnetwork**: boolean
**ipv6_access_type**: string
**node_ipv4_cidr**: string
**node_ipv4_cidr_block**: string
**services_ipv4_cidr**: string
**services_ipv4_cidr_block**: string
**services_secondary_range_name**: string
**stack_type**: string
**subnetwork_name**: string
**tpu_ipv4_cidr_block**: string
**use_ip_aliases**: boolean
**use_routes**: boolean
}
class gcp_container_monitoring_config [[#gcp_container_monitoring_config]] {
**component_config**: gcp_container_monitoring_component_config
**managed_prometheus_config**: boolean
}
class gcp_container_network_policy [[#gcp_container_network_policy]] {
**enabled**: boolean
**provider**: string
}
class gcp_container_node_pool_defaults [[#gcp_container_node_pool_defaults]] {
**node_config_defaults**: gcp_container_node_config_defaults
}
class gcp_container_node_config_defaults [[#gcp_container_node_config_defaults]] {
**gcfs_config**: boolean
**logging_config**: gcp_container_node_pool_logging_config
}
class gcp_container_notification_config [[#gcp_container_notification_config]] {
**pubsub**: gcp_container_pub_sub
}
gcp_container_node_pool --> gcp_container_node_pool_autoscaling
gcp_container_node_pool --> gcp_container_status_condition
gcp_container_node_pool --> gcp_container_node_config
gcp_container_node_pool --> gcp_container_node_management
gcp_container_node_pool --> gcp_container_node_network_config
gcp_container_node_pool --> gcp_container_update_info
gcp_container_node_pool --> gcp_container_upgrade_settings
gcp_container_node_config --> gcp_container_accelerator_config
gcp_container_node_config --> gcp_container_node_kubelet_config
gcp_container_node_config --> gcp_container_linux_node_config
gcp_container_node_config --> gcp_container_node_pool_logging_config
gcp_container_node_config --> gcp_container_reservation_affinity
gcp_container_node_config --> gcp_container_shielded_instance_config
gcp_container_node_config --> gcp_container_node_taint
gcp_container_accelerator_config --> gcp_container_gpu_sharing_config
gcp_container_node_management --> gcp_container_auto_upgrade_options
gcp_container_update_info --> gcp_container_blue_green_info
gcp_container_upgrade_settings --> gcp_container_blue_green_settings
gcp_container_blue_green_settings --> gcp_container_standard_rollout_policy
gcp_container_master_authorized_networks_config --> gcp_container_cidr_block
gcp_container_network_config --> gcp_container_dns_config
gcp_container_maintenance_policy --> gcp_container_maintenance_window
gcp_container_maintenance_window --> gcp_container_daily_maintenance_window
gcp_container_maintenance_window --> gcp_container_time_window
gcp_container_maintenance_window --> gcp_container_recurring_time_window
gcp_container_recurring_time_window --> gcp_container_time_window
gcp_container_pub_sub --> gcp_container_filter
gcp_container_node_pool_auto_config --> gcp_container_network_tags
gcp_container_logging_config --> gcp_container_logging_component_config
gcp_container_addons_config --> gcp_container_cloud_run_config
gcp_resource <|--- gcp_container_cluster
gcp_container_cluster --> gcp_container_addons_config
gcp_container_cluster --> gcp_container_authenticator_groups_config
gcp_container_cluster --> gcp_container_cluster_autoscaling
gcp_container_cluster --> gcp_container_binary_authorization
gcp_container_cluster --> gcp_container_status_condition
gcp_container_cluster --> gcp_container_database_encryption
gcp_container_cluster --> gcp_container_ip_allocation_policy
gcp_container_cluster --> gcp_container_logging_config
gcp_container_cluster --> gcp_container_maintenance_policy
gcp_container_cluster --> gcp_container_master_auth
gcp_container_cluster --> gcp_container_master_authorized_networks_config
gcp_container_cluster --> gcp_container_monitoring_config
gcp_container_cluster --> gcp_container_network_config
gcp_container_cluster --> gcp_container_network_policy
gcp_container_cluster --> gcp_container_node_config
gcp_container_cluster --> gcp_container_node_pool_auto_config
gcp_container_cluster --> gcp_container_node_pool_defaults
gcp_container_cluster --> gcp_container_node_pool
gcp_container_cluster --> gcp_container_notification_config
gcp_container_cluster --> gcp_container_private_cluster_config
gcp_container_cluster --> gcp_container_resource_usage_export_config
gcp_container_cluster_autoscaling --> gcp_container_autoprovisioning_node_pool_defaults
gcp_container_cluster_autoscaling --> gcp_container_resource_limit
gcp_container_autoprovisioning_node_pool_defaults --> gcp_container_node_management
gcp_container_autoprovisioning_node_pool_defaults --> gcp_container_shielded_instance_config
gcp_container_autoprovisioning_node_pool_defaults --> gcp_container_upgrade_settings
gcp_container_monitoring_config --> gcp_container_monitoring_component_config
gcp_container_node_pool_defaults --> gcp_container_node_config_defaults
gcp_container_node_config_defaults --> gcp_container_node_pool_logging_config
gcp_container_notification_config --> gcp_container_pub_sub

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_container_cluster resource relationships"
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

class gcp_container_operation [[#gcp_container_operation]] {

}
class gcp_container_cluster [[#gcp_container_cluster]] {

}
gcp_container_cluster -[#1A83AF]-> gcp_container_operation

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_container_operation`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_container_operation data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_container_status_condition [[#gcp_container_status_condition]] {
**canonical_code**: string
**code**: string
**message**: string
}
class gcp_container_operation_progress [[#gcp_container_operation_progress]] {
**metrics**: gcp_container_metric[]
**name**: string
**status**: string
}
class gcp_container_metric [[#gcp_container_metric]] {
**double_value**: double
**int_value**: string
**name**: string
**string_value**: string
}
class gcp_container_status [[#gcp_container_status]] {
**code**: int64
**details**: dictionary[string, any][]
**message**: string
}
class gcp_container_operation [[#gcp_container_operation]] {
**cluster_conditions**: gcp_container_status_condition[]
**detail**: string
**end_time**: datetime
**container_operation_error**: gcp_container_status
**location**: string
**nodepool_conditions**: gcp_container_status_condition[]
**operation_type**: string
**container_operation_progress**: gcp_container_operation_progress
**start_time**: datetime
**status**: string
**status_message**: string
**target_link**: string
}
gcp_container_operation_progress --> gcp_container_metric
gcp_resource <|--- gcp_container_operation
gcp_container_operation --> gcp_container_status_condition
gcp_container_operation --> gcp_container_status
gcp_container_operation --> gcp_container_operation_progress

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_container_operation resource relationships"
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

class gcp_container_operation [[#gcp_container_operation]] {

}
class gcp_container_cluster [[#gcp_container_cluster]] {

}
gcp_container_cluster -[#1A83AF]-> gcp_container_operation

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_database`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_database data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class database [[#database]] {
**db_type**: string
**db_status**: string
**db_endpoint**: string
**db_version**: string
**db_publicly_accessible**: boolean
**instance_type**: string
**volume_size**: int64
**volume_iops**: int64
**volume_encrypted**: boolean
}
class gcp_database [[#gcp_database]] {

}
resource <|--- database
gcp_resource <|--- gcp_database
database <|--- gcp_database

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_database resource relationships"
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

class gcp_region [[#gcp_region]] {

}
class gcp_database [[#gcp_database]] {

}
class gcp_zone [[#gcp_zone]] {

}
gcp_region -[#1A83AF]-> gcp_database
gcp_region -[#1A83AF]-> gcp_zone
gcp_zone -[#1A83AF]-> gcp_database

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_disk`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_disk data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_disk [[#gcp_disk]] {
**last_attach_timestamp**: datetime
**last_detach_timestamp**: datetime
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
class volume [[#volume]] {
**volume_size**: int64
**volume_type**: string
**volume_status**: volume_status
**volume_iops**: int64
**volume_throughput**: int64
**volume_encrypted**: boolean
**snapshot_before_delete**: boolean
}
gcp_resource <|--- gcp_disk
volume <|--- gcp_disk
resource <|--- volume

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_disk resource relationships"
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

class gcp_operation [[#gcp_operation]] {

}
class gcp_disk [[#gcp_disk]] {

}
class gcp_instance [[#gcp_instance]] {

}
class gcp_disk_type [[#gcp_disk_type]] {

}
class gcp_snapshot [[#gcp_snapshot]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_zone [[#gcp_zone]] {

}
gcp_operation -[#1A83AF]-> gcp_disk
gcp_disk -[#1A83AF]-> gcp_snapshot
gcp_instance -[#1A83AF]-> gcp_disk
gcp_disk_type -[#1A83AF]-> gcp_disk
gcp_region -[#1A83AF]-> gcp_disk
gcp_region -[#1A83AF]-> gcp_disk_type
gcp_region -[#1A83AF]-> gcp_zone
gcp_zone -[#1A83AF]-> gcp_disk_type
gcp_zone -[#1A83AF]-> gcp_disk
gcp_zone -[#1A83AF]-> gcp_instance

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_disk_type`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_disk_type data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class quota [[#quota]] {
**quota**: double
**usage**: double
**quota_type**: string
}
class phantom_resource [[#phantom_resource]] {

}
class gcp_disk_type [[#gcp_disk_type]] {

}
class volume_type [[#volume_type]] {
**volume_type**: string
**ondemand_cost**: double
}
class type [[#type]] {

}
phantom_resource <|--- quota
resource <|--- phantom_resource
gcp_resource <|--- gcp_disk_type
volume_type <|--- gcp_disk_type
type <|--- volume_type
quota <|--- type

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_disk_type resource relationships"
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

class gcp_disk [[#gcp_disk]] {

}
class gcp_service_sku [[#gcp_service_sku]] {

}
class gcp_disk_type [[#gcp_disk_type]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_zone [[#gcp_zone]] {

}
gcp_service_sku -[#1A83AF]-> gcp_disk_type
gcp_disk_type -[#1A83AF]-> gcp_disk
gcp_region -[#1A83AF]-> gcp_disk
gcp_region -[#1A83AF]-> gcp_disk_type
gcp_region -[#1A83AF]-> gcp_zone
gcp_zone -[#1A83AF]-> gcp_disk_type
gcp_zone -[#1A83AF]-> gcp_disk

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_external_vpn_gateway`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_external_vpn_gateway data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_external_vpn_gateway [[#gcp_external_vpn_gateway]] {
**external_vpn_gateway_interfaces**: gcp_external_vpn_gateway_interface[]
**redundancy_type**: string
}
class gcp_external_vpn_gateway_interface [[#gcp_external_vpn_gateway_interface]] {
**id**: int64
**ip_address**: string
}
gcp_resource <|--- gcp_external_vpn_gateway
gcp_external_vpn_gateway --> gcp_external_vpn_gateway_interface

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_external_vpn_gateway resource relationships"
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

class gcp_external_vpn_gateway [[#gcp_external_vpn_gateway]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_firewall`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_firewall data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_allowed [[#gcp_allowed]] {
**ip_protocol**: string
**ports**: string[]
}
class gcp_denied [[#gcp_denied]] {
**ip_protocol**: string
**ports**: string[]
}
class gcp_firewall [[#gcp_firewall]] {
**allowed**: gcp_allowed[]
**denied**: gcp_denied[]
**destination_ranges**: string[]
**direction**: string
**disabled**: boolean
**firewall_log_config**: gcp_firewall_log_config
**network**: string
**priority**: int64
**source_ranges**: string[]
**source_service_accounts**: string[]
**source_tags**: string[]
**target_service_accounts**: string[]
**target_tags**: string[]
}
class gcp_firewall_log_config [[#gcp_firewall_log_config]] {
**enable**: boolean
**metadata**: string
}
gcp_resource <|--- gcp_firewall
gcp_firewall --> gcp_allowed
gcp_firewall --> gcp_denied
gcp_firewall --> gcp_firewall_log_config

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_firewall resource relationships"
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

class gcp_network [[#gcp_network]] {

}
class gcp_firewall [[#gcp_firewall]] {

}
gcp_firewall -[#1A83AF]-> gcp_network

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_firewall_policy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_firewall_policy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_firewall_policy_rule [[#gcp_firewall_policy_rule]] {
**action**: string
**description**: string
**direction**: string
**disabled**: boolean
**enable_logging**: boolean
**match**: gcp_firewall_policy_rule_matcher
**priority**: int64
**rule_name**: string
**rule_tuple_count**: int64
**target_resources**: string[]
**target_secure_tags**: gcp_firewall_policy_rule_secure_tag[]
**target_service_accounts**: string[]
}
class gcp_firewall_policy_rule_matcher [[#gcp_firewall_policy_rule_matcher]] {
**dest_ip_ranges**: string[]
**layer4_configs**: gcp_firewall_policy_rule_matcher_layer4_config[]
**src_ip_ranges**: string[]
**src_secure_tags**: gcp_firewall_policy_rule_secure_tag[]
}
class gcp_firewall_policy_rule_matcher_layer4_config [[#gcp_firewall_policy_rule_matcher_layer4_config]] {
**ip_protocol**: string
**ports**: string[]
}
class gcp_firewall_policy_rule_secure_tag [[#gcp_firewall_policy_rule_secure_tag]] {
**name**: string
**firewall_policy_rule_secure_tag_state**: string
}
class gcp_firewall_policy_association [[#gcp_firewall_policy_association]] {
**attachment_target**: string
**display_name**: string
**firewall_policy_id**: string
**name**: string
**short_name**: string
}
class gcp_firewall_policy [[#gcp_firewall_policy]] {
**associations**: gcp_firewall_policy_association[]
**display_name**: string
**fingerprint**: string
**parent**: string
**rule_tuple_count**: int64
**firewall_policy_rules**: gcp_firewall_policy_rule[]
**self_link_with_id**: string
**short_name**: string
}
gcp_firewall_policy_rule --> gcp_firewall_policy_rule_matcher
gcp_firewall_policy_rule --> gcp_firewall_policy_rule_secure_tag
gcp_firewall_policy_rule_matcher --> gcp_firewall_policy_rule_matcher_layer4_config
gcp_firewall_policy_rule_matcher --> gcp_firewall_policy_rule_secure_tag
gcp_resource <|--- gcp_firewall_policy
gcp_firewall_policy --> gcp_firewall_policy_association
gcp_firewall_policy --> gcp_firewall_policy_rule

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_firewall_policy resource relationships"
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

class gcp_firewall_policy [[#gcp_firewall_policy]] {

}
class gcp_network [[#gcp_network]] {

}
gcp_firewall_policy -[#1A83AF]-> gcp_network

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_forwarding_rule`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_forwarding_rule data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class load_balancer [[#load_balancer]] {
**lb_type**: string
**public_ip_address**: string
**backends**: string[]
}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {
**ip_address**: string
**ip_protocol**: string
**load_balancing_scheme**: string
**network_tier**: string
**port_range**: string
}
resource <|--- load_balancer
gcp_resource <|--- gcp_forwarding_rule
load_balancer <|--- gcp_forwarding_rule

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_forwarding_rule resource relationships"
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

class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

}
class gcp_target_tcp_proxy [[#gcp_target_tcp_proxy]] {

}
class gcp_target_ssl_proxy [[#gcp_target_ssl_proxy]] {

}
class gcp_target_grpc_proxy [[#gcp_target_grpc_proxy]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_target_http_proxy [[#gcp_target_http_proxy]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_target_pool [[#gcp_target_pool]] {

}
class gcp_target_vpn_gateway [[#gcp_target_vpn_gateway]] {

}
gcp_forwarding_rule -[#1A83AF]-> gcp_target_http_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_grpc_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_https_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_vpn_gateway
gcp_forwarding_rule -[#1A83AF]-> gcp_target_ssl_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_pool
gcp_forwarding_rule -[#1A83AF]-> gcp_target_tcp_proxy
gcp_project -[#1A83AF]-> gcp_forwarding_rule
gcp_project -[#1A83AF]-> gcp_target_http_proxy
gcp_project -[#1A83AF]-> gcp_target_grpc_proxy
gcp_project -[#1A83AF]-> gcp_region
gcp_project -[#1A83AF]-> gcp_target_https_proxy
gcp_project -[#1A83AF]-> gcp_target_ssl_proxy
gcp_project -[#1A83AF]-> gcp_target_tcp_proxy
gcp_region -[#1A83AF]-> gcp_target_https_proxy
gcp_region -[#1A83AF]-> gcp_target_pool
gcp_region -[#1A83AF]-> gcp_target_http_proxy
gcp_region -[#1A83AF]-> gcp_forwarding_rule
gcp_region -[#1A83AF]-> gcp_target_vpn_gateway

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_gke_cluster`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_gke_cluster data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_gke_cluster [[#gcp_gke_cluster]] {
**initial_cluster_version**: string
**current_master_version**: string
**current_node_count**: int64
**cluster_status**: string
}
gcp_resource <|--- gcp_gke_cluster
resource <|--- gcp_gke_cluster

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_gke_cluster resource relationships"
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

class gcp_gke_cluster [[#gcp_gke_cluster]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_zone [[#gcp_zone]] {

}
gcp_region -[#1A83AF]-> gcp_gke_cluster
gcp_region -[#1A83AF]-> gcp_zone
gcp_zone -[#1A83AF]-> gcp_gke_cluster

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_global_forwarding_rule`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_global_forwarding_rule data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class load_balancer [[#load_balancer]] {
**lb_type**: string
**public_ip_address**: string
**backends**: string[]
}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {
**ip_address**: string
**ip_protocol**: string
**load_balancing_scheme**: string
**network_tier**: string
**port_range**: string
}
resource <|--- load_balancer
gcp_forwarding_rule <|--- gcp_global_forwarding_rule
gcp_resource <|--- gcp_forwarding_rule
load_balancer <|--- gcp_forwarding_rule

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_global_forwarding_rule resource relationships"
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

class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

}
class gcp_target_tcp_proxy [[#gcp_target_tcp_proxy]] {

}
class gcp_target_ssl_proxy [[#gcp_target_ssl_proxy]] {

}
class gcp_target_grpc_proxy [[#gcp_target_grpc_proxy]] {

}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_target_http_proxy [[#gcp_target_http_proxy]] {

}
class gcp_target_pool [[#gcp_target_pool]] {

}
class gcp_target_vpn_gateway [[#gcp_target_vpn_gateway]] {

}
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_http_proxy
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_grpc_proxy
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_https_proxy
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_vpn_gateway
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_ssl_proxy
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_pool
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_tcp_proxy

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_global_network_endpoint_group`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_global_network_endpoint_group data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_global_network_endpoint_group [[#gcp_global_network_endpoint_group]] {
**default_port**: int64
**neg_type**: string
}
gcp_resource <|--- gcp_global_network_endpoint_group
resource <|--- gcp_global_network_endpoint_group

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_global_network_endpoint_group resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_network [[#gcp_network]] {

}
class gcp_global_network_endpoint_group [[#gcp_global_network_endpoint_group]] {

}
gcp_subnetwork -[#1A83AF]-> gcp_global_network_endpoint_group
gcp_network -[#1A83AF]-> gcp_subnetwork
gcp_network -[#1A83AF]-> gcp_global_network_endpoint_group

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_health_check`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_health_check data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_health_check [[#gcp_health_check]] {

}
class health_check [[#health_check]] {
**check_interval**: int64
**healthy_threshold**: int64
**unhealthy_threshold**: int64
**timeout**: int64
**health_check_type**: string
}
gcp_resource <|--- gcp_health_check
health_check <|--- gcp_health_check
resource <|--- health_check

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_health_check resource relationships"
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

class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_health_check [[#gcp_health_check]] {

}
class gcp_instance_group_manager [[#gcp_instance_group_manager]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_region [[#gcp_region]] {

}
gcp_backend_service -[#1A83AF]-> gcp_health_check
gcp_instance_group_manager -[#1A83AF]-> gcp_health_check
gcp_project -[#1A83AF]-> gcp_backend_service
gcp_project -[#1A83AF]-> gcp_region
gcp_project -[#1A83AF]-> gcp_health_check
gcp_region -[#1A83AF]-> gcp_instance_group_manager
gcp_region -[#1A83AF]-> gcp_backend_service
gcp_region -[#1A83AF]-> gcp_health_check

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_health_check_service`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_health_check_service data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_health_check_service [[#gcp_health_check_service]] {
**fingerprint**: string
**health_checks**: string[]
**health_status_aggregation_policy**: string
**network_endpoint_groups**: string[]
**notification_endpoints**: string[]
}
gcp_resource <|--- gcp_health_check_service

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_health_check_service resource relationships"
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

class gcp_health_check_service [[#gcp_health_check_service]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_http_health_check`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_http_health_check data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_http_health_check [[#gcp_http_health_check]] {
**host**: string
**request_path**: string
**port**: int64
}
class health_check [[#health_check]] {
**check_interval**: int64
**healthy_threshold**: int64
**unhealthy_threshold**: int64
**timeout**: int64
**health_check_type**: string
}
gcp_resource <|--- gcp_http_health_check
health_check <|--- gcp_http_health_check
resource <|--- health_check

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_http_health_check resource relationships"
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

class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_http_health_check [[#gcp_http_health_check]] {

}
class gcp_instance_group_manager [[#gcp_instance_group_manager]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_target_pool [[#gcp_target_pool]] {

}
gcp_backend_service -[#1A83AF]-> gcp_http_health_check
gcp_instance_group_manager -[#1A83AF]-> gcp_http_health_check
gcp_project -[#1A83AF]-> gcp_http_health_check
gcp_project -[#1A83AF]-> gcp_backend_service
gcp_target_pool -[#1A83AF]-> gcp_http_health_check

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_https_health_check`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_https_health_check data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_http_health_check [[#gcp_http_health_check]] {
**host**: string
**request_path**: string
**port**: int64
}
class gcp_https_health_check [[#gcp_https_health_check]] {

}
class health_check [[#health_check]] {
**check_interval**: int64
**healthy_threshold**: int64
**unhealthy_threshold**: int64
**timeout**: int64
**health_check_type**: string
}
gcp_resource <|--- gcp_http_health_check
health_check <|--- gcp_http_health_check
gcp_http_health_check <|--- gcp_https_health_check
resource <|--- health_check

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_https_health_check resource relationships"
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

class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_https_health_check [[#gcp_https_health_check]] {

}
class gcp_instance_group_manager [[#gcp_instance_group_manager]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_target_pool [[#gcp_target_pool]] {

}
gcp_backend_service -[#1A83AF]-> gcp_https_health_check
gcp_instance_group_manager -[#1A83AF]-> gcp_https_health_check
gcp_project -[#1A83AF]-> gcp_backend_service
gcp_project -[#1A83AF]-> gcp_https_health_check
gcp_target_pool -[#1A83AF]-> gcp_https_health_check

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_image`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_image data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_customer_encryption_key [[#gcp_customer_encryption_key]] {
**kms_key_name**: string
**kms_key_service_account**: string
**raw_key**: string
**rsa_encrypted_key**: string
**sha256**: string
}
class gcp_initial_state_config [[#gcp_initial_state_config]] {
**dbs**: gcp_file_content_buffer[]
**dbxs**: gcp_file_content_buffer[]
**keks**: gcp_file_content_buffer[]
**pk**: gcp_file_content_buffer
}
class gcp_file_content_buffer [[#gcp_file_content_buffer]] {
**content**: string
**file_type**: string
}
class gcp_image [[#gcp_image]] {
**architecture**: string
**archive_size_bytes**: string
**disk_size_gb**: string
**family**: string
**guest_os_features**: string[]
**image_encryption_key**: gcp_customer_encryption_key
**license_codes**: string[]
**licenses**: string[]
**raw_disk**: gcp_rawdisk
**satisfies_pzs**: boolean
**shielded_instance_initial_state**: gcp_initial_state_config
**source_disk**: string
**source_disk_encryption_key**: gcp_customer_encryption_key
**source_disk_id**: string
**source_image**: string
**source_image_encryption_key**: gcp_customer_encryption_key
**source_image_id**: string
**source_snapshot**: string
**source_snapshot_encryption_key**: gcp_customer_encryption_key
**source_snapshot_id**: string
**source_type**: string
**status**: string
**storage_locations**: string[]
}
class gcp_rawdisk [[#gcp_rawdisk]] {
**container_type**: string
**sha1_checksum**: string
**source**: string
}
gcp_initial_state_config --> gcp_file_content_buffer
gcp_resource <|--- gcp_image
gcp_image --> gcp_customer_encryption_key
gcp_image --> gcp_rawdisk
gcp_image --> gcp_initial_state_config

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_image resource relationships"
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

class gcp_image [[#gcp_image]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_instance`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_instance data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_instance [[#gcp_instance]] {
**network_interfaces**: string
}
class instance [[#instance]] {
**instance_cores**: double
**instance_memory**: double
**instance_type**: string
**instance_status**: instance_status
}
gcp_resource <|--- gcp_instance
instance <|--- gcp_instance
resource <|--- instance

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_instance resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_network [[#gcp_network]] {

}
class gcp_disk [[#gcp_disk]] {

}
class gcp_instance_group [[#gcp_instance_group]] {

}
class gcp_instance [[#gcp_instance]] {

}
class gcp_machine_type [[#gcp_machine_type]] {

}
class gcp_target_pool [[#gcp_target_pool]] {

}
class gcp_zone [[#gcp_zone]] {

}
class gcp_target_instance [[#gcp_target_instance]] {

}
gcp_subnetwork -[#1A83AF]-> gcp_instance_group
gcp_subnetwork -[#1A83AF]-> gcp_instance
gcp_network -[#1A83AF]-> gcp_instance_group
gcp_network -[#1A83AF]-> gcp_subnetwork
gcp_network -[#1A83AF]-> gcp_instance
gcp_instance_group -[#1A83AF]-> gcp_instance
gcp_instance -[#1A83AF]-> gcp_disk
gcp_machine_type -[#1A83AF]-> gcp_instance
gcp_target_pool -[#1A83AF]-> gcp_instance
gcp_zone -[#1A83AF]-> gcp_instance_group
gcp_zone -[#1A83AF]-> gcp_machine_type
gcp_zone -[#1A83AF]-> gcp_disk
gcp_zone -[#1A83AF]-> gcp_instance
gcp_target_instance -[#1A83AF]-> gcp_instance

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_instance_group`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_instance_group data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_instance_group [[#gcp_instance_group]] {

}
gcp_resource <|--- gcp_instance_group
resource <|--- gcp_instance_group

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_instance_group resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_network [[#gcp_network]] {

}
class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_instance_group [[#gcp_instance_group]] {

}
class gcp_instance_group_manager [[#gcp_instance_group_manager]] {

}
class gcp_instance [[#gcp_instance]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_zone [[#gcp_zone]] {

}
gcp_subnetwork -[#1A83AF]-> gcp_instance_group
gcp_subnetwork -[#1A83AF]-> gcp_instance
gcp_network -[#1A83AF]-> gcp_instance_group
gcp_network -[#1A83AF]-> gcp_subnetwork
gcp_network -[#1A83AF]-> gcp_instance
gcp_backend_service -[#1A83AF]-> gcp_instance_group
gcp_instance_group -[#1A83AF]-> gcp_instance_group_manager
gcp_instance_group -[#1A83AF]-> gcp_instance
gcp_region -[#1A83AF]-> gcp_instance_group
gcp_region -[#1A83AF]-> gcp_instance_group_manager
gcp_region -[#1A83AF]-> gcp_backend_service
gcp_region -[#1A83AF]-> gcp_subnetwork
gcp_region -[#1A83AF]-> gcp_zone
gcp_zone -[#1A83AF]-> gcp_instance_group
gcp_zone -[#1A83AF]-> gcp_instance

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_instance_group_manager`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_instance_group_manager data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_instance_group_manager [[#gcp_instance_group_manager]] {

}
gcp_resource <|--- gcp_instance_group_manager
resource <|--- gcp_instance_group_manager

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_instance_group_manager resource relationships"
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

class gcp_instance_group [[#gcp_instance_group]] {

}
class gcp_http_health_check [[#gcp_http_health_check]] {

}
class gcp_health_check [[#gcp_health_check]] {

}
class gcp_https_health_check [[#gcp_https_health_check]] {

}
class gcp_instance_group_manager [[#gcp_instance_group_manager]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_autoscaler [[#gcp_autoscaler]] {

}
gcp_instance_group -[#1A83AF]-> gcp_instance_group_manager
gcp_instance_group_manager -[#1A83AF]-> gcp_https_health_check
gcp_instance_group_manager -[#1A83AF]-> gcp_http_health_check
gcp_instance_group_manager -[#1A83AF]-> gcp_health_check
gcp_region -[#1A83AF]-> gcp_instance_group
gcp_region -[#1A83AF]-> gcp_instance_group_manager
gcp_region -[#1A83AF]-> gcp_health_check
gcp_region -[#1A83AF]-> gcp_autoscaler
gcp_autoscaler -[#1A83AF]-> gcp_instance_group_manager

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_instance_template`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_instance_template data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_instance_template [[#gcp_instance_template]] {

}
gcp_resource <|--- gcp_instance_template
resource <|--- gcp_instance_template

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_instance_template resource relationships"
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

class gcp_machine_type [[#gcp_machine_type]] {

}
class gcp_instance_template [[#gcp_instance_template]] {

}
gcp_machine_type -[#1A83AF]-> gcp_instance_template

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_interconnect`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_interconnect data model"
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

class gcp_interconnect [[#gcp_interconnect]] {
**admin_enabled**: boolean
**circuit_infos**: gcp_interconnect_circuit_info[]
**customer_name**: string
**expected_outages**: gcp_interconnect_outage_notification[]
**google_ip_address**: string
**google_reference_id**: string
**interconnect_attachments**: string[]
**interconnect_type**: string
**link_type**: string
**location**: string
**noc_contact_email**: string
**operational_status**: string
**peer_ip_address**: string
**provisioned_link_count**: int64
**requested_link_count**: int64
**satisfies_pzs**: boolean
**interconnect_state**: string
}
class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_interconnect_circuit_info [[#gcp_interconnect_circuit_info]] {
**customer_demarc_id**: string
**google_circuit_id**: string
**google_demarc_id**: string
}
class gcp_interconnect_outage_notification [[#gcp_interconnect_outage_notification]] {
**affected_circuits**: string[]
**description**: string
**end_time**: string
**issue_type**: string
**name**: string
**source**: string
**start_time**: string
**state**: string
}
gcp_resource <|--- gcp_interconnect
gcp_interconnect --> gcp_interconnect_circuit_info
gcp_interconnect --> gcp_interconnect_outage_notification

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_interconnect resource relationships"
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

class gcp_interconnect [[#gcp_interconnect]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_interconnect_attachment`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_interconnect_attachment data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_interconnect_attachment [[#gcp_interconnect_attachment]] {
**admin_enabled**: boolean
**bandwidth**: string
**candidate_ipv6_subnets**: string[]
**candidate_subnets**: string[]
**cloud_router_ip_address**: string
**cloud_router_ipv6_address**: string
**cloud_router_ipv6_interface_id**: string
**customer_router_ip_address**: string
**customer_router_ipv6_address**: string
**customer_router_ipv6_interface_id**: string
**dataplane_version**: int64
**edge_availability_domain**: string
**encryption**: string
**google_reference_id**: string
**interconnect**: string
**ipsec_internal_addresses**: string[]
**mtu**: int64
**operational_status**: string
**pairing_key**: string
**partner_asn**: string
**partner_metadata**: gcp_interconnect_attachment_partner_metadata
**private_interconnect_info**: int64
**router**: string
**satisfies_pzs**: boolean
**stack_type**: string
**interconnect_attachment_state**: string
**type**: string
**vlan_tag8021q**: int64
}
class gcp_interconnect_attachment_partner_metadata [[#gcp_interconnect_attachment_partner_metadata]] {
**interconnect_name**: string
**partner_name**: string
**portal_url**: string
}
gcp_resource <|--- gcp_interconnect_attachment
gcp_interconnect_attachment --> gcp_interconnect_attachment_partner_metadata

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_interconnect_attachment resource relationships"
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

class gcp_interconnect_attachment [[#gcp_interconnect_attachment]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_interconnect_location`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_interconnect_location data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_interconnect_location_region_info [[#gcp_interconnect_location_region_info]] {
**expected_rtt_ms**: string
**location_presence**: string
**region**: string
}
class gcp_interconnect_location [[#gcp_interconnect_location]] {
**address**: string
**availability_zone**: string
**city**: string
**continent**: string
**facility_provider**: string
**facility_provider_facility_id**: string
**peeringdb_facility_id**: string
**region_infos**: gcp_interconnect_location_region_info[]
**status**: string
**supports_pzs**: boolean
}
gcp_resource <|--- gcp_interconnect_location
gcp_interconnect_location --> gcp_interconnect_location_region_info

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_interconnect_location resource relationships"
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

class gcp_interconnect_location [[#gcp_interconnect_location]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_license`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_license data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_license_resource_requirements [[#gcp_license_resource_requirements]] {
**min_guest_cpu_count**: int64
**min_memory_mb**: int64
}
class gcp_license [[#gcp_license]] {
**charges_use_fee**: boolean
**license_code**: string
**resource_requirements**: gcp_license_resource_requirements
**transferable**: boolean
}
gcp_resource <|--- gcp_license
gcp_license --> gcp_license_resource_requirements

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_license resource relationships"
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

class gcp_license [[#gcp_license]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_machine_image`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_machine_image data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_accelerator_config [[#gcp_accelerator_config]] {
**accelerator_count**: int64
**accelerator_type**: string
}
class gcp_source_disk_encryption_key [[#gcp_source_disk_encryption_key]] {
**disk_encryption_key**: gcp_customer_encryption_key
**source_disk**: string
}
class gcp_customer_encryption_key [[#gcp_customer_encryption_key]] {
**kms_key_name**: string
**kms_key_service_account**: string
**raw_key**: string
**rsa_encrypted_key**: string
**sha256**: string
}
class gcp_instance_properties [[#gcp_instance_properties]] {
**advanced_machine_features**: gcp_advanced_machine_features
**can_ip_forward**: boolean
**confidential_instance_config**: boolean
**description**: string
**disks**: gcp_attached_disk[]
**guest_accelerators**: gcp_accelerator_config[]
**key_revocation_action_type**: string
**labels**: dictionary[string, string]
**machine_type**: string
**metadata**: gcp_metadata
**min_cpu_platform**: string
**network_interfaces**: gcp_network_interface[]
**network_performance_config**: string
**private_ipv6_google_access**: string
**reservation_affinity**: gcp_reservation_affinity
**resource_manager_tags**: dictionary[string, string]
**resource_policies**: string[]
**scheduling**: gcp_scheduling
**service_accounts**: gcp_service_account[]
**shielded_instance_config**: gcp_shielded_instance_config
**tags**: gcp_tags
}
class gcp_advanced_machine_features [[#gcp_advanced_machine_features]] {
**enable_nested_virtualization**: boolean
**enable_uefi_networking**: boolean
**threads_per_core**: int64
**visible_core_count**: int64
}
class gcp_attached_disk [[#gcp_attached_disk]] {
**architecture**: string
**auto_delete**: boolean
**boot**: boolean
**device_name**: string
**disk_encryption_key**: gcp_customer_encryption_key
**disk_size_gb**: string
**force_attach**: boolean
**guest_os_features**: string[]
**index**: int64
**initialize_params**: gcp_attached_disk_initialize_params
**interface**: string
**licenses**: string[]
**mode**: string
**shielded_instance_initial_state**: gcp_initial_state_config
**source**: string
**type**: string
}
class gcp_attached_disk_initialize_params [[#gcp_attached_disk_initialize_params]] {
**architecture**: string
**description**: string
**disk_name**: string
**disk_size_gb**: string
**disk_type**: string
**labels**: dictionary[string, string]
**licenses**: string[]
**on_update_action**: string
**provisioned_iops**: string
**resource_manager_tags**: dictionary[string, string]
**resource_policies**: string[]
**source_image**: string
**source_image_encryption_key**: gcp_customer_encryption_key
**source_snapshot**: string
**source_snapshot_encryption_key**: gcp_customer_encryption_key
}
class gcp_initial_state_config [[#gcp_initial_state_config]] {
**dbs**: gcp_file_content_buffer[]
**dbxs**: gcp_file_content_buffer[]
**keks**: gcp_file_content_buffer[]
**pk**: gcp_file_content_buffer
}
class gcp_file_content_buffer [[#gcp_file_content_buffer]] {
**content**: string
**file_type**: string
}
class gcp_metadata [[#gcp_metadata]] {
**fingerprint**: string
**items**: gcp_items[]
}
class gcp_items [[#gcp_items]] {
**key**: string
**value**: string
}
class gcp_network_interface [[#gcp_network_interface]] {
**access_configs**: gcp_access_config[]
**alias_ip_ranges**: gcp_alias_ip_range[]
**fingerprint**: string
**internal_ipv6_prefix_length**: int64
**ipv6_access_configs**: gcp_access_config[]
**ipv6_access_type**: string
**ipv6_address**: string
**name**: string
**network**: string
**network_ip**: string
**nic_type**: string
**queue_count**: int64
**stack_type**: string
**subnetwork**: string
}
class gcp_access_config [[#gcp_access_config]] {
**external_ipv6**: string
**external_ipv6_prefix_length**: int64
**name**: string
**nat_ip**: string
**network_tier**: string
**public_ptr_domain_name**: string
**set_public_ptr**: boolean
**type**: string
}
class gcp_alias_ip_range [[#gcp_alias_ip_range]] {
**ip_cidr_range**: string
**subnetwork_range_name**: string
}
class gcp_reservation_affinity [[#gcp_reservation_affinity]] {
**consume_reservation_type**: string
**key**: string
**values**: string[]
}
class gcp_scheduling [[#gcp_scheduling]] {
**automatic_restart**: boolean
**instance_termination_action**: string
**location_hint**: string
**min_node_cpus**: int64
**node_affinities**: gcp_scheduling_node_affinity[]
**on_host_maintenance**: string
**preemptible**: boolean
**provisioning_model**: string
}
class gcp_scheduling_node_affinity [[#gcp_scheduling_node_affinity]] {
**key**: string
**operator**: string
**values**: string[]
}
class gcp_service_account [[#gcp_service_account]] {
**email**: string
**scopes**: string[]
}
class gcp_shielded_instance_config [[#gcp_shielded_instance_config]] {
**enable_integrity_monitoring**: boolean
**enable_secure_boot**: boolean
**enable_vtpm**: boolean
}
class gcp_tags [[#gcp_tags]] {
**fingerprint**: string
**items**: string[]
}
class gcp_machine_image [[#gcp_machine_image]] {
**guest_flush**: boolean
**instance_properties**: gcp_instance_properties
**machine_image_encryption_key**: gcp_customer_encryption_key
**satisfies_pzs**: boolean
**saved_disks**: gcp_saved_disk[]
**source_disk_encryption_keys**: gcp_source_disk_encryption_key[]
**source_instance**: string
**source_instance_properties**: gcp_source_instance_properties
**status**: string
**storage_locations**: string[]
**total_storage_bytes**: string
}
class gcp_saved_disk [[#gcp_saved_disk]] {
**architecture**: string
**source_disk**: string
**storage_bytes**: string
**storage_bytes_status**: string
}
class gcp_source_instance_properties [[#gcp_source_instance_properties]] {
**can_ip_forward**: boolean
**deletion_protection**: boolean
**description**: string
**saved_disks**: gcp_saved_attached_disk[]
**guest_accelerators**: gcp_accelerator_config[]
**key_revocation_action_type**: string
**labels**: dictionary[string, string]
**machine_type**: string
**metadata**: gcp_metadata
**min_cpu_platform**: string
**network_interfaces**: gcp_network_interface[]
**scheduling**: gcp_scheduling
**service_accounts**: gcp_service_account[]
**tags**: gcp_tags
}
class gcp_saved_attached_disk [[#gcp_saved_attached_disk]] {
**auto_delete**: boolean
**boot**: boolean
**device_name**: string
**disk_encryption_key**: gcp_customer_encryption_key
**disk_size_gb**: string
**disk_type**: string
**guest_os_features**: string[]
**index**: int64
**interface**: string
**licenses**: string[]
**mode**: string
**source**: string
**storage_bytes**: string
**storage_bytes_status**: string
**type**: string
}
gcp_source_disk_encryption_key --> gcp_customer_encryption_key
gcp_instance_properties --> gcp_advanced_machine_features
gcp_instance_properties --> gcp_attached_disk
gcp_instance_properties --> gcp_accelerator_config
gcp_instance_properties --> gcp_metadata
gcp_instance_properties --> gcp_network_interface
gcp_instance_properties --> gcp_reservation_affinity
gcp_instance_properties --> gcp_scheduling
gcp_instance_properties --> gcp_service_account
gcp_instance_properties --> gcp_shielded_instance_config
gcp_instance_properties --> gcp_tags
gcp_attached_disk --> gcp_customer_encryption_key
gcp_attached_disk --> gcp_attached_disk_initialize_params
gcp_attached_disk --> gcp_initial_state_config
gcp_attached_disk_initialize_params --> gcp_customer_encryption_key
gcp_initial_state_config --> gcp_file_content_buffer
gcp_metadata --> gcp_items
gcp_network_interface --> gcp_access_config
gcp_network_interface --> gcp_alias_ip_range
gcp_scheduling --> gcp_scheduling_node_affinity
gcp_resource <|--- gcp_machine_image
gcp_machine_image --> gcp_instance_properties
gcp_machine_image --> gcp_customer_encryption_key
gcp_machine_image --> gcp_saved_disk
gcp_machine_image --> gcp_source_disk_encryption_key
gcp_machine_image --> gcp_source_instance_properties
gcp_source_instance_properties --> gcp_saved_attached_disk
gcp_source_instance_properties --> gcp_accelerator_config
gcp_source_instance_properties --> gcp_metadata
gcp_source_instance_properties --> gcp_network_interface
gcp_source_instance_properties --> gcp_scheduling
gcp_source_instance_properties --> gcp_service_account
gcp_source_instance_properties --> gcp_tags
gcp_saved_attached_disk --> gcp_customer_encryption_key

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_machine_image resource relationships"
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

class gcp_machine_image [[#gcp_machine_image]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_machine_type`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_machine_type data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class quota [[#quota]] {
**quota**: double
**usage**: double
**quota_type**: string
}
class phantom_resource [[#phantom_resource]] {

}
class gcp_machine_type [[#gcp_machine_type]] {

}
class type [[#type]] {

}
class instance_type [[#instance_type]] {
**instance_type**: string
**instance_cores**: double
**instance_memory**: double
**ondemand_cost**: double
**reservations**: int64
}
phantom_resource <|--- quota
resource <|--- phantom_resource
gcp_resource <|--- gcp_machine_type
instance_type <|--- gcp_machine_type
quota <|--- type
type <|--- instance_type

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_machine_type resource relationships"
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

class gcp_instance [[#gcp_instance]] {

}
class gcp_service_sku [[#gcp_service_sku]] {

}
class gcp_machine_type [[#gcp_machine_type]] {

}
class gcp_zone [[#gcp_zone]] {

}
class gcp_instance_template [[#gcp_instance_template]] {

}
gcp_service_sku -[#1A83AF]-> gcp_machine_type
gcp_machine_type -[#1A83AF]-> gcp_instance_template
gcp_machine_type -[#1A83AF]-> gcp_instance
gcp_zone -[#1A83AF]-> gcp_machine_type
gcp_zone -[#1A83AF]-> gcp_instance

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_network`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_network data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_network [[#gcp_network]] {

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
class network [[#network]] {

}
gcp_resource <|--- gcp_network
network <|--- gcp_network
resource <|--- network

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_network resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_firewall_policy [[#gcp_firewall_policy]] {

}
class gcp_network [[#gcp_network]] {

}
class gcp_firewall [[#gcp_firewall]] {

}
class gcp_instance_group [[#gcp_instance_group]] {

}
class gcp_network_endpoint_group [[#gcp_network_endpoint_group]] {

}
class gcp_instance [[#gcp_instance]] {

}
class gcp_route [[#gcp_route]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_target_vpn_gateway [[#gcp_target_vpn_gateway]] {

}
class gcp_router [[#gcp_router]] {

}
class gcp_global_network_endpoint_group [[#gcp_global_network_endpoint_group]] {

}
class gcp_vpn_gateway [[#gcp_vpn_gateway]] {

}
gcp_subnetwork -[#1A83AF]-> gcp_global_network_endpoint_group
gcp_subnetwork -[#1A83AF]-> gcp_instance_group
gcp_subnetwork -[#1A83AF]-> gcp_instance
gcp_subnetwork -[#1A83AF]-> gcp_network_endpoint_group
gcp_firewall_policy -[#1A83AF]-> gcp_network
gcp_network -[#1A83AF]-> gcp_instance_group
gcp_network -[#1A83AF]-> gcp_vpn_gateway
gcp_network -[#1A83AF]-> gcp_network_endpoint_group
gcp_network -[#1A83AF]-> gcp_subnetwork
gcp_network -[#1A83AF]-> gcp_target_vpn_gateway
gcp_network -[#1A83AF]-> gcp_global_network_endpoint_group
gcp_network -[#1A83AF]-> gcp_instance
gcp_network -[#1A83AF]-> gcp_route
gcp_network -[#1A83AF]-> gcp_router
gcp_firewall -[#1A83AF]-> gcp_network
gcp_instance_group -[#1A83AF]-> gcp_instance
gcp_project -[#1A83AF]-> gcp_route
gcp_project -[#1A83AF]-> gcp_subnetwork
gcp_project -[#1A83AF]-> gcp_network

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_network_edge_security_service`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_network_edge_security_service data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_network_edge_security_service [[#gcp_network_edge_security_service]] {
**service_fingerprint**: string
**service_security_policy**: string
**service_self_link_with_id**: string
}
gcp_resource <|--- gcp_network_edge_security_service

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_network_edge_security_service resource relationships"
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

class gcp_network_edge_security_service [[#gcp_network_edge_security_service]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_network_endpoint_group`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_network_endpoint_group data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_network_endpoint_group [[#gcp_network_endpoint_group]] {
**default_port**: int64
**neg_type**: string
}
gcp_resource <|--- gcp_network_endpoint_group
resource <|--- gcp_network_endpoint_group

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_network_endpoint_group resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_network [[#gcp_network]] {

}
class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_network_endpoint_group [[#gcp_network_endpoint_group]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_zone [[#gcp_zone]] {

}
gcp_subnetwork -[#1A83AF]-> gcp_network_endpoint_group
gcp_network -[#1A83AF]-> gcp_network_endpoint_group
gcp_network -[#1A83AF]-> gcp_subnetwork
gcp_backend_service -[#1A83AF]-> gcp_network_endpoint_group
gcp_region -[#1A83AF]-> gcp_network_endpoint_group
gcp_region -[#1A83AF]-> gcp_backend_service
gcp_region -[#1A83AF]-> gcp_subnetwork
gcp_region -[#1A83AF]-> gcp_zone
gcp_zone -[#1A83AF]-> gcp_network_endpoint_group

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_node_group`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_node_group data model"
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

class gcp_share_settings_project_config [[#gcp_share_settings_project_config]] {
**project_id**: string
}
class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_share_settings [[#gcp_share_settings]] {
**project_map**: dictionary[string, gcp_share_settings_project_config]
**share_type**: string
}
class gcp_duration [[#gcp_duration]] {
**nanos**: int64
**seconds**: string
}
class gcp_node_group_autoscaling_policy [[#gcp_node_group_autoscaling_policy]] {
**max_nodes**: int64
**min_nodes**: int64
**mode**: string
}
class gcp_node_group [[#gcp_node_group]] {
**autoscaling_policy**: gcp_node_group_autoscaling_policy
**fingerprint**: string
**location_hint**: string
**maintenance_policy**: string
**maintenance_window**: gcp_node_group_maintenance_window
**node_template**: string
**share_settings**: gcp_share_settings
**size**: int64
**status**: string
}
class gcp_node_group_maintenance_window [[#gcp_node_group_maintenance_window]] {
**maintenance_duration**: gcp_duration
**start_time**: string
}
gcp_share_settings --> gcp_share_settings_project_config
gcp_resource <|--- gcp_node_group
gcp_node_group --> gcp_node_group_autoscaling_policy
gcp_node_group --> gcp_node_group_maintenance_window
gcp_node_group --> gcp_share_settings
gcp_node_group_maintenance_window --> gcp_duration

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_node_group resource relationships"
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

class gcp_node_template [[#gcp_node_template]] {

}
class gcp_node_group [[#gcp_node_group]] {

}
gcp_node_template -[#1A83AF]-> gcp_node_group

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_node_template`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_node_template data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_accelerator_config [[#gcp_accelerator_config]] {
**accelerator_count**: int64
**accelerator_type**: string
}
class gcp_node_template_node_type_flexibility [[#gcp_node_template_node_type_flexibility]] {
**cpus**: string
**local_ssd**: string
**memory**: string
}
class gcp_local_disk [[#gcp_local_disk]] {
**disk_count**: int64
**disk_size_gb**: int64
**disk_type**: string
}
class gcp_node_template [[#gcp_node_template]] {
**guest_accelerators**: gcp_accelerator_config[]
**cpu_overcommit_type**: string
**local_disks**: gcp_local_disk[]
**node_affinity_labels**: dictionary[string, string]
**node_type**: string
**node_type_flexibility**: gcp_node_template_node_type_flexibility
**server_binding**: string
**status**: string
**status_message**: string
}
gcp_resource <|--- gcp_node_template
gcp_node_template --> gcp_accelerator_config
gcp_node_template --> gcp_local_disk
gcp_node_template --> gcp_node_template_node_type_flexibility

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_node_template resource relationships"
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

class gcp_node_template [[#gcp_node_template]] {

}
class gcp_node_group [[#gcp_node_group]] {

}
gcp_node_template -[#1A83AF]-> gcp_node_group

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_node_type`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_node_type data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_node_type [[#gcp_node_type]] {
**cpu_platform**: string
**guest_cpus**: int64
**local_ssd_gb**: int64
**memory_mb**: int64
}
gcp_resource <|--- gcp_node_type

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_node_type resource relationships"
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

class gcp_node_type [[#gcp_node_type]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_notification_endpoint`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_notification_endpoint data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_duration [[#gcp_duration]] {
**nanos**: int64
**seconds**: string
}
class gcp_notification_endpoint [[#gcp_notification_endpoint]] {
**grpc_settings**: gcp_notification_endpoint_grpc_settings
}
class gcp_notification_endpoint_grpc_settings [[#gcp_notification_endpoint_grpc_settings]] {
**authority**: string
**endpoint**: string
**payload_name**: string
**resend_interval**: gcp_duration
**retry_duration_sec**: int64
}
gcp_resource <|--- gcp_notification_endpoint
gcp_notification_endpoint --> gcp_notification_endpoint_grpc_settings
gcp_notification_endpoint_grpc_settings --> gcp_duration

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_notification_endpoint resource relationships"
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

class gcp_notification_endpoint [[#gcp_notification_endpoint]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_object`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_object data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_object [[#gcp_object]] {

}
gcp_resource <|--- gcp_object

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_object resource relationships"
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

class gcp_object [[#gcp_object]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_operation`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_operation data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_localized_message [[#gcp_localized_message]] {
**locale**: string
**message**: string
}
class gcp_help_link [[#gcp_help_link]] {
**description**: string
**url**: string
}
class gcp_error [[#gcp_error]] {
**errors**: gcp_errors[]
}
class gcp_errors [[#gcp_errors]] {
**code**: string
**error_details**: gcp_errordetails[]
**location**: string
**message**: string
}
class gcp_errordetails [[#gcp_errordetails]] {
**error_info**: gcp_error_info
**help**: gcp_help
**localized_message**: gcp_localized_message
}
class gcp_error_info [[#gcp_error_info]] {
**domain**: string
**metadatas**: dictionary[string, string]
**reason**: string
}
class gcp_help [[#gcp_help]] {
**links**: gcp_help_link[]
}
class gcp_warnings [[#gcp_warnings]] {
**code**: string
**data**: gcp_data[]
**message**: string
}
class gcp_data [[#gcp_data]] {
**key**: string
**value**: string
}
class gcp_operation [[#gcp_operation]] {
**client_operation_id**: string
**end_time**: datetime
**error**: gcp_error
**http_error_message**: string
**http_error_status_code**: int64
**insert_time**: datetime
**operation_group_id**: string
**operation_type**: string
**progress**: int64
**start_time**: datetime
**status**: string
**status_message**: string
**target_id**: string
**target_link**: string
**user**: string
**warnings**: gcp_warnings[]
}
gcp_error --> gcp_errors
gcp_errors --> gcp_errordetails
gcp_errordetails --> gcp_error_info
gcp_errordetails --> gcp_help
gcp_errordetails --> gcp_localized_message
gcp_help --> gcp_help_link
gcp_warnings --> gcp_data
gcp_resource <|--- gcp_operation
gcp_operation --> gcp_error
gcp_operation --> gcp_warnings

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_operation resource relationships"
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

class gcp_operation [[#gcp_operation]] {

}
class gcp_disk [[#gcp_disk]] {

}
gcp_operation -[#1A83AF]-> gcp_disk

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_packet_mirroring`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_packet_mirroring data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_packet_mirroring_forwarding_rule_info [[#gcp_packet_mirroring_forwarding_rule_info]] {
**canonical_url**: string
**url**: string
}
class gcp_packet_mirroring_mirrored_resource_info [[#gcp_packet_mirroring_mirrored_resource_info]] {
**instances**: gcp_packet_mirroring_mirrored_resource_info_instance_info[]
**subnetworks**: gcp_packet_mirroring_mirrored_resource_info_subnet_info[]
**tags**: string[]
}
class gcp_packet_mirroring_mirrored_resource_info_instance_info [[#gcp_packet_mirroring_mirrored_resource_info_instance_info]] {
**canonical_url**: string
**url**: string
}
class gcp_packet_mirroring_mirrored_resource_info_subnet_info [[#gcp_packet_mirroring_mirrored_resource_info_subnet_info]] {
**canonical_url**: string
**url**: string
}
class gcp_packet_mirroring_filter [[#gcp_packet_mirroring_filter]] {
**ip_protocols**: string[]
**cidr_ranges**: string[]
**direction**: string
}
class gcp_packet_mirroring [[#gcp_packet_mirroring]] {
**collector_ilb**: gcp_packet_mirroring_forwarding_rule_info
**enable**: string
**filter**: gcp_packet_mirroring_filter
**mirrored_resources**: gcp_packet_mirroring_mirrored_resource_info
**packet_mirroring_network**: gcp_packet_mirroring_network_info
**priority**: int64
}
class gcp_packet_mirroring_network_info [[#gcp_packet_mirroring_network_info]] {
**canonical_url**: string
**url**: string
}
gcp_packet_mirroring_mirrored_resource_info --> gcp_packet_mirroring_mirrored_resource_info_instance_info
gcp_packet_mirroring_mirrored_resource_info --> gcp_packet_mirroring_mirrored_resource_info_subnet_info
gcp_resource <|--- gcp_packet_mirroring
gcp_packet_mirroring --> gcp_packet_mirroring_forwarding_rule_info
gcp_packet_mirroring --> gcp_packet_mirroring_filter
gcp_packet_mirroring --> gcp_packet_mirroring_mirrored_resource_info
gcp_packet_mirroring --> gcp_packet_mirroring_network_info

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_packet_mirroring resource relationships"
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

class gcp_packet_mirroring [[#gcp_packet_mirroring]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_project`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_project data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_project [[#gcp_project]] {

}
resource <|--- account
gcp_resource <|--- gcp_project
account <|--- gcp_project

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_project resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

}
class gcp_network [[#gcp_network]] {

}
class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_http_health_check [[#gcp_http_health_check]] {

}
class gcp_health_check [[#gcp_health_check]] {

}
class gcp_https_health_check [[#gcp_https_health_check]] {

}
class gcp_target_tcp_proxy [[#gcp_target_tcp_proxy]] {

}
class gcp_target_ssl_proxy [[#gcp_target_ssl_proxy]] {

}
class gcp_service [[#gcp_service]] {

}
class gcp_target_grpc_proxy [[#gcp_target_grpc_proxy]] {

}
class gcp_ssl_certificate [[#gcp_ssl_certificate]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_route [[#gcp_route]] {

}
class gcp_snapshot [[#gcp_snapshot]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_bucket [[#gcp_bucket]] {

}
class gcp_target_http_proxy [[#gcp_target_http_proxy]] {

}
class gcp_region [[#gcp_region]] {

}
gcp_target_https_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_network -[#1A83AF]-> gcp_subnetwork
gcp_network -[#1A83AF]-> gcp_route
gcp_backend_service -[#1A83AF]-> gcp_http_health_check
gcp_backend_service -[#1A83AF]-> gcp_health_check
gcp_backend_service -[#1A83AF]-> gcp_https_health_check
gcp_target_tcp_proxy -[#1A83AF]-> gcp_backend_service
gcp_target_ssl_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_target_ssl_proxy -[#1A83AF]-> gcp_backend_service
gcp_target_grpc_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_forwarding_rule -[#1A83AF]-> gcp_target_http_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_grpc_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_https_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_ssl_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_tcp_proxy
gcp_project -[#1A83AF]-> gcp_snapshot
gcp_project -[#1A83AF]-> gcp_bucket
gcp_project -[#1A83AF]-> gcp_forwarding_rule
gcp_project -[#1A83AF]-> gcp_target_http_proxy
gcp_project -[#1A83AF]-> gcp_target_grpc_proxy
gcp_project -[#1A83AF]-> gcp_ssl_certificate
gcp_project -[#1A83AF]-> gcp_service
gcp_project -[#1A83AF]-> gcp_http_health_check
gcp_project -[#1A83AF]-> gcp_backend_service
gcp_project -[#1A83AF]-> gcp_route
gcp_project -[#1A83AF]-> gcp_region
gcp_project -[#1A83AF]-> gcp_target_https_proxy
gcp_project -[#1A83AF]-> gcp_subnetwork
gcp_project -[#1A83AF]-> gcp_target_ssl_proxy
gcp_project -[#1A83AF]-> gcp_health_check
gcp_project -[#1A83AF]-> gcp_https_health_check
gcp_project -[#1A83AF]-> gcp_target_tcp_proxy
gcp_project -[#1A83AF]-> gcp_network
gcp_region -[#1A83AF]-> gcp_target_https_proxy
gcp_region -[#1A83AF]-> gcp_target_http_proxy
gcp_region -[#1A83AF]-> gcp_backend_service
gcp_region -[#1A83AF]-> gcp_subnetwork
gcp_region -[#1A83AF]-> gcp_health_check
gcp_region -[#1A83AF]-> gcp_ssl_certificate
gcp_region -[#1A83AF]-> gcp_forwarding_rule

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_project_billing_info`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_project_billing_info data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_project_billing_info [[#gcp_project_billing_info]] {
**billing_account_name**: string
**billing_enabled**: boolean
**project_billing_info_project_id**: string
}
gcp_resource <|--- gcp_project_billing_info

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_project_billing_info resource relationships"
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

class gcp_project_billing_info [[#gcp_project_billing_info]] {

}
class gcp_billing_account [[#gcp_billing_account]] {

}
gcp_billing_account -[#1A83AF]-> gcp_project_billing_info

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_public_advertised_prefix`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_public_advertised_prefix data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_public_advertised_prefix_public_delegated_prefix [[#gcp_public_advertised_prefix_public_delegated_prefix]] {
**ip_range**: string
**name**: string
**project**: string
**region**: string
**status**: string
}
class gcp_public_advertised_prefix [[#gcp_public_advertised_prefix]] {
**dns_verification_ip**: string
**fingerprint**: string
**ip_cidr_range**: string
**public_delegated_prefixs**: gcp_public_advertised_prefix_public_delegated_prefix[]
**shared_secret**: string
**status**: string
}
gcp_resource <|--- gcp_public_advertised_prefix
gcp_public_advertised_prefix --> gcp_public_advertised_prefix_public_delegated_prefix

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_public_advertised_prefix resource relationships"
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

class gcp_public_delegated_prefix [[#gcp_public_delegated_prefix]] {

}
class gcp_public_advertised_prefix [[#gcp_public_advertised_prefix]] {

}
gcp_public_delegated_prefix -[#1A83AF]-> gcp_public_advertised_prefix

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_public_delegated_prefix`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_public_delegated_prefix data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_public_delegated_prefix [[#gcp_public_delegated_prefix]] {
**fingerprint**: string
**ip_cidr_range**: string
**is_live_migration**: boolean
**parent_prefix**: string
**public_delegated_sub_prefixs**: gcp_public_delegated_prefix_public_delegated_sub_prefix[]
**status**: string
}
class gcp_public_delegated_prefix_public_delegated_sub_prefix [[#gcp_public_delegated_prefix_public_delegated_sub_prefix]] {
**delegatee_project**: string
**description**: string
**ip_cidr_range**: string
**is_address**: boolean
**name**: string
**region**: string
**status**: string
}
gcp_resource <|--- gcp_public_delegated_prefix
gcp_public_delegated_prefix --> gcp_public_delegated_prefix_public_delegated_sub_prefix

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_public_delegated_prefix resource relationships"
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

class gcp_public_delegated_prefix [[#gcp_public_delegated_prefix]] {

}
class gcp_public_advertised_prefix [[#gcp_public_advertised_prefix]] {

}
gcp_public_delegated_prefix -[#1A83AF]-> gcp_public_advertised_prefix

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_quota`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_quota data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class quota [[#quota]] {
**quota**: double
**usage**: double
**quota_type**: string
}
class phantom_resource [[#phantom_resource]] {

}
class gcp_quota [[#gcp_quota]] {

}
phantom_resource <|--- quota
resource <|--- phantom_resource
gcp_resource <|--- gcp_quota
quota <|--- gcp_quota

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_quota resource relationships"
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

class gcp_region [[#gcp_region]] {

}
class gcp_quota [[#gcp_quota]] {

}
gcp_region -[#1A83AF]-> gcp_quota

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_region`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_region data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class region [[#region]] {

}
class gcp_region [[#gcp_region]] {
**region_status**: string
}
resource <|--- region
gcp_resource <|--- gcp_region
region <|--- gcp_region

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_region resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

}
class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_disk [[#gcp_disk]] {

}
class gcp_instance_group [[#gcp_instance_group]] {

}
class gcp_network_endpoint_group [[#gcp_network_endpoint_group]] {

}
class gcp_health_check [[#gcp_health_check]] {

}
class gcp_instance_group_manager [[#gcp_instance_group_manager]] {

}
class gcp_ssl_certificate [[#gcp_ssl_certificate]] {

}
class gcp_url_map [[#gcp_url_map]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_disk_type [[#gcp_disk_type]] {

}
class gcp_gke_cluster [[#gcp_gke_cluster]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_target_http_proxy [[#gcp_target_http_proxy]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_target_pool [[#gcp_target_pool]] {

}
class gcp_database [[#gcp_database]] {

}
class gcp_vpn_tunnel [[#gcp_vpn_tunnel]] {

}
class gcp_autoscaler [[#gcp_autoscaler]] {

}
class gcp_quota [[#gcp_quota]] {

}
class gcp_zone [[#gcp_zone]] {

}
class gcp_target_vpn_gateway [[#gcp_target_vpn_gateway]] {

}
class gcp_router [[#gcp_router]] {

}
gcp_subnetwork -[#1A83AF]-> gcp_instance_group
gcp_subnetwork -[#1A83AF]-> gcp_network_endpoint_group
gcp_target_https_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_target_https_proxy -[#1A83AF]-> gcp_url_map
gcp_backend_service -[#1A83AF]-> gcp_instance_group
gcp_backend_service -[#1A83AF]-> gcp_network_endpoint_group
gcp_backend_service -[#1A83AF]-> gcp_health_check
gcp_instance_group -[#1A83AF]-> gcp_instance_group_manager
gcp_instance_group_manager -[#1A83AF]-> gcp_health_check
gcp_url_map -[#1A83AF]-> gcp_backend_service
gcp_forwarding_rule -[#1A83AF]-> gcp_target_http_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_https_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_vpn_gateway
gcp_forwarding_rule -[#1A83AF]-> gcp_target_pool
gcp_disk_type -[#1A83AF]-> gcp_disk
gcp_project -[#1A83AF]-> gcp_forwarding_rule
gcp_project -[#1A83AF]-> gcp_target_http_proxy
gcp_project -[#1A83AF]-> gcp_ssl_certificate
gcp_project -[#1A83AF]-> gcp_backend_service
gcp_project -[#1A83AF]-> gcp_region
gcp_project -[#1A83AF]-> gcp_target_https_proxy
gcp_project -[#1A83AF]-> gcp_subnetwork
gcp_project -[#1A83AF]-> gcp_health_check
gcp_target_http_proxy -[#1A83AF]-> gcp_url_map
gcp_region -[#1A83AF]-> gcp_database
gcp_region -[#1A83AF]-> gcp_gke_cluster
gcp_region -[#1A83AF]-> gcp_instance_group
gcp_region -[#1A83AF]-> gcp_instance_group_manager
gcp_region -[#1A83AF]-> gcp_vpn_tunnel
gcp_region -[#1A83AF]-> gcp_target_https_proxy
gcp_region -[#1A83AF]-> gcp_disk
gcp_region -[#1A83AF]-> gcp_target_pool
gcp_region -[#1A83AF]-> gcp_target_http_proxy
gcp_region -[#1A83AF]-> gcp_network_endpoint_group
gcp_region -[#1A83AF]-> gcp_backend_service
gcp_region -[#1A83AF]-> gcp_subnetwork
gcp_region -[#1A83AF]-> gcp_health_check
gcp_region -[#1A83AF]-> gcp_url_map
gcp_region -[#1A83AF]-> gcp_autoscaler
gcp_region -[#1A83AF]-> gcp_ssl_certificate
gcp_region -[#1A83AF]-> gcp_forwarding_rule
gcp_region -[#1A83AF]-> gcp_disk_type
gcp_region -[#1A83AF]-> gcp_quota
gcp_region -[#1A83AF]-> gcp_zone
gcp_region -[#1A83AF]-> gcp_target_vpn_gateway
gcp_region -[#1A83AF]-> gcp_router
gcp_vpn_tunnel -[#1A83AF]-> gcp_target_vpn_gateway
gcp_autoscaler -[#1A83AF]-> gcp_instance_group_manager
gcp_zone -[#1A83AF]-> gcp_database
gcp_zone -[#1A83AF]-> gcp_instance_group
gcp_zone -[#1A83AF]-> gcp_gke_cluster
gcp_zone -[#1A83AF]-> gcp_disk_type
gcp_zone -[#1A83AF]-> gcp_autoscaler
gcp_zone -[#1A83AF]-> gcp_network_endpoint_group
gcp_zone -[#1A83AF]-> gcp_disk

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_resource_policy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_resource_policy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_resource_policy_daily_cycle [[#gcp_resource_policy_daily_cycle]] {
**days_in_cycle**: int64
**duration**: string
**start_time**: string
}
class gcp_resource_policy_instance_schedule_policy [[#gcp_resource_policy_instance_schedule_policy]] {
**expiration_time**: datetime
**start_time**: datetime
**time_zone**: string
**vm_start_schedule**: string
**vm_stop_schedule**: string
}
class gcp_resource_policy_weekly_cycle [[#gcp_resource_policy_weekly_cycle]] {
**day_of_weeks**: gcp_resource_policy_weekly_cycle_day_of_week[]
}
class gcp_resource_policy_weekly_cycle_day_of_week [[#gcp_resource_policy_weekly_cycle_day_of_week]] {
**day**: string
**duration**: string
**start_time**: string
}
class gcp_resource_policy_snapshot_schedule_policy_snapshot_properties [[#gcp_resource_policy_snapshot_schedule_policy_snapshot_properties]] {
**chain_name**: string
**guest_flush**: boolean
**labels**: dictionary[string, string]
**storage_locations**: string[]
}
class gcp_resource_policy_snapshot_schedule_policy [[#gcp_resource_policy_snapshot_schedule_policy]] {
**retention_policy**: gcp_resource_policy_snapshot_schedule_policy_retention_policy
**schedule**: gcp_resource_policy_snapshot_schedule_policy_schedule
**snapshot_properties**: gcp_resource_policy_snapshot_schedule_policy_snapshot_properties
}
class gcp_resource_policy_snapshot_schedule_policy_retention_policy [[#gcp_resource_policy_snapshot_schedule_policy_retention_policy]] {
**max_retention_days**: int64
**on_source_disk_delete**: string
}
class gcp_resource_policy_snapshot_schedule_policy_schedule [[#gcp_resource_policy_snapshot_schedule_policy_schedule]] {
**daily_schedule**: gcp_resource_policy_daily_cycle
**hourly_schedule**: gcp_resource_policy_hourly_cycle
**weekly_schedule**: gcp_resource_policy_weekly_cycle
}
class gcp_resource_policy_hourly_cycle [[#gcp_resource_policy_hourly_cycle]] {
**duration**: string
**hours_in_cycle**: int64
**start_time**: string
}
class gcp_resource_policy_group_placement_policy [[#gcp_resource_policy_group_placement_policy]] {
**availability_domain_count**: int64
**collocation**: string
**vm_count**: int64
}
class gcp_resource_policy_resource_status_instance_schedule_policy_status [[#gcp_resource_policy_resource_status_instance_schedule_policy_status]] {
**last_run_start_time**: datetime
**next_run_start_time**: datetime
}
class gcp_resource_policy_resource_status [[#gcp_resource_policy_resource_status]] {
**instance_schedule_policy**: gcp_resource_policy_resource_status_instance_schedule_policy_status
}
class gcp_resource_policy [[#gcp_resource_policy]] {
**group_placement_policy**: gcp_resource_policy_group_placement_policy
**instance_schedule_policy**: gcp_resource_policy_instance_schedule_policy
**resource_policy_resource_status**: gcp_resource_policy_resource_status
**snapshot_schedule_policy**: gcp_resource_policy_snapshot_schedule_policy
**status**: string
}
gcp_resource_policy_weekly_cycle --> gcp_resource_policy_weekly_cycle_day_of_week
gcp_resource_policy_snapshot_schedule_policy --> gcp_resource_policy_snapshot_schedule_policy_retention_policy
gcp_resource_policy_snapshot_schedule_policy --> gcp_resource_policy_snapshot_schedule_policy_schedule
gcp_resource_policy_snapshot_schedule_policy --> gcp_resource_policy_snapshot_schedule_policy_snapshot_properties
gcp_resource_policy_snapshot_schedule_policy_schedule --> gcp_resource_policy_daily_cycle
gcp_resource_policy_snapshot_schedule_policy_schedule --> gcp_resource_policy_hourly_cycle
gcp_resource_policy_snapshot_schedule_policy_schedule --> gcp_resource_policy_weekly_cycle
gcp_resource_policy_resource_status --> gcp_resource_policy_resource_status_instance_schedule_policy_status
gcp_resource <|--- gcp_resource_policy
gcp_resource_policy --> gcp_resource_policy_group_placement_policy
gcp_resource_policy --> gcp_resource_policy_instance_schedule_policy
gcp_resource_policy --> gcp_resource_policy_resource_status
gcp_resource_policy --> gcp_resource_policy_snapshot_schedule_policy

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_resource_policy resource relationships"
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

class gcp_resource_policy [[#gcp_resource_policy]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_route`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_route data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_route [[#gcp_route]] {

}
gcp_resource <|--- gcp_route
resource <|--- gcp_route

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_route resource relationships"
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

class gcp_network [[#gcp_network]] {

}
class gcp_route [[#gcp_route]] {

}
class gcp_project [[#gcp_project]] {

}
gcp_network -[#1A83AF]-> gcp_route
gcp_project -[#1A83AF]-> gcp_route
gcp_project -[#1A83AF]-> gcp_network

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_router`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_router data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gateway [[#gateway]] {

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
class gcp_router [[#gcp_router]] {

}
resource <|--- gateway
gcp_resource <|--- gcp_router
gateway <|--- gcp_router

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_router resource relationships"
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

class gcp_network [[#gcp_network]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_router [[#gcp_router]] {

}
gcp_network -[#1A83AF]-> gcp_router
gcp_region -[#1A83AF]-> gcp_router

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_security_policy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_security_policy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class policy [[#policy]] {

}
class gcp_security_policy [[#gcp_security_policy]] {

}
resource <|--- policy
gcp_resource <|--- gcp_security_policy
policy <|--- gcp_security_policy

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_security_policy resource relationships"
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

class gcp_zone [[#gcp_zone]] {

}
class gcp_security_policy [[#gcp_security_policy]] {

}
gcp_zone -[#1A83AF]-> gcp_security_policy

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_service`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_service data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_service [[#gcp_service]] {

}
class phantom_resource [[#phantom_resource]] {

}
gcp_resource <|--- gcp_service
phantom_resource <|--- gcp_service
resource <|--- phantom_resource

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_service resource relationships"
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

class gcp_service [[#gcp_service]] {

}
class gcp_service_sku [[#gcp_service_sku]] {

}
class gcp_project [[#gcp_project]] {

}
gcp_service -[#1A83AF]-> gcp_service_sku
gcp_project -[#1A83AF]-> gcp_service

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_service_attachment`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_service_attachment data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_service_attachment_connected_endpoint [[#gcp_service_attachment_connected_endpoint]] {
**endpoint**: string
**psc_connection_id**: string
**status**: string
}
class gcp_service_attachment [[#gcp_service_attachment]] {
**connected_endpoints**: gcp_service_attachment_connected_endpoint[]
**connection_preference**: string
**consumer_accept_lists**: gcp_service_attachment_consumer_project_limit[]
**consumer_reject_lists**: string[]
**domain_names**: string[]
**enable_proxy_protocol**: boolean
**fingerprint**: string
**nat_subnets**: string[]
**producer_forwarding_rule**: string
**psc_service_attachment_id**: gcp_uint128
**target_service**: string
}
class gcp_service_attachment_consumer_project_limit [[#gcp_service_attachment_consumer_project_limit]] {
**connection_limit**: int64
**project_id_or_num**: string
}
class gcp_uint128 [[#gcp_uint128]] {
**high**: string
**low**: string
}
gcp_resource <|--- gcp_service_attachment
gcp_service_attachment --> gcp_service_attachment_connected_endpoint
gcp_service_attachment --> gcp_service_attachment_consumer_project_limit
gcp_service_attachment --> gcp_uint128

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_service_attachment resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_service_attachment [[#gcp_service_attachment]] {

}
class gcp_backend_service [[#gcp_backend_service]] {

}
gcp_service_attachment -[#1A83AF]-> gcp_subnetwork
gcp_service_attachment -[#1A83AF]-> gcp_backend_service

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_service_sku`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_service_sku data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class phantom_resource [[#phantom_resource]] {

}
class gcp_service_sku [[#gcp_service_sku]] {
**service**: string
**resource_family**: string
**resource_group**: string
**usage_type**: string
**pricing_info**: any[]
**service_provider_name**: string
**geo_taxonomy_type**: string
**geo_taxonomy_regions**: any[]
}
resource <|--- phantom_resource
gcp_resource <|--- gcp_service_sku
phantom_resource <|--- gcp_service_sku

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_service_sku resource relationships"
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

class gcp_service [[#gcp_service]] {

}
class gcp_service_sku [[#gcp_service_sku]] {

}
class gcp_machine_type [[#gcp_machine_type]] {

}
class gcp_disk_type [[#gcp_disk_type]] {

}
gcp_service -[#1A83AF]-> gcp_service_sku
gcp_service_sku -[#1A83AF]-> gcp_machine_type
gcp_service_sku -[#1A83AF]-> gcp_disk_type

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_sku`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sku data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_aggregation_info [[#gcp_aggregation_info]] {
**aggregation_count**: int64
**aggregation_interval**: string
**aggregation_level**: string
}
class gcp_pricing_info [[#gcp_pricing_info]] {
**aggregation_info**: gcp_aggregation_info
**currency_conversion_rate**: double
**effective_time**: datetime
**pricing_expression**: gcp_pricing_expression
**summary**: string
}
class gcp_pricing_expression [[#gcp_pricing_expression]] {
**base_unit**: string
**base_unit_conversion_factor**: double
**base_unit_description**: string
**display_quantity**: double
**tiered_rates**: gcp_tier_rate[]
**usage_unit**: string
**usage_unit_description**: string
}
class gcp_tier_rate [[#gcp_tier_rate]] {
**start_usage_amount**: double
**unit_price**: gcp_money
}
class gcp_money [[#gcp_money]] {
**currency_code**: string
**nanos**: int64
**units**: string
}
class gcp_geo_taxonomy [[#gcp_geo_taxonomy]] {
**regions**: string[]
**type**: string
}
class gcp_category [[#gcp_category]] {
**resource_family**: string
**resource_group**: string
**service_display_name**: string
**usage_type**: string
}
class gcp_sku [[#gcp_sku]] {
**category**: gcp_category
**geo_taxonomy**: gcp_geo_taxonomy
**sku_pricing_info**: gcp_pricing_info[]
**service_provider_name**: string
**service_regions**: string[]
**usage_unit_nanos**: int64
}
gcp_pricing_info --> gcp_aggregation_info
gcp_pricing_info --> gcp_pricing_expression
gcp_pricing_expression --> gcp_tier_rate
gcp_tier_rate --> gcp_money
gcp_resource <|--- gcp_sku
gcp_sku --> gcp_category
gcp_sku --> gcp_geo_taxonomy
gcp_sku --> gcp_pricing_info

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sku resource relationships"
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

class gcp_sku [[#gcp_sku]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_snapshot`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_snapshot data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class snapshot [[#snapshot]] {
**snapshot_status**: string
**description**: string
**volume_id**: string
**volume_size**: int64
**encrypted**: boolean
**owner_id**: string
**owner_alias**: string
}
class gcp_snapshot [[#gcp_snapshot]] {
**storage_bytes**: int64
}
resource <|--- snapshot
gcp_resource <|--- gcp_snapshot
snapshot <|--- gcp_snapshot

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_snapshot resource relationships"
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

class gcp_disk [[#gcp_disk]] {

}
class gcp_snapshot [[#gcp_snapshot]] {

}
class gcp_project [[#gcp_project]] {

}
gcp_disk -[#1A83AF]-> gcp_snapshot
gcp_project -[#1A83AF]-> gcp_snapshot

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_sql_backup_run`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_backup_run data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_sql_operation_error [[#gcp_sql_operation_error]] {
**code**: string
**message**: string
}
class gcp_sql_backup_run [[#gcp_sql_backup_run]] {
**backup_kind**: string
**disk_encryption_configuration**: string
**disk_encryption_status**: string
**end_time**: datetime
**enqueued_time**: datetime
**sql_operation_error**: gcp_sql_operation_error
**instance**: string
**location**: string
**start_time**: datetime
**status**: string
**time_zone**: string
**type**: string
**window_start_time**: datetime
}
gcp_resource <|--- gcp_sql_backup_run
gcp_sql_backup_run --> gcp_sql_operation_error

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_backup_run resource relationships"
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

class gcp_sql_backup_run [[#gcp_sql_backup_run]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_sql_database`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_database data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_sql_sql_server_database_details [[#gcp_sql_sql_server_database_details]] {
**compatibility_level**: int64
**recovery_model**: string
}
class gcp_sql_database [[#gcp_sql_database]] {
**charset**: string
**collation**: string
**etag**: string
**instance**: string
**project**: string
**sqlserver_database_details**: gcp_sql_sql_server_database_details
}
gcp_resource <|--- gcp_sql_database
gcp_sql_database --> gcp_sql_sql_server_database_details

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_database resource relationships"
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

class gcp_sql_database [[#gcp_sql_database]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_sql_database_instance`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_database_instance data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_sql_my_sql_replica_configuration [[#gcp_sql_my_sql_replica_configuration]] {
**ca_certificate**: string
**client_certificate**: string
**client_key**: string
**connect_retry_interval**: int64
**dump_file_path**: string
**master_heartbeat_period**: string
**password**: string
**ssl_cipher**: string
**username**: string
**verify_server_certificate**: boolean
}
class gcp_sql_replica_configuration [[#gcp_sql_replica_configuration]] {
**failover_target**: boolean
**mysql_replica_configuration**: gcp_sql_my_sql_replica_configuration
}
class gcp_sql_backup_retention_settings [[#gcp_sql_backup_retention_settings]] {
**retained_backups**: int64
**retention_unit**: string
}
class gcp_sql_failoverreplica [[#gcp_sql_failoverreplica]] {
**available**: boolean
**name**: string
}
class gcp_sql_settings [[#gcp_sql_settings]] {
**activation_policy**: string
**active_directory_config**: string
**authorized_gae_applications**: string[]
**availability_type**: string
**backup_configuration**: gcp_sql_backup_configuration
**collation**: string
**connector_enforcement**: string
**crash_safe_replication_enabled**: boolean
**data_disk_size_gb**: string
**data_disk_type**: string
**database_flags**: gcp_sql_database_flags[]
**database_replication_enabled**: boolean
**deletion_protection_enabled**: boolean
**deny_maintenance_periods**: gcp_sql_deny_maintenance_period[]
**insights_config**: gcp_sql_insights_config
**ip_configuration**: gcp_sql_ip_configuration
**location_preference**: gcp_sql_location_preference
**maintenance_window**: gcp_sql_maintenance_window
**password_validation_policy**: gcp_sql_password_validation_policy
**pricing_plan**: string
**replication_type**: string
**settings_version**: string
**sql_server_audit_config**: gcp_sql_sql_server_audit_config
**storage_auto_resize**: boolean
**storage_auto_resize_limit**: string
**tier**: string
**time_zone**: string
**user_labels**: dictionary[string, string]
}
class gcp_sql_backup_configuration [[#gcp_sql_backup_configuration]] {
**backup_retention_settings**: gcp_sql_backup_retention_settings
**binary_log_enabled**: boolean
**enabled**: boolean
**location**: string
**point_in_time_recovery_enabled**: boolean
**replication_log_archiving_enabled**: boolean
**start_time**: string
**transaction_log_retention_days**: int64
}
class gcp_sql_database_flags [[#gcp_sql_database_flags]] {
**name**: string
**value**: string
}
class gcp_sql_deny_maintenance_period [[#gcp_sql_deny_maintenance_period]] {
**end_date**: string
**start_date**: string
**time**: string
}
class gcp_sql_insights_config [[#gcp_sql_insights_config]] {
**query_insights_enabled**: boolean
**query_plans_per_minute**: int64
**query_string_length**: int64
**record_application_tags**: boolean
**record_client_address**: boolean
}
class gcp_sql_ip_configuration [[#gcp_sql_ip_configuration]] {
**allocated_ip_range**: string
**authorized_networks**: gcp_sql_acl_entry[]
**ipv4_enabled**: boolean
**private_network**: string
**require_ssl**: boolean
}
class gcp_sql_acl_entry [[#gcp_sql_acl_entry]] {
**expiration_time**: datetime
**name**: string
**value**: string
}
class gcp_sql_location_preference [[#gcp_sql_location_preference]] {
**follow_gae_application**: string
**secondary_zone**: string
**zone**: string
}
class gcp_sql_maintenance_window [[#gcp_sql_maintenance_window]] {
**day**: int64
**hour**: int64
**update_track**: string
}
class gcp_sql_password_validation_policy [[#gcp_sql_password_validation_policy]] {
**complexity**: string
**disallow_username_substring**: boolean
**enable_password_policy**: boolean
**min_length**: int64
**password_change_interval**: string
**reuse_interval**: int64
}
class gcp_sql_sql_server_audit_config [[#gcp_sql_sql_server_audit_config]] {
**bucket**: string
**retention_interval**: string
**upload_interval**: string
}
class gcp_sql_on_premises_configuration [[#gcp_sql_on_premises_configuration]] {
**ca_certificate**: string
**client_certificate**: string
**client_key**: string
**dump_file_path**: string
**host_port**: string
**password**: string
**source_instance**: gcp_sql_instance_reference
**username**: string
}
class gcp_sql_instance_reference [[#gcp_sql_instance_reference]] {
**name**: string
**project**: string
**region**: string
}
class gcp_sql_sql_scheduled_maintenance [[#gcp_sql_sql_scheduled_maintenance]] {
**can_defer**: boolean
**can_reschedule**: boolean
**schedule_deadline_time**: datetime
**start_time**: datetime
}
class gcp_sql_ip_mapping [[#gcp_sql_ip_mapping]] {
**ip_address**: string
**time_to_retire**: string
**type**: string
}
class gcp_sql_database_instance [[#gcp_sql_database_instance]] {
**available_maintenance_versions**: string[]
**backend_type**: string
**connection_name**: string
**create_time**: datetime
**current_disk_size**: string
**database_installed_version**: string
**database_version**: string
**disk_encryption_configuration**: string
**disk_encryption_status**: string
**etag**: string
**failover_replica**: gcp_sql_failoverreplica
**gce_zone**: string
**instance_type**: string
**ip_addresses**: gcp_sql_ip_mapping[]
**ipv6_address**: string
**maintenance_version**: string
**master_instance_name**: string
**max_disk_size**: string
**on_premises_configuration**: gcp_sql_on_premises_configuration
**out_of_disk_report**: gcp_sql_sql_out_of_disk_report
**project**: string
**replica_configuration**: gcp_sql_replica_configuration
**replica_names**: string[]
**root_password**: string
**satisfies_pzs**: boolean
**scheduled_maintenance**: gcp_sql_sql_scheduled_maintenance
**secondary_gce_zone**: string
**server_ca_cert**: gcp_sql_ssl_cert
**service_account_email_address**: string
**settings**: gcp_sql_settings
**sql_database_instance_state**: string
**suspension_reason**: string[]
}
class gcp_sql_sql_out_of_disk_report [[#gcp_sql_sql_out_of_disk_report]] {
**sql_min_recommended_increase_size_gb**: int64
**sql_out_of_disk_state**: string
}
class gcp_sql_ssl_cert [[#gcp_sql_ssl_cert]] {
**cert**: string
**cert_serial_number**: string
**common_name**: string
**create_time**: datetime
**expiration_time**: datetime
**instance**: string
**self_link**: string
**sha1_fingerprint**: string
}
gcp_sql_replica_configuration --> gcp_sql_my_sql_replica_configuration
gcp_sql_settings --> gcp_sql_backup_configuration
gcp_sql_settings --> gcp_sql_database_flags
gcp_sql_settings --> gcp_sql_deny_maintenance_period
gcp_sql_settings --> gcp_sql_insights_config
gcp_sql_settings --> gcp_sql_ip_configuration
gcp_sql_settings --> gcp_sql_location_preference
gcp_sql_settings --> gcp_sql_maintenance_window
gcp_sql_settings --> gcp_sql_password_validation_policy
gcp_sql_settings --> gcp_sql_sql_server_audit_config
gcp_sql_backup_configuration --> gcp_sql_backup_retention_settings
gcp_sql_ip_configuration --> gcp_sql_acl_entry
gcp_sql_on_premises_configuration --> gcp_sql_instance_reference
gcp_resource <|--- gcp_sql_database_instance
gcp_sql_database_instance --> gcp_sql_failoverreplica
gcp_sql_database_instance --> gcp_sql_ip_mapping
gcp_sql_database_instance --> gcp_sql_on_premises_configuration
gcp_sql_database_instance --> gcp_sql_sql_out_of_disk_report
gcp_sql_database_instance --> gcp_sql_replica_configuration
gcp_sql_database_instance --> gcp_sql_sql_scheduled_maintenance
gcp_sql_database_instance --> gcp_sql_ssl_cert
gcp_sql_database_instance --> gcp_sql_settings

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_database_instance resource relationships"
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

class gcp_sql_database_instance [[#gcp_sql_database_instance]] {

}
class gcp_sql_operation [[#gcp_sql_operation]] {

}
gcp_sql_database_instance -[#1A83AF]-> gcp_sql_operation

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_sql_operation`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_operation data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_sql_operation_error [[#gcp_sql_operation_error]] {
**code**: string
**message**: string
}
class gcp_sql_encryptionoptions [[#gcp_sql_encryptionoptions]] {
**cert_path**: string
**pvk_password**: string
**pvk_path**: string
}
class gcp_sql_bakimportoptions [[#gcp_sql_bakimportoptions]] {
**encryption_options**: gcp_sql_encryptionoptions
}
class gcp_sql_export_context [[#gcp_sql_export_context]] {
**csv_export_options**: gcp_sql_csvexportoptions
**databases**: string[]
**file_type**: string
**offload**: boolean
**sql_export_options**: gcp_sql_sqlexportoptions
**uri**: string
}
class gcp_sql_csvexportoptions [[#gcp_sql_csvexportoptions]] {
**escape_character**: string
**fields_terminated_by**: string
**lines_terminated_by**: string
**quote_character**: string
**select_query**: string
}
class gcp_sql_sqlexportoptions [[#gcp_sql_sqlexportoptions]] {
**mysql_export_options**: gcp_sql_mysqlexportoptions
**schema_only**: boolean
**tables**: string[]
}
class gcp_sql_mysqlexportoptions [[#gcp_sql_mysqlexportoptions]] {
**master_data**: int64
}
class gcp_sql_operation [[#gcp_sql_operation]] {
**backup_context**: string
**end_time**: datetime
**sql_operation_errors**: gcp_sql_operation_error[]
**export_context**: gcp_sql_export_context
**import_context**: gcp_sql_import_context
**insert_time**: datetime
**operation_type**: string
**start_time**: datetime
**status**: string
**target_id**: string
**target_link**: string
**target_project**: string
**user**: string
}
class gcp_sql_csvimportoptions [[#gcp_sql_csvimportoptions]] {
**columns**: string[]
**escape_character**: string
**fields_terminated_by**: string
**lines_terminated_by**: string
**quote_character**: string
**table**: string
}
class gcp_sql_import_context [[#gcp_sql_import_context]] {
**bak_import_options**: gcp_sql_bakimportoptions
**csv_import_options**: gcp_sql_csvimportoptions
**database**: string
**file_type**: string
**import_user**: string
**uri**: string
}
gcp_sql_bakimportoptions --> gcp_sql_encryptionoptions
gcp_sql_export_context --> gcp_sql_csvexportoptions
gcp_sql_export_context --> gcp_sql_sqlexportoptions
gcp_sql_sqlexportoptions --> gcp_sql_mysqlexportoptions
gcp_resource <|--- gcp_sql_operation
gcp_sql_operation --> gcp_sql_operation_error
gcp_sql_operation --> gcp_sql_export_context
gcp_sql_operation --> gcp_sql_import_context
gcp_sql_import_context --> gcp_sql_bakimportoptions
gcp_sql_import_context --> gcp_sql_csvimportoptions

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_operation resource relationships"
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

class gcp_sql_database_instance [[#gcp_sql_database_instance]] {

}
class gcp_sql_operation [[#gcp_sql_operation]] {

}
gcp_sql_database_instance -[#1A83AF]-> gcp_sql_operation

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_sql_user`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_user data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_sql_sql_server_user_details [[#gcp_sql_sql_server_user_details]] {
**disabled**: boolean
**server_roles**: string[]
}
class gcp_sql_password_status [[#gcp_sql_password_status]] {
**locked**: boolean
**password_expiration_time**: datetime
}
class gcp_sql_user [[#gcp_sql_user]] {
**dual_password_type**: string
**etag**: string
**host**: string
**instance**: string
**password**: string
**password_policy**: gcp_sql_user_password_validation_policy
**project**: string
**sqlserver_user_details**: gcp_sql_sql_server_user_details
**type**: string
}
class gcp_sql_user_password_validation_policy [[#gcp_sql_user_password_validation_policy]] {
**allowed_failed_attempts**: int64
**enable_failed_attempts_check**: boolean
**enable_password_verification**: boolean
**password_expiration_duration**: string
**status**: gcp_sql_password_status
}
gcp_resource <|--- gcp_sql_user
gcp_sql_user --> gcp_sql_user_password_validation_policy
gcp_sql_user --> gcp_sql_sql_server_user_details
gcp_sql_user_password_validation_policy --> gcp_sql_password_status

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_sql_user resource relationships"
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

class gcp_sql_user [[#gcp_sql_user]] {

}

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_ssl_certificate`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_ssl_certificate data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_ssl_certificate [[#gcp_ssl_certificate]] {
**description**: string
**certificate**: string
**certificate_type**: string
**certificate_managed**: dictionary[any, any]
**subject_alternative_names**: string[]
}
class certificate [[#certificate]] {
**expires**: datetime
**dns_names**: string[]
**sha1_fingerprint**: string
}
gcp_resource <|--- gcp_ssl_certificate
certificate <|--- gcp_ssl_certificate
resource <|--- certificate

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_ssl_certificate resource relationships"
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

class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

}
class gcp_target_ssl_proxy [[#gcp_target_ssl_proxy]] {

}
class gcp_target_grpc_proxy [[#gcp_target_grpc_proxy]] {

}
class gcp_ssl_certificate [[#gcp_ssl_certificate]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_region [[#gcp_region]] {

}
gcp_target_https_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_target_ssl_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_target_grpc_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_project -[#1A83AF]-> gcp_target_grpc_proxy
gcp_project -[#1A83AF]-> gcp_ssl_certificate
gcp_project -[#1A83AF]-> gcp_region
gcp_project -[#1A83AF]-> gcp_target_https_proxy
gcp_project -[#1A83AF]-> gcp_target_ssl_proxy
gcp_region -[#1A83AF]-> gcp_target_https_proxy
gcp_region -[#1A83AF]-> gcp_ssl_certificate

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_ssl_policy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_ssl_policy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_ssl_policy [[#gcp_ssl_policy]] {
**custom_features**: string[]
**enabled_features**: string[]
**fingerprint**: string
**min_tls_version**: string
**profile**: string
**warnings**: gcp_warnings[]
}
class gcp_warnings [[#gcp_warnings]] {
**code**: string
**data**: gcp_data[]
**message**: string
}
class gcp_data [[#gcp_data]] {
**key**: string
**value**: string
}
gcp_resource <|--- gcp_ssl_policy
gcp_ssl_policy --> gcp_warnings
gcp_warnings --> gcp_data

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_ssl_policy resource relationships"
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

class gcp_ssl_policy [[#gcp_ssl_policy]] {

}
class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

}
gcp_ssl_policy -[#1A83AF]-> gcp_target_https_proxy

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_subnetwork`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_subnetwork data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_subnetwork [[#gcp_subnetwork]] {

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
class subnet [[#subnet]] {

}
gcp_resource <|--- gcp_subnetwork
subnet <|--- gcp_subnetwork
resource <|--- subnet

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_subnetwork resource relationships"
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

class gcp_subnetwork [[#gcp_subnetwork]] {

}
class gcp_network [[#gcp_network]] {

}
class gcp_service_attachment [[#gcp_service_attachment]] {

}
class gcp_instance_group [[#gcp_instance_group]] {

}
class gcp_network_endpoint_group [[#gcp_network_endpoint_group]] {

}
class gcp_instance [[#gcp_instance]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_global_network_endpoint_group [[#gcp_global_network_endpoint_group]] {

}
gcp_subnetwork -[#1A83AF]-> gcp_global_network_endpoint_group
gcp_subnetwork -[#1A83AF]-> gcp_instance_group
gcp_subnetwork -[#1A83AF]-> gcp_instance
gcp_subnetwork -[#1A83AF]-> gcp_network_endpoint_group
gcp_network -[#1A83AF]-> gcp_instance_group
gcp_network -[#1A83AF]-> gcp_network_endpoint_group
gcp_network -[#1A83AF]-> gcp_subnetwork
gcp_network -[#1A83AF]-> gcp_global_network_endpoint_group
gcp_network -[#1A83AF]-> gcp_instance
gcp_service_attachment -[#1A83AF]-> gcp_subnetwork
gcp_instance_group -[#1A83AF]-> gcp_instance
gcp_project -[#1A83AF]-> gcp_region
gcp_project -[#1A83AF]-> gcp_subnetwork
gcp_project -[#1A83AF]-> gcp_network
gcp_region -[#1A83AF]-> gcp_instance_group
gcp_region -[#1A83AF]-> gcp_network_endpoint_group
gcp_region -[#1A83AF]-> gcp_subnetwork

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_target_grpc_proxy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_grpc_proxy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_target_grpc_proxy [[#gcp_target_grpc_proxy]] {

}
gcp_resource <|--- gcp_target_grpc_proxy
resource <|--- gcp_target_grpc_proxy

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_grpc_proxy resource relationships"
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

class gcp_target_grpc_proxy [[#gcp_target_grpc_proxy]] {

}
class gcp_ssl_certificate [[#gcp_ssl_certificate]] {

}
class gcp_url_map [[#gcp_url_map]] {

}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_project [[#gcp_project]] {

}
gcp_target_grpc_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_target_grpc_proxy -[#1A83AF]-> gcp_url_map
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_grpc_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_grpc_proxy
gcp_project -[#1A83AF]-> gcp_forwarding_rule
gcp_project -[#1A83AF]-> gcp_target_grpc_proxy
gcp_project -[#1A83AF]-> gcp_ssl_certificate

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_target_http_proxy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_http_proxy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_target_http_proxy [[#gcp_target_http_proxy]] {

}
gcp_resource <|--- gcp_target_http_proxy
resource <|--- gcp_target_http_proxy

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_http_proxy resource relationships"
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

class gcp_url_map [[#gcp_url_map]] {

}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_target_http_proxy [[#gcp_target_http_proxy]] {

}
class gcp_region [[#gcp_region]] {

}
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_http_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_http_proxy
gcp_project -[#1A83AF]-> gcp_forwarding_rule
gcp_project -[#1A83AF]-> gcp_target_http_proxy
gcp_project -[#1A83AF]-> gcp_region
gcp_target_http_proxy -[#1A83AF]-> gcp_url_map
gcp_region -[#1A83AF]-> gcp_target_http_proxy
gcp_region -[#1A83AF]-> gcp_url_map
gcp_region -[#1A83AF]-> gcp_forwarding_rule

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_target_https_proxy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_https_proxy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

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
gcp_resource <|--- gcp_target_https_proxy
resource <|--- gcp_target_https_proxy

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_https_proxy resource relationships"
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

class gcp_ssl_policy [[#gcp_ssl_policy]] {

}
class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

}
class gcp_ssl_certificate [[#gcp_ssl_certificate]] {

}
class gcp_url_map [[#gcp_url_map]] {

}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_project [[#gcp_project]] {

}
class gcp_region [[#gcp_region]] {

}
gcp_ssl_policy -[#1A83AF]-> gcp_target_https_proxy
gcp_target_https_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_target_https_proxy -[#1A83AF]-> gcp_url_map
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_https_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_https_proxy
gcp_project -[#1A83AF]-> gcp_forwarding_rule
gcp_project -[#1A83AF]-> gcp_ssl_certificate
gcp_project -[#1A83AF]-> gcp_region
gcp_project -[#1A83AF]-> gcp_target_https_proxy
gcp_region -[#1A83AF]-> gcp_target_https_proxy
gcp_region -[#1A83AF]-> gcp_url_map
gcp_region -[#1A83AF]-> gcp_ssl_certificate
gcp_region -[#1A83AF]-> gcp_forwarding_rule

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_target_instance`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_instance data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_target_instance [[#gcp_target_instance]] {

}
gcp_resource <|--- gcp_target_instance
resource <|--- gcp_target_instance

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_instance resource relationships"
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

class gcp_instance [[#gcp_instance]] {

}
class gcp_target_instance [[#gcp_target_instance]] {

}
gcp_target_instance -[#1A83AF]-> gcp_instance

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_target_pool`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_pool data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_target_pool [[#gcp_target_pool]] {
**session_affinity**: string
**failover_ratio**: double
}
gcp_resource <|--- gcp_target_pool
resource <|--- gcp_target_pool

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_pool resource relationships"
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

class gcp_http_health_check [[#gcp_http_health_check]] {

}
class gcp_https_health_check [[#gcp_https_health_check]] {

}
class gcp_instance [[#gcp_instance]] {

}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_target_pool [[#gcp_target_pool]] {

}
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_pool
gcp_forwarding_rule -[#1A83AF]-> gcp_target_pool
gcp_region -[#1A83AF]-> gcp_target_pool
gcp_region -[#1A83AF]-> gcp_forwarding_rule
gcp_target_pool -[#1A83AF]-> gcp_https_health_check
gcp_target_pool -[#1A83AF]-> gcp_instance
gcp_target_pool -[#1A83AF]-> gcp_http_health_check

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_target_ssl_proxy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_ssl_proxy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_target_ssl_proxy [[#gcp_target_ssl_proxy]] {

}
gcp_resource <|--- gcp_target_ssl_proxy
resource <|--- gcp_target_ssl_proxy

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_ssl_proxy resource relationships"
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

class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_target_ssl_proxy [[#gcp_target_ssl_proxy]] {

}
class gcp_ssl_certificate [[#gcp_ssl_certificate]] {

}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_project [[#gcp_project]] {

}
gcp_target_ssl_proxy -[#1A83AF]-> gcp_ssl_certificate
gcp_target_ssl_proxy -[#1A83AF]-> gcp_backend_service
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_ssl_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_ssl_proxy
gcp_project -[#1A83AF]-> gcp_forwarding_rule
gcp_project -[#1A83AF]-> gcp_ssl_certificate
gcp_project -[#1A83AF]-> gcp_backend_service
gcp_project -[#1A83AF]-> gcp_target_ssl_proxy

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_target_tcp_proxy`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_tcp_proxy data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_target_tcp_proxy [[#gcp_target_tcp_proxy]] {

}
gcp_resource <|--- gcp_target_tcp_proxy
resource <|--- gcp_target_tcp_proxy

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_tcp_proxy resource relationships"
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

class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_target_tcp_proxy [[#gcp_target_tcp_proxy]] {

}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_project [[#gcp_project]] {

}
gcp_target_tcp_proxy -[#1A83AF]-> gcp_backend_service
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_tcp_proxy
gcp_forwarding_rule -[#1A83AF]-> gcp_target_tcp_proxy
gcp_project -[#1A83AF]-> gcp_forwarding_rule
gcp_project -[#1A83AF]-> gcp_backend_service
gcp_project -[#1A83AF]-> gcp_target_tcp_proxy

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_target_vpn_gateway`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_vpn_gateway data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gateway [[#gateway]] {

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
class gcp_target_vpn_gateway [[#gcp_target_vpn_gateway]] {

}
resource <|--- gateway
gcp_resource <|--- gcp_target_vpn_gateway
gateway <|--- gcp_target_vpn_gateway

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_target_vpn_gateway resource relationships"
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

class gcp_network [[#gcp_network]] {

}
class gcp_global_forwarding_rule [[#gcp_global_forwarding_rule]] {

}
class gcp_forwarding_rule [[#gcp_forwarding_rule]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_vpn_tunnel [[#gcp_vpn_tunnel]] {

}
class gcp_target_vpn_gateway [[#gcp_target_vpn_gateway]] {

}
gcp_network -[#1A83AF]-> gcp_target_vpn_gateway
gcp_global_forwarding_rule -[#1A83AF]-> gcp_target_vpn_gateway
gcp_forwarding_rule -[#1A83AF]-> gcp_target_vpn_gateway
gcp_region -[#1A83AF]-> gcp_vpn_tunnel
gcp_region -[#1A83AF]-> gcp_forwarding_rule
gcp_region -[#1A83AF]-> gcp_target_vpn_gateway
gcp_vpn_tunnel -[#1A83AF]-> gcp_target_vpn_gateway

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_url_map`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_url_map data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_url_map [[#gcp_url_map]] {

}
gcp_resource <|--- gcp_url_map
resource <|--- gcp_url_map

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_url_map resource relationships"
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

class gcp_target_https_proxy [[#gcp_target_https_proxy]] {

}
class gcp_backend_service [[#gcp_backend_service]] {

}
class gcp_target_grpc_proxy [[#gcp_target_grpc_proxy]] {

}
class gcp_url_map [[#gcp_url_map]] {

}
class gcp_target_http_proxy [[#gcp_target_http_proxy]] {

}
class gcp_region [[#gcp_region]] {

}
gcp_target_https_proxy -[#1A83AF]-> gcp_url_map
gcp_target_grpc_proxy -[#1A83AF]-> gcp_url_map
gcp_url_map -[#1A83AF]-> gcp_backend_service
gcp_target_http_proxy -[#1A83AF]-> gcp_url_map
gcp_region -[#1A83AF]-> gcp_target_https_proxy
gcp_region -[#1A83AF]-> gcp_target_http_proxy
gcp_region -[#1A83AF]-> gcp_backend_service
gcp_region -[#1A83AF]-> gcp_url_map

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_vpn_gateway`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_vpn_gateway data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
}
class gateway [[#gateway]] {

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
class gcp_vpn_gateway [[#gcp_vpn_gateway]] {

}
resource <|--- gateway
gcp_resource <|--- gcp_vpn_gateway
gateway <|--- gcp_vpn_gateway

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_vpn_gateway resource relationships"
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

class gcp_network [[#gcp_network]] {

}
class gcp_vpn_gateway [[#gcp_vpn_gateway]] {

}
gcp_network -[#1A83AF]-> gcp_vpn_gateway

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_vpn_tunnel`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_vpn_tunnel data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class gcp_vpn_tunnel [[#gcp_vpn_tunnel]] {

}
class tunnel [[#tunnel]] {

}
gcp_resource <|--- gcp_vpn_tunnel
tunnel <|--- gcp_vpn_tunnel
resource <|--- tunnel

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_vpn_tunnel resource relationships"
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

class gcp_region [[#gcp_region]] {

}
class gcp_vpn_tunnel [[#gcp_vpn_tunnel]] {

}
class gcp_target_vpn_gateway [[#gcp_target_vpn_gateway]] {

}
gcp_region -[#1A83AF]-> gcp_vpn_tunnel
gcp_region -[#1A83AF]-> gcp_target_vpn_gateway
gcp_vpn_tunnel -[#1A83AF]-> gcp_target_vpn_gateway

@enduml
```

</ZoomPanPinch>
</div>
</details>

## `gcp_zone`

<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_zone data model"
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

class gcp_resource [[#gcp_resource]] {
**link**: string
**label_fingerprint**: string
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
class zone [[#zone]] {

}
class gcp_zone [[#gcp_zone]] {
**zone_status**: string
}
resource <|--- zone
gcp_resource <|--- gcp_zone
zone <|--- gcp_zone

@enduml
```

</ZoomPanPinch>

<details>
<summary>Relationships to Other Resources</summary>
<div>
<ZoomPanPinch>

```kroki imgType="plantuml" imgTitle="Diagram of gcp_zone resource relationships"
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

class gcp_disk [[#gcp_disk]] {

}
class gcp_instance_group [[#gcp_instance_group]] {

}
class gcp_network_endpoint_group [[#gcp_network_endpoint_group]] {

}
class gcp_instance [[#gcp_instance]] {

}
class gcp_machine_type [[#gcp_machine_type]] {

}
class gcp_disk_type [[#gcp_disk_type]] {

}
class gcp_gke_cluster [[#gcp_gke_cluster]] {

}
class gcp_region [[#gcp_region]] {

}
class gcp_database [[#gcp_database]] {

}
class gcp_autoscaler [[#gcp_autoscaler]] {

}
class gcp_zone [[#gcp_zone]] {

}
class gcp_security_policy [[#gcp_security_policy]] {

}
gcp_instance_group -[#1A83AF]-> gcp_instance
gcp_instance -[#1A83AF]-> gcp_disk
gcp_machine_type -[#1A83AF]-> gcp_instance
gcp_disk_type -[#1A83AF]-> gcp_disk
gcp_region -[#1A83AF]-> gcp_database
gcp_region -[#1A83AF]-> gcp_gke_cluster
gcp_region -[#1A83AF]-> gcp_instance_group
gcp_region -[#1A83AF]-> gcp_disk
gcp_region -[#1A83AF]-> gcp_network_endpoint_group
gcp_region -[#1A83AF]-> gcp_autoscaler
gcp_region -[#1A83AF]-> gcp_disk_type
gcp_region -[#1A83AF]-> gcp_zone
gcp_zone -[#1A83AF]-> gcp_database
gcp_zone -[#1A83AF]-> gcp_instance_group
gcp_zone -[#1A83AF]-> gcp_machine_type
gcp_zone -[#1A83AF]-> gcp_gke_cluster
gcp_zone -[#1A83AF]-> gcp_disk_type
gcp_zone -[#1A83AF]-> gcp_autoscaler
gcp_zone -[#1A83AF]-> gcp_security_policy
gcp_zone -[#1A83AF]-> gcp_network_endpoint_group
gcp_zone -[#1A83AF]-> gcp_disk
gcp_zone -[#1A83AF]-> gcp_instance

@enduml
```

</ZoomPanPinch>
</div>
</details>
