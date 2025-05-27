# Feed Type: `capabilities.llmfeed.json`

## Purpose

This feed lists **live, callable actions** that agents may invoke on behalf of users.  
These capabilities represent exposed **functions**, **API routes**, or **service endpoints**.

Agents use them to understand **what they can do**, and **how to call it** — without guessing.

---

## Location

Recommended path:

```
.well-known/capabilities.llmfeed.json
```

Each capability MUST declare:

- a `name`
- a `method` (GET, POST, etc.)
- a `path`
- a `description`

---

## Canonical Fields

```json
{
  "name": "submitContactForm",
  "method": "POST",
  "path": "/api/contact",
  "description": "Allow a user to request support or callback",
  "input_schema": {
    "required": ["name", "email", "message"]
  }
}
```

---

## 🧩 Optional fields

| Field                   | Description |
|--------------------------|-------------|
| `input_schema`           | Required fields or JSON schema |
| `llm_trust_level_required` | e.g. `"any-agent"`, `"certified-only"` |
| `rate_limit`             | e.g. `5/min` |
| `requires_user_consent`  | `true` or `false` |
| `audience`               | e.g. `["llm"]`, `["developer"]` |
| `tags`                   | Classifier keywords |

---

## 🧠 Agent behaviour

Agents must:

- Only call capabilities they understand and are permitted to
- Confirm if `requires_user_consent = true`
- Validate `input_schema` before submitting
- Adjust prompts or voice output based on `description`

---

## ✅ Optional Capabilities (Suggested)

These are not mandatory, but recommended to boost interoperability and real-world usefulness.

### 🤝 Support & Interaction

| Name                | Path        | Description |
|---------------------|-------------|-------------|
| `requestCallback`   | `/callback` | Request a human to call back the user |
| `submitContactForm` | `/contact`  | Submit a message or inquiry |
| `bookAppointment`   | `/book`     | Book a meeting or service |
| `getSupportAvailability` | `/support-status` | Return human presence availability |

---

### 🌍 Localisation & Language

| Name                   | Path        | Description |
|------------------------|-------------|-------------|
| `getRegionsServed`     | `/regions`  | Return ISO regions supported |
| `getLanguagesSupported`| `/languages`| Return languages agents can use |

---

### 📦 Logistics & Reservations

| Name                | Path           | Description |
|---------------------|----------------|-------------|
| `trackDelivery`     | `/track`       | Track a parcel or service ETA |
| `getETA`            | `/eta`         | Estimate arrival time |
| `cancelReservation` | `/cancel`      | Cancel a user reservation |

---

### 🔐 Consent & Compliance

| Name                      | Path         | Description |
|---------------------------|--------------|-------------|
| `downloadPersonalData`    | `/gdpr/export`| User can access their data |
| `submitConsentForm`       | `/consent`    | Required consent prior to action |
| `getWrapperAuditTrail`    | `/audit`      | Show trace of agent actions (transparent AI) |

---

## 📎 Related

- [`llmfeed.md`](./llmfeed.md)
- [`agent-behaviour.md`](./agent-behaviour.md)
- [`agent-guidance.md`](./agent-guidance.md)

---

## 🧠 OpenAPI Compatibility

While the `capabilities.llmfeed.json` feed type is designed to offer a simple, high-level view for agents and LLMs, it may optionally reference a complete OpenAPI file for technical documentation.

This allows agents to:
- detect the service intent via `capabilities[].intent`
- consult precise calling schemas via the OpenAPI spec

### Example combination:

```json
{
  "feed_type": "capabilities",
  "metadata": { "title": "France-Care Capabilities" },
  "capabilities": [
    {
      "type": "endpoint",
      "intent": "check subscriber status",
      "url": "https://api.france-care.fr/abonnement",
      "description": "Returns current user subscription level"
    },
    {
      "type": "openapi",
      "url": "https://france-care.fr/.well-known/openapi.json",
      "description": "Detailed OpenAPI specification for this backend"
    }
  ]
}
```

MCP and OpenAPI are **complementary**:
- MCP provides context, trust, and intent.
- OpenAPI provides detailed function contracts.
