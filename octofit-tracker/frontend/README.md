# Octofit Tracker frontend

Run the React 19 presentation tier from the workspace root with `npm run dev --prefix octofit-tracker/frontend`.

## API URL

In GitHub Codespaces, define `VITE_CODESPACE_NAME` in `octofit-tracker/frontend/.env.local` using the Codespace name (the value of `CODESPACE_NAME`):

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

Vite exposes this value through `import.meta.env.VITE_CODESPACE_NAME`; the frontend then calls `https://<name>-8000.app.github.dev`. If the variable is unset, the API base URL safely falls back to `http://localhost:8000`. Restart Vite after editing `.env.local`.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
