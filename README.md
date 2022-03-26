# FruitBasketGames Website

## Dependencies

- Node.js/npm
- Bash (Windows Git Bash works fine)

## Development Setup Instructions

1. Clone repository
2. `npm i`

## Testing Website

From Bash: `npm run run`

## Deploying Website

From Bash: `npm run deploy`

## Special Notes

Written using Parcel, TypeScript, and Preact.

Only urls that are hard-coded into html files will be included with the built files. All other files must be manually copied as part of a post-build step. The npm scripts will automatically clone `src/res/art` and `src/res/special` to `dist`.
