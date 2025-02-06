---
testnet-useIframeVideo: false
testnet-iframeVideoCode: ""
testnet-useBackupLink: false
testnet-backupLink: ""
production-useIframeVideo: false
production-iframeVideoCode: ""
production-useBackupLink: false
production-backupLink: ""
---

# Video Settings

This file contains configuration for video iframe settings used in different environments.

## Available Settings

### Testnet Environment Settings

- **testnet-useIframeVideo**: Toggle to enable/disable iframe video in testnet environment
- **testnet-iframeVideoCode**: HTML iframe code for the video when enabled in testnet. Should contain the complete iframe HTML code from video platforms (YouTube, Google Drive, etc.)
- **testnet-useBackupLink**: When enabled, clicking the button will open a link in a new tab instead of showing the video
- **testnet-backupLink**: URL to open in new tab when backup link mode is enabled for testnet

### Production Environment Settings

- **production-useIframeVideo**: Toggle to enable/disable iframe video in production environment
- **production-iframeVideoCode**: HTML iframe code for the video when enabled in production. Should contain the complete iframe HTML code from video platforms (YouTube, Google Drive, etc.)
- **production-useBackupLink**: When enabled, clicking the button will open a link in a new tab instead of showing the video
- **production-backupLink**: URL to open in new tab when backup link mode is enabled for production

## Usage Notes

1. For each environment (testnet and production), you can choose between showing a video or using a backup link
2. If both video and backup link are enabled for an environment, the backup link takes precedence
3. Video code should be a complete iframe HTML element with all necessary attributes
4. Backup links should be complete URLs including the protocol (http:// or https://)
