# StoreSnap Notes (Web)

A lightweight web app to capture store visit notes and photos, generate a clean report, and open a prefilled email to the store manager.

## Local run

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel – recommended)

1. Create a new empty GitHub repo and push this folder to it.
2. Go to https://vercel.com/new and **Import** the repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Click **Deploy**.
5. Your live URL will be ready once the build finishes.

### Netlify (alternative)

- New Site -> Import from Git.
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variable: `NETLIFY_NEXT_PLUGIN_SKIP = true` (if Netlify asks).

## Usage notes

- Use **Upload logo** to brand your header and embedded PDF/Email.
- **Save as default template** to persist your preferred sections locally (per browser).
- Click **Preview/Download PDF** to open a print-ready HTML; save as PDF.
- Click **Open Email** to open your email client with the To/CC/Body prefilled.
