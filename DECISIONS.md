# Technical Decisions

Quick rundown of the main architectural choices I made.

## Infinite Scroll vs Pagination

Went with **infinite scroll**.

The `/shows?page=N` endpoint returns paginated data which works well for a "browse and discover" flow. Users can keep scrolling to find something interesting without clicking through pages. The intersection observer watches for when you're near the bottom and fetches the next batch.

## State Management

**Redux Toolkit + RTK Query**

RTK Query handles all the API endpoints — searching, fetching show details, etc. It caches responses automatically. Search results are also cached by query string.

For favorites I used a regular Redux slice (not RTK Query) since there's no backend for favorites — they're saved in the local storage. Full show objects go into the store so the favorites page doesn't need extra API calls. 


## Favorites Persistence

Favorites save to localStorage via RTK's `createListenerMiddleware`, which listens for the `toggleFavorite` action. Only then does it write to localStorage — not on every Redux action.

When the app loads, favorites are read from localStorage and validated with Zod before going into the store. If the data is malformed, it just gets cleared.

## Data Fetching

Mix of server and client rendering:

- Initial page loads use server components where possible
- Show details and search use RTK Query on the client for caching benefits


## Misc

### Internationalization

Using next-intl with English and Spanish. All user-facing strings go through the translation layer — button labels, error messages, page titles, etc.

### Validation

Zod schemas for API responses. If the API returns something unexpected, Zod catches it before it breaks the UI. Also used for validating localStorage data when loading favorites.

### Documentation

StoryBook is used not only for visual component documentation but also for engineering processes. 

### Testing

Jest for the Redux slice tests, Storybook for visual component documentation. The slice tests spin up real stores with `configureStore()` rather than mocking the reducer — more realistic and catches integration issues.

Further improvements can be made by installing a proper tool for E2E testing like Playwright, this will allow to test entire user flows from searching until adding to favorites

### Dark Mode

CSS custom properties with a toggle button. Theme preference saves to localStorage so it persists across sessions.

