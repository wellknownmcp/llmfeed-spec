# LLMFeed – Blocks Reference (v1.0)

This document lists and defines the canonical top-level blocks and common nested fields used in `.llmfeed.json` files under the wellknownmcp.org specification.

---

## ✅ Required Blocks

| Block           | Type   | Description                           |
| --------------- | ------ | ------------------------------------- |
| `origin`        | string | Canonical source URL                  |
| `signed_blocks` | array  | Top-level fields covered by signature |
| `signature`     | object | Signature metadata                    |

---

## 📦 Optional Top-Level Blocks

### `data`

Free-form content.

| Field              | Type            | Description                           |
| ------------------ | --------------- | ------------------------------------- |
| `type`             | string          | Type label (e.g. "article")           |
| `title`            | string          | Optional heading                      |
| `content`          | string          | Markdown or plain text                |
| `tags`             | array           | List of keywords                      |
| `scope`            | string or array | Interpretive context (e.g. "fiction") |
| `trust_critical`   | boolean         | Prevent rephrasing by LLM             |
| `llm_transparency` | boolean or 1    | Indicates AI-generated content        |

---

### `mcp_metadata`

Used to expose site-level interaction metadata.

| Field               | Type    | Description               |
| ------------------- | ------- | ------------------------- |
| `mcp_enabled`       | boolean | If MCP is declared active |
| `mcp_endpoint`      | string  | URL for MCP interaction   |
| `mcp_capabilities`  | array   | List of supported actions |
| `client_config_url` | string  | Optional client preload   |

---

### `agent_services`

Define a structured way for agents to interact with human services.

| Field                | Type    | Description                         |
| -------------------- | ------- | ----------------------------------- |
| `keywords`           | array   | Matchable triggers                  |
| `intent_description` | string  | Plaintext purpose                   |
| `action_endpoint`    | string  | POST target for the service         |
| `user_info_fields`   | array   | Fields to gather (e.g. name, phone) |
| `requires_consent`   | boolean | Prompt user first                   |

---

### `booking_slots`

Offer structured booking access.

| Field              | Type   | Description                |
| ------------------ | ------ | -------------------------- |
| `endpoint`         | string | Booking submission URL     |
| `available_hours`  | array  | ISO timestamp slots        |
| `duration_minutes` | number | Optional duration per slot |
| `fields_required`  | array  | Info to collect from user  |

---

### `regional_presence`

Declare service coverage and support scope.

| Field       | Type    | Description                         |
| ----------- | ------- | ----------------------------------- |
| `region`    | string  | ISO 3166-1 code                     |
| `languages` | array   | Supported ISO 639-1 codes           |
| `office`    | boolean | Whether there's a physical location |
| `support`   | object  | Support availability and contact    |
| `note`      | string  | Optional human note                 |

---

### `api` (v1.0 only)

Auth handshake declaration.

| Field              | Type    | Description                            |
| ------------------ | ------- | -------------------------------------- |
| `auth_required`    | boolean | Must the user provide a key?           |
| `auth_url`         | string  | Where to get that key                  |
| `dynamic_feed_url` | string  | URL template with `{KEY}` substitution |

---

> This reference may be updated independently of the core spec as long as no breaking logic is introduced.

For proposals, contact: [spec@wellknownmcp.org](mailto:spec@wellknownmcp.org)
