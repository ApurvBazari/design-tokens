# design-tokens

A monorepo for managing design tokens in JSON format and generating platform-specific outputs for web, Android, and iOS using Style Dictionary.

## Structure
- `src/tokens.json`: Source design tokens in JSON format
- `src/scripts/build-tokens.ts`: Script to build tokens for all platforms
- `packages/web/`, `packages/android/`, `packages/iOS/`: Output folders for each platform

## Scripts
- `npm run build`: Build tokens for all platforms

## CI/CD
- **GitHub Actions**: Builds tokens on push to `develop` branch
- **Jenkins**: Releases tokens on push to `main` branch

## Getting Started
1. Install dependencies: `npm install`
2. Build tokens: `npx ts-node src/scripts/build-tokens.ts`
