## Setup

This project does not require external dependencies to run the backend. Use Node.js 18+ and start the server with:

```bash
node server.js
```

The frontend can be served with Vite in development:

```bash
npm run dev
```

During development, the Vite server proxies `/api` requests to `localhost:3000`,
so keep the backend running in another terminal.

Uploads are sent as base64 encoded JSON so no additional packages are needed.
Images up to roughly 25&nbsp;MB are accepted.
