# Feed Type: `mobile-app`

This feed declares how a mobile application (iOS/Android) can be discovered and interpreted by agents.

## Purpose

To bridge mobile app capabilities with conversational or autonomous agents:

- Understand what the app allows via prompts and intents
- Know where to download it (store links)
- Optionally call APIs if a key is granted
- Enable vocal or chat-based control of app-like behavior

## Minimal Structure

```json
{
  "feed_type": "mobile-app",
  "metadata": {
    "title": "HealthSync App",
    "platform": "android",
    "app_id": "com.healthsync.app",
    "origin": "https://healthsync.example.com"
  },
  "prompts": [
    {
      "intent": "view-health",
      "description": "Show health overview"
    }
  ],
  "capabilities": [
    {
      "path": "/api/user/data",
      "method": "GET",
      "description": "Retrieve user health data"
    }
  ],
  "trust": {
    "signed_blocks": ["metadata", "prompts", "capabilities"],
    "trust_level": "declared"
  }
}
```
