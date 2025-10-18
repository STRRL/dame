# dame

A Chrome browser extension for time-based behavior alignment and focusing.

## Overview

dame is a productivity tool designed to help you stay focused by blocking distracting websites during work periods. It uses a time-based approach similar to the Pomodoro Technique, allowing access to certain websites only during designated break times.

## How It Works

The extension monitors your browsing and applies the following rules:

- **Blocked Sites**: Twitter and YouTube
- **Break Times**: You can access these sites during:
  - Minutes 25-30 of each hour
  - Minutes 55-60 of each hour
- **Block Mechanism**: During non-break times, a full-screen overlay appears when you try to access blocked sites, preventing distraction

The extension runs a check every second to determine whether to show the blocking overlay based on the current time.

## Installation

### From Source

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run build
   ```
4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` directory from this project

## Development

### Prerequisites

- Node.js
- npm

### Setup

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Tech Stack

- **Frontend Framework**: Vue 3 with `<script setup>` SFCs
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Extension**: Chrome Extension Manifest V3

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Author

dame@strrl.dev

## License

Private
