# Tik-Talk Angular: messenger frontend

A frontend for a small messenger and social network (users, profiles, chats), built with **Angular**. It talks to a separate backend API (see [Backend server](#backend-server)). This is a fork of tick-talk-angular-frontend. So the app only works with that server running.

> **Status:** work in progress. Login, profiles, settings, search and subscribers are working. The chats page and the post feed are still UI stubs.

## Preview

![Tik Talk](./public/assets/preview/tik-talk-angular-preview.gif)

## Features

- **Login** with a username and password, with token authentication (access and refresh tokens stored in cookies)
- **Automatic token refresh**: an HTTP interceptor adds the token to every request and, when the access token expires, refreshes it once and retries the waiting requests
- **Protected routes**: pages are available only after login (route guard), otherwise the user is redirected to `/login`
- **Profile page** for the current user (`/profile/me`) and for other users (`/profile/:id`), with a subscribers preview
- **Settings page**: reactive form with validation to edit the profile (name, description, tech stack), and **avatar upload with drag and drop** and an image preview
- **Search** and **Subscribers** pages with filters (first name, last name, city, stack): the filters are debounced and the results update as you type
- **Profile details** with a skills list that can be expanded when it overflows (detected with `ResizeObserver`)
- **Practice pages and building blocks**: todos list (custom pipe and directive), reusable cards and an SVG icon component

## What I practiced

- Standalone components and lazy-loaded routes (`loadComponent`)
- Signals: `signal`, `linkedSignal`, `effect`, signal-based `input()` and `output()`
- RxJS: `switchMap`, `debounceTime`, `BehaviorSubject`, `takeUntilDestroyed`, `firstValueFrom`
- `HttpClient`, a functional interceptor and a functional route guard
- Reactive forms: `FormBuilder`, `FormGroup`, validators, `valueChanges`
- Custom directives (`HostBinding`, `HostListener`) and custom pipes
- `ViewChild`, `DestroyRef` and cleaning up subscriptions and observers

## Tech stack

Angular, TypeScript, RxJS, SCSS, `ngx-cookie-service`, Vitest, Prettier

## Backend server

The app needs the backend API. It is not part of this repository: it lives in a separate repository, [nadia-dot-com/tik-talk-pingly-backend](https://github.com/nadia-dot-com/tik-talk-pingly-backend), a fork of the original [Kosmostars7403/icher-angular-course](https://github.com/Kosmostars7403/icher-angular-course) (FastAPI, PostgreSQL, Redis, run with Docker Compose).

1. Install Git, Docker Engine and the Docker Compose plugin.
2. Clone the server and open its folder:

   ```bash
   git clone https://github.com/nadia-dot-com/tik-talk-pingly-backend.git
   cd tik-talk-pingly-backend
   ```

3. Create a `.env` file in the server folder, as described in the server's README ("Локальный запуск", step 2). Use only local development values there and never commit this file.
4. Start the server:

   ```bash
   make run
   ```

   The first run builds the images, applies the database migrations and loads test data.

5. Check that the API is running: open [http://localhost:8000/yt-course/docs](http://localhost:8000/yt-course/docs).

To stop the server, run `make stop` in the server folder.

## Getting started (frontend)

Make sure the backend server above is running, then:

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) and log in with a user account from the server. <!-- TODO: add which test user to use -->

The frontend sends the login request to the server's `/auth/token` endpoint. You can explore all available endpoints in the server's API docs at `/yt-course/docs`.

The frontend expects the API at `http://localhost:8000/yt-course/` (see `src/app/config/app.ts`).

### Other commands

```bash
npm run build   # production build into dist/
npm test        # unit tests with Vitest
```

## Project structure

```text
src/app/
  components/   reusable UI (sidebar, profile cards, filters, details, SVG icons)
  pages/        routed pages (login, profile, settings, search, subscribers, chats)
  services/     API and auth services, interceptor and guard
  directives/   drag and drop, highlight
  pipes/        image URL, todo filter
  model/        TypeScript types
```
