---
# 📄 Basic metadata
title: "LLMFeed Signature & Certification — Extended Specification (V2)"
description: "Complete specification for LLMFeed cryptographic signatures and certification ecosystem"
date: "2025-06-12T15:00:00.000Z"
lang: "en"

# 🏷️ Tags and classification
tags:
  - "mcp"
  - "ai-agents"
  - "cryptographic-signatures"
  - "semantic-integrity"
  - "trust-network"
  - "certification"
format: "documentation"
category: "technical"
contentType: "specification"

# 🧠 Intent and audience  
intent: "inform"
llmIntent: "browse-spec"
llmTopic: "specification"
audience:
  - "llm"
  - "developer"
  - "business-owner"

# 📊 Page properties
pageType: "documentation"
interactionComplexity: "advanced"
priority: "high"
riskLevel: "low"
updateFrequency: "living"

# 🔗 URLs
slug: "llmfeed_extensions_signatures"
canonical_url: "https://wellknownmcp.org/spec/03_llmfeed_extensions/llmfeed_extensions_signatures"
githubUrl: "https://github.com/wellknownmcp/llmfeed-spec/blob/main/03_llmfeed_extensions/llmfeed_extensions_signatures.md"
mcpFeedUrl: "/.well-known/mcp.llmfeed.json"

# 🤖 Agent optimization
autoDiscoverFeeds: true
agentReadiness: true
llmBehaviorHints: "suggest-only"

# 📋 Capabilities
capabilities:
  - "signature"
  - "verification"
  - "certification"
  - "feed-generation"
  - "trust-validation"
---

# 🔐 LLMFeed Signature & Certification — Extended Specification (V2)

This document defines how `.llmfeed.json` feeds are signed, verified, and certified using asymmetric cryptography and trust blocks.

**🚀 Key Innovation**: LLMFeed signatures protect both **data integrity** and **semantic intention integrity** — ensuring LLMs experience feeds exactly as authors intended.

---

## ✅ Summary

| Concept | Description |
|---------|-------------|
| `trust` block | Declares what is signed and by whom |
| `signature` | Contains the cryptographic proof |
| `certification` | Optional third-party endorsement |
| `signed_blocks` | List of blocks covered — order preserved |
| **Semantic Integrity** | **Key order preservation for LLM behavior protection** |
| **Delegated Signing** | **LLMCA services for friction-free adoption** |

---

## 🧠 LLM-Specific Canonicalization (Core Innovation)

### Why LLMFeed canonicalization is revolutionary

Unlike traditional JSON canonicalization (which sorts keys for data integrity), LLMFeed canonicalization **preserves key order** to protect **semantic intention**.

#### The Problem: LLMs Process Order Semantically

```json
// Version A: Author's intended experience
{
  "priority": "high",        ← LLM processes this first, sets context
  "task": "delete files",
  "safety_check": "required" ← Safety becomes secondary consideration
}

// Version B: Reordered (same data, different LLM behavior)
{
  "safety_check": "required", ← LLM focuses on safety first
  "task": "delete files",     ← Task processed with safety context
  "priority": "high"
}
```

**Same JSON data → Different LLM interpretation → Different user outcomes**

### The LLMFeed Solution: Semantic Intention Integrity

**Official LLMFeed/MCP Canonicalization** (`https://llmca.org/mcp-canonical-json/v1`):

```python
# ✅ CORRECT: Preserves author's intended key order
def llmfeed_canonicalize(data):
    return json.dumps(
        data, 
        separators=(',', ':'), 
        ensure_ascii=False
    ).encode('utf-8')

# ❌ WRONG: Traditional crypto approach (allows semantic manipulation)
def traditional_canonicalize(data):
    return json.dumps(
        data, 
        separators=(',', ':'), 
        sort_keys=True,  # ← This breaks LLM semantic integrity
        ensure_ascii=False
    ).encode('utf-8')
```

### Security Model Evolution

| Approach | Protects | Allows | Use Case |
|----------|----------|--------|----------|
| **Traditional Crypto** | Data integrity | Key reordering | Generic data verification |
| **LLMFeed Crypto** | Data + Semantic integrity | Nothing that changes LLM behavior | **Agentic systems** |

**LLMFeed signatures protect**:
- ✅ **Data integrity** (standard cryptographic guarantee)
- ✅ **Semantic intention integrity** (LLMFeed innovation)
- ✅ **Author's intended LLM behavior patterns**
- ✅ **User experience as designed**

**Any reordering invalidates the signature**, preventing:
- 🚫 Manipulation of LLM attention/focus patterns
- 🚫 Semantic attacks through key reordering
- 🚫 Degradation of author's intended user experience
- 🚫 Post-signature behavior modification

---

## 🧱 Trust Block Structure

The `trust` block contains **all signature parameters** and is **itself signed** to prevent tampering:

```json
"trust": {
  "signed_blocks": ["metadata", "capabilities", "trust"],
  "algorithm": "ed25519",
  "canonicalization": "https://llmca.org/mcp-canonical-json/v1",
  "public_key_hint": "https://example.org/.well-known/public.pem",
  "created_at": "2025-06-12T15:00:00Z"
}
```

### Field Definitions

- **`signed_blocks`**: Array of top-level blocks covered by signature (order preserved)
- **`algorithm`**: Cryptographic algorithm (recommended: `ed25519`)
- **`canonicalization`**: URL identifier for canonicalization method (not an endpoint!)
- **`public_key_hint`**: URL where verification public key can be found
- **`created_at`**: ISO 8601 timestamp of signature creation

### Critical Design Principle

**All signature parameters are in `trust` (signed), not `signature` (unsigned)**. This prevents attackers from changing verification parameters without invalidating the signature.

---

## 🧾 Signature Block Structure

The `signature` block is **minimalist by design**:

```json
"signature": {
  "value": "base64-encoded-ed25519-signature"
}
```

**Why minimalist?** All parameters needed for verification are in the signed `trust` block, preventing parameter tampering attacks.

### Signature Generation Process

```python
def sign_llmfeed(feed_data, private_key, signed_blocks):
    # 1. Extract only signed blocks, preserving order
    partial = {block: feed_data[block] for block in signed_blocks if block in feed_data}
    
    # 2. Apply LLMFeed canonicalization (NO sort_keys!)
    payload_bytes = json.dumps(
        partial, 
        separators=(',', ':'), 
        ensure_ascii=False
    ).encode('utf-8')
    
    # 3. Sign with Ed25519
    signature_bytes = private_key.sign(payload_bytes)
    
    # 4. Encode signature
    return base64.b64encode(signature_bytes).decode('utf-8')
```

---

## 🪪 Certification: Building the Agentic Trust Network

### Why Certification Transforms the Ecosystem

**Signatures prove authenticity + integrity. Certifications prove trustworthiness.**

While anyone can sign a feed, **certification establishes reputation** in the agentic economy:

```
Author Signs → "This content is mine AND unchanged since signing"
Certifier Signs → "This content/author is trustworthy" 
Agent Decides → "I can act on this with confidence"
```

### Real-World Certification Impact

| Scenario | Author | Certifier | Agent Benefit |
|----------|--------|-----------|---------------|
| **Enterprise API** | Stripe | LLMCA.org | Agents trust payment processing |
| **Medical Information** | Hospital | Medical Board | Agents verify health data accuracy |
| **Financial Data** | Bank | Regulatory Authority | Agents confirm financial compliance |
| **Code Repository** | Developer | GitHub Verified | Agents trust code execution |
| **News Content** | Journalist | News Organization | Agents verify information quality |

---

## 🔗 Certification Models & Trust Chains

### Model 1: Content Certification (Same signed_blocks)

```json
"certification": {
  "certifier": "https://llmca.org",
  "targets": ["metadata", "capabilities", "trust"],  // Same as signed_blocks
  "model": "content_vouching",
  "verification_details": {
    "content_reviewed": true,
    "compliance_checked": ["gdpr", "ccpa"],
    "security_audited": true
  },
  "value": "base64-certifier-signature-of-same-payload",
  "issued_at": "2025-06-12T15:00:00Z",
  "expires_at": "2026-06-12T15:00:00Z"
}
```

**Technical**: Certifier signs the exact same canonical payload as the author  
**Meaning**: "We independently vouch for this specific content"  
**Use Case**: Content mirroring, archive validation, compliance attestation

### Model 2: Signature Certification (Recommended)

```json
"certification": {
  "certifier": "https://llmca.org",
  "targets": ["signature"],  // Certifies the signature hash
  "model": "identity_validation",
  "identity_verified": "stripe.com",
  "verification_level": "enterprise",
  "verification_details": {
    "domain_control": "verified",
    "business_registration": "verified", 
    "key_management": "audited"
  },
  "signature_hash": "sha256-of-signature-value",
  "value": "base64-certifier-signature-of-signature-hash",
  "issued_at": "2025-06-12T15:00:00Z",
  "expires_at": "2026-06-12T15:00:00Z"
}
```

**Technical**: Certifier signs the SHA-256 hash of the author's signature  
**Meaning**: "We verify the identity of the signer AND validate their signature process"  
**Use Case**: Identity validation, preferred model for scalable trust

### Model 3: Delegated Certification (Ecosystem Scale)

```json
"certification": {
  "certifier": "https://github.com",
  "delegates_to": "https://llmca.org",
  "targets": ["signature"],
  "verification_method": "github_verified_organization",
  "delegation_policy": "technical_compliance_only",
  "value": "base64-delegated-certification",
  "chain_depth": 2,
  "issued_at": "2025-06-12T15:00:00Z",
  "expires_at": "2026-06-12T15:00:00Z"
}
```

### Why Signature Certification is Preferred

| Aspect | Content Certification | Signature Certification |
|--------|----------------------|-------------------------|
| **Certifier Responsibility** | ❌ Must validate all content semantics | ✅ Focus on identity & process validation |
| **Content Updates** | ❌ Re-certification required | ✅ Certification survives content updates |
| **Scalability** | ❌ Limited by content review capacity | ✅ Scales with identity verification |
| **Separation of Concerns** | ❌ Mixed content & identity validation | ✅ Authors own content, Certifiers validate identity |

---

## 🔄 Certification Lifecycle

### Phase 1: Certification Request

```typescript
// Author requests certification
POST https://llmca.org/api/certify
{
  "feed_url": "https://stripe.com/.well-known/mcp.llmfeed.json",
  "identity_proofs": {
    "domain_control": "dns_txt_record",
    "business_verification": "duns_number",
    "key_ownership": "challenge_response"
  },
  "certification_type": "signature_certification"
}
```

### Phase 2: Verification Process

**Identity Verification**:
- DNS control validation
- Business registration verification  
- Domain ownership confirmation
- Key management audit

**Technical Validation**:
- Feed structure compliance
- Signature correctness
- Canonicalization adherence
- Security best practices

**Reputation Assessment**:
- Historical behavior analysis
- Community standing review
- Compliance track record

### Phase 3: Certification Issuance

```json
"certification": {
  "certifier": "https://llmca.org",
  "cert_id": "cert_stripe_2025_enterprise_001",
  "verification_details": {
    "identity_verified": "stripe.com",
    "verification_date": "2025-06-12T15:00:00Z",
    "verification_methods": ["dns_control", "business_registration", "duns_verification"],
    "compliance_level": "enterprise",
    "security_audit": "passed",
    "reputation_score": 0.98
  },
  "targets": ["signature"],
  "signature_hash": "sha256-abc123...",
  "value": "base64-certification-signature",
  "issued_at": "2025-06-12T15:00:00Z",
  "expires_at": "2026-06-12T15:00:00Z",
  "renewable": true
}
```

### Phase 4: Monitoring & Renewal

- **Continuous monitoring** of certified feeds for policy compliance
- **Automatic renewal** for organizations maintaining compliance
- **Immediate revocation** for policy violations or security breaches
- **Appeals process** for disputed revocations

---

## 🚨 Revocation & Trust Management

### Revocation Mechanisms

**1. Certificate Revocation List (CRL)**
```
https://llmca.org/.well-known/revoked-certifications.json
```

**2. Online Certificate Status Protocol (OCSP)**
```
https://llmca.org/api/ocsp/{cert_id}
→ {"status": "valid|revoked|expired", "timestamp": "..."}
```

**3. Feed-Level Revocation Notification**
```json
"certification": {
  "status": "revoked",
  "revoked_at": "2025-06-15T10:00:00Z",
  "reason": "policy_violation",
  "details": "Automated systems detected content policy violation"
}
```

### Agent Verification Workflow

```python
def verify_certification(feed):
    cert = feed.get('certification')
    if not cert:
        return {"status": "uncertified", "trust_level": "basic"}
    
    # 1. Check expiration
    if datetime.now() > cert['expires_at']:
        return {"status": "expired", "trust_level": "degraded"}
    
    # 2. Check revocation (with caching)
    revocation_status = check_revocation_with_cache(cert['cert_id'])
    if revocation_status == "revoked":
        return {"status": "revoked", "trust_level": "none"}
    
    # 3. Verify certifier signature
    if not verify_certifier_signature(cert):
        return {"status": "invalid_certification", "trust_level": "none"}
    
    # 4. Validate certification chain
    chain_valid = verify_certification_chain(cert['certifier'])
    if not chain_valid:
        return {"status": "untrusted_certifier", "trust_level": "degraded"}
    
    # 5. Compute trust score
    trust_score = compute_trust_score(cert)
    
    return {
        "status": "valid", 
        "trust_level": "certified",
        "trust_score": trust_score,
        "certifier": cert['certifier']
    }
```

---

## 🏛️ Certifier Ecosystem & Governance

### Certified Certifiers Registry

**Tier 1 - Root Certifiers** (Infrastructure Trust)
- **LLMCA.org**: Technical standards, protocol compliance
- **Domain Registrars**: Domain ownership, DNS control
- **Government Agencies**: Regulatory compliance, legal status

**Tier 2 - Domain Specialists** (Sector Trust)
- **Medical Boards**: Healthcare information accuracy
- **Financial Regulators**: Financial data compliance
- **Industry Associations**: Sector-specific standards

**Tier 3 - Platform Certifiers** (Community Trust)
- **GitHub**: Developer identity, code repository trust
- **App Stores**: Mobile application verification
- **Corporate Systems**: Internal employee/service verification

### Certifier Policy Feed

Each certifier MUST expose a machine-readable policy at:
```
/.well-known/certifier-policy.llmfeed.json
```

**Complete Policy Example**:
```json
{
  "feed_type": "certifier-policy",
  "metadata": {
    "title": "LLMCA Certification Authority Policy",
    "description": "Official certification policy for LLMFeed feeds",
    "version": "2.1.0",
    "last_updated": "2025-06-12T15:00:00Z"
  },
  "certifier": "https://llmca.org",
  "certification_policy": {
    "validity_period": {
      "days": 365,
      "max_renewals": 10,
      "renewal_window_days": 30
    },
    "accepted_algorithms": ["ed25519"],
    "canonicalization_methods": ["https://llmca.org/mcp-canonical-json/v1"],
    "verification_requirements": {
      "identity": {
        "required_methods": ["domain_control", "business_registration"],
        "optional_methods": ["duns_verification", "manual_review"],
        "minimum_confidence_score": 0.85
      },
      "content": {
        "must_include_blocks": ["metadata", "trust"],
        "prohibited_content": ["malware", "spam", "illegal_content"],
        "compliance_frameworks": ["gdpr", "ccpa", "iso27001"]
      },
      "technical": {
        "minimum_key_strength": "ed25519-256",
        "signature_freshness_max_days": 90,
        "must_be_signed_by": "verified_feed_owner"
      }
    },
    "monitoring": {
      "continuous_validation": true,
      "violation_response_time_hours": 24,
      "automated_revocation": true,
      "appeal_process_url": "https://llmca.org/appeals"
    }
  },
  "pricing": {
    "individual": {"cost": "free", "limits": "5 feeds/month"},
    "organization": {"cost": "$100/year", "limits": "unlimited"},
    "enterprise": {"cost": "custom", "sla": "99.9% uptime"}
  },
  "contact": {
    "support": "support@llmca.org",
    "appeals": "appeals@llmca.org",
    "security": "security@llmca.org"
  },
  "trust": {
    "signed_blocks": ["certifier-policy", "trust"],
    "algorithm": "ed25519",
    "canonicalization": "https://llmca.org/mcp-canonical-json/v1",
    "public_key_hint": "https://llmca.org/.well-known/public.pem",
    "created_at": "2025-06-12T15:00:00Z"
  },
  "signature": {
    "value": "base64-encoded-signature"
  }
}
```

---

## 🎯 Business Value & Economic Impact

### Value for Feed Authors

**Increased Agent Adoption**
- Certified feeds receive higher trust scores from agents
- Premium placement in agent marketplace discovery
- Reduced liability through certifier risk sharing

**Market Differentiation**
- "Certified by LLMCA" badge for marketing
- Competitive advantage in agentic economy
- Professional credibility establishment

**Operational Benefits**
- Simplified compliance (certifier validates)
- Automated trust network participation
- Reduced manual verification requests

### Value for AI Agents

**Risk Reduction**
- Confident decision-making with verified sources
- Reduced false positive/negative rates
- Liability protection through certification chain

**Regulatory Compliance**
- Meet industry standards through certified sources
- Automated compliance reporting
- Audit trail for decisions

**User Experience**
- Provide users with verifiable information sources
- Transparent trust indicators
- Reduced "hallucination" risk through verified data

### Value for Certifiers

**Revenue Opportunities**
- Certification as a Service (CaaS) business model
- Tiered pricing for different trust levels
- Premium services for enterprise clients

**Market Position**
- Become trusted authority in specific domains
- Network effects: more certifications = more value
- Platform lock-in through trust relationships

**Ecosystem Influence**
- Shape standards in emerging agentic economy
- Build valuable intellectual property
- Create barrier to entry for competitors

---

## 🧠 Agent Behavior Guidelines

### Trust Level Decision Matrix

| Signature Status | Certification Status | Agent Behavior | Trust Level |
|------------------|---------------------|----------------|-------------|
| ✅ Valid | ✅ Valid Certification | Full trust, autonomous action allowed | **High** |
| ✅ Valid | ⚠️ Expired Certification | Accept with warning, limited autonomy | **Medium** |
| ✅ Valid | ❌ Revoked Certification | Reject or heavy scrutiny required | **Low** |
| ✅ Valid | ➖ No Certification | Accept with caution, user confirmation | **Basic** |
| ❌ Invalid | ➖ Any | Reject completely | **None** |
| ❌ Missing | ➖ Any | Warn user, degrade trust significantly | **Minimal** |

### Implementation Guidelines

```python
def compute_agent_trust_score(feed):
    base_score = 0.0
    
    # Signature validation (required)
    if verify_signature(feed):
        base_score += 0.5
    else:
        return 0.0  # Invalid signature = zero trust
    
    # Certification validation (optional)
    cert_result = verify_certification(feed)
    if cert_result["status"] == "valid":
        base_score += 0.4
        # Bonus for high-reputation certifiers
        if cert_result["certifier"] in TIER_1_CERTIFIERS:
            base_score += 0.1
    
    # Freshness bonus
    signature_age_days = get_signature_age_days(feed)
    if signature_age_days < 30:
        base_score += 0.05
    elif signature_age_days > 365:
        base_score -= 0.1
    
    # Canonical structure compliance
    if verify_canonical_structure(feed):
        base_score += 0.05
    
    return min(1.0, max(0.0, base_score))
```

---

## 🔧 Implementation Best Practices

### Multi-Certification Scenarios

```json
"certifications": [
  {
    "certifier": "https://llmca.org",
    "scope": "technical_compliance",
    "targets": ["signature"],
    "trust_level": "infrastructure"
  },
  {
    "certifier": "https://medical-board.org", 
    "scope": "medical_accuracy",
    "targets": ["metadata", "content"],
    "trust_level": "domain_expert"
  },
  {
    "certifier": "https://enterprise-corp.com",
    "scope": "internal_approval", 
    "targets": ["signature"],
    "trust_level": "organizational"
  }
]
```

### Certification Inheritance

```json
"certification": {
  "inherited_from": "https://parent-org.com/.well-known/mcp.llmfeed.json",
  "inheritance_policy": "technical_certification_only",
  "inheritance_depth": 1,
  "additional_certifications": [
    {
      "certifier": "https://domain-specialist.org",
      "scope": "content_specific"
    }
  ]
}
```

### Performance Optimization

**Certificate Caching Strategy**:
```python
# Cache certifier public keys and policies
CERTIFIER_CACHE = {
    "https://llmca.org": {
        "public_key": "...",
        "policy": {...},
        "cached_at": "2025-06-12T15:00:00Z",
        "ttl": 86400  # 24 hours
    }
}

# Batch verification for multiple feeds
def batch_verify_certifications(feeds):
    # Group by certifier for efficient verification
    # Validate revocation lists once per certifier
    # Return aggregate trust scores
```

**Trust Score Caching**:
```python
# Cache computed trust scores with appropriate TTL
TRUST_CACHE = {
    "feed_hash": {
        "score": 0.95,
        "computed_at": "2025-06-12T15:00:00Z",
        "ttl": 3600  # 1 hour for high-trust feeds
    }
}
```

---

## ✅ Complete Reference Implementation

### Minimal Valid Signed Feed

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "Example Service",
    "description": "Demonstration of LLMFeed signatures"
  },
  "capabilities": [
    {
      "path": "/api/example",
      "method": "GET",
      "description": "Example capability"
    }
  ],
  "trust": {
    "signed_blocks": ["metadata", "capabilities", "trust"],
    "algorithm": "ed25519",
    "canonicalization": "https://llmca.org/mcp-canonical-json/v1",
    "public_key_hint": "https://example.com/.well-known/public.pem",
    "created_at": "2025-06-12T15:00:00Z"
  },
  "signature": {
    "value": "base64-encoded-ed25519-signature"
  }
}
```

### Enterprise Certified Feed

```json
{
  "feed_type": "mcp",
  "metadata": {
    "title": "Stripe Payment API",
    "description": "Production payment processing capabilities",
    "version": "2024.1",
    "author": "Stripe, Inc."
  },
  "capabilities": [
    {
      "path": "/v1/charges",
      "method": "POST", 
      "description": "Create payment charge",
      "security_level": "enterprise"
    }
  ],
  "trust": {
    "signed_blocks": ["metadata", "capabilities", "trust"],
    "algorithm": "ed25519",
    "canonicalization": "https://llmca.org/mcp-canonical-json/v1",
    "public_key_hint": "https://stripe.com/.well-known/public.pem",
    "created_at": "2025-06-12T15:00:00Z"
  },
  "signature": {
    "value": "stripe-signature-base64"
  },
  "certification": {
    "certifier": "https://llmca.org",
    "cert_id": "cert_stripe_2025_enterprise_001",
    "targets": ["signature"],
    "model": "identity_validation",
    "identity_verified": "stripe.com",
    "verification_level": "enterprise",
    "verification_details": {
      "domain_control": "verified_2025-06-01",
      "business_registration": "verified_delaware_corp",
      "security_audit": "passed_2025-05-15",
      "compliance": ["pci_dss", "gdpr", "ccpa"]
    },
    "signature_hash": "sha256-stripe-signature-hash",
    "value": "llmca-certification-signature-base64",
    "issued_at": "2025-06-12T15:00:00Z",
    "expires_at": "2026-06-12T15:00:00Z"
  }
}
```

---

## 🚀 Future Evolution & Ecosystem Vision

### Decentralized Trust Networks

**Long-term Vision**: Evolution from centralized certification authorities to **decentralized trust networks**:

```json
"trust_network": {
  "network_id": "web3_agentic_trust",
  "consensus_model": "proof_of_reputation",
  "validators": [
    "https://llmca.org",
    "https://github.com", 
    "https://mozilla.org"
  ],
  "trust_score": 0.94,
  "network_governance": "dao_based",
  "reputation_algorithm": "page_rank_variant"
}
```

**Key Features**:
- Communities establish their own certification criteria
- Agents choose preferred trust networks
- Cross-certification creates resilient trust webs  
- Reputation becomes algorithmic and measurable
- Reduced single points of failure

### Emerging Standards Integration

- **W3C DID integration** for decentralized identity
- **Blockchain anchoring** for immutable audit trails
- **Zero-knowledge proofs** for privacy-preserving verification
- **AI-powered reputation scoring** based on behavior patterns

---

## 📝 Note: LLMCA Delegated Signing Services

**LLMCA.org** provides delegated signing services to eliminate friction while maintaining security and transparency. The `/sign` service enables organizations to deploy signed feeds **without managing cryptographic infrastructure**.

### Service Philosophy

**"User must see what they sign"** - Complete transparency with no black-box operations:

1. **Prepare**: User uploads feed, system adds trust block with proper parameters
2. **Review**: User sees complete prepared feed before signing
3. **Sign**: System signs only the explicitly approved content  
4. **Verify**: Immediate signature validation with downloadable result

### Technical Implementation

```typescript
// Simplified workflow
const workflow = {
  prepare: async (feed, identity_hint) => {
    // Inject trust block with LLMCA key hint
    return prepareDelegatedFeed(feed, identity_hint)
  },
  
  sign: async (prepared_feed, key_type) => {
    // key_type: 'editor' | 'authority' | 'certifier'
    return signWithLLMCAKey(prepared_feed, key_type)
  },
  
  verify: async (signed_feed) => {
    // Immediate validation of generated signature
    return verifySignature(signed_feed)
  }
}
```

### Benefits for Ecosystem Adoption

**For Authors**:
- ✅ No key management complexity
- ✅ Immediate signing capability  
- ✅ Full transparency and auditability
- ✅ Professional-grade infrastructure

**For Agents**:
- ✅ Consistent, reliable signature format
- ✅ Known, trusted key infrastructure
- ✅ Reduced verification complexity

**For Ecosystem**:
- ✅ Accelerated adoption through reduced friction
- ✅ Consistent implementation of best practices
- ✅ Bridge to eventual self-hosted signing

*For detailed implementation, see LLMCA's `/sign` API documentation, `useSignFeed` React hooks, and `prepareDelegatedFeed` utilities.*

---

## 🔐 Key Management Best Practices

### Hosting Public Keys

**Recommended path for self-hosted keys**:
```
https://yoursite.org/.well-known/public.pem
```

**Standard Ed25519 PEM format**:
```
-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEA...
-----END PUBLIC KEY-----
```

### Key Rotation Strategy

```json
"trust": {
  "public_key_hint": "https://example.com/.well-known/public-2025.pem",
  "key_rotation_policy": {
    "rotation_frequency": "annual",
    "previous_key": "https://example.com/.well-known/public-2024.pem",
    "overlap_period_days": 90
  }
}
```

---

## 🧩 Related Specifications

- **[LLMFeed Core](../01_llmfeed/llmfeed.md)** - Base LLMFeed specification
- **[MCP Canonical JSON v1](https://llmca.org/mcp-canonical-json/v1)** - Official canonicalization algorithm
- **[Agent Behavior](../04_agent_behavior/)** - Agent behavior specifications  
- **[Verification Tools](https://wellknownmcp.org/verify)** - Online signature verification
- **[MCP Feed Type](../02_llmfeed_feedtype/llmfeed_feedtype_mcp.md)** - MCP-specific feed structure

---

## 📚 Implementation Resources

### Official Tools
- **`sign_feed.py`** - Reference signing implementation *(Available now)*
- **`verify_signature.py`** - Reference verification implementation *(Available now)*
- **LLMCA `/sign` service** - Delegated signing for production use *(Beta)*
- **Online verification** - https://llmca.org/verify *(Available now)*

### Libraries & SDKs
- **Reference Python implementation** - Available in `/scripts` directory
- **JavaScript/TypeScript SDK** - *In development, Q2 2025*
- **Production Python library** - *Planned Q3 2025*
- **Additional language bindings** - *Community contributions welcome*

### Community & Documentation
- **GitHub**: https://github.com/wellknownmcp/llmfeed-spec *(Active)*
- **Specification docs**: https://wellknownmcp.org/spec *(Live)*
- **LLMCA API docs**: https://docs.llmca.org *(Beta)*
- **Community forum** - *Coming soon*

---

**Specification Status**: Living Document  
**Last Updated**: 2025-06-12T15:00:00Z  
**Version**: V2.1  
**Maintained by**: LLMCA.org & LLMFeed Community

---

*© 2025 LLMCA.org - Licensed under Creative Commons Attribution 4.0 International*