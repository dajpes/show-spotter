# ShowSpotter

TV show discovery POC web app

Deployment Link: https://show-spotter.vercel.app/

## Stack

- Next.js
- TypeScript
- Redux Toolkit + RTK Query for state/caching
- Tailwind
- Zod for runtime validation
- next-intl for i18n (English/Spanish)
- Jest + React Testing Library
- Storybook for component documentation and engineering processes

## What it does

- Browse shows
- Search for specific ones
- Save favorites

Favorites persist to localStorage and the middleware only writes when favorites actually change (not on every Redux action). Search is debounced. Images lazy load with priority hints for above-the-fold content.

## Running locally

```bash
npm install
npm run dev
```

Then click the following url: http://localhost:3000

For tests: `npm test`  
For linting: `npm run lint`  
For Storybook: `npm run storybook`

## API

All show data comes from https://www.tvmaze.com/api - no auth needed.
