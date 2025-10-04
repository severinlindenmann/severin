# severin

My personal blog — content and experiments around data engineering, analytics, and side projects.

🌐 [https://severin.io](https://severin.io)

## Requirements

- Node.js >= 18.18.0 (Next.js 15 requirement)
- npm 9+

## Local development

```bash
npm install
npm run dev
```

## Production build & export

```bash
npm run build
npm run export
```

The static output lives in the `_static` directory. Deploy to Firebase Hosting with:

```bash
firebase login
firebase deploy --only hosting
```