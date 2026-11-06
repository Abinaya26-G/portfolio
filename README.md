# Abinaya Gowthaman — Portfolio

A responsive React + Vite portfolio designed for Vercel deployment.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Add your resumes

Your uploaded resumes are already included in `public/resumes/` using these exact names:

- `java-resume.pdf` (Java Developer resume)
- `ai-resume.pdf` (Python Developer / Generative AI resume)

The two hero buttons and resume section download links expect those paths. Replace these files if you later update either resume.

## Update before publishing

1. Resolve the CGPA discrepancy: the Java resume lists 8.17/10, while your questionnaire lists 8.29/10.
2. Add internship role, company, dates, and 2–3 contribution points if you want an Experience section.
3. Add certificate credential URLs / certificate PDFs if available.
4. Add the VS Code extension Marketplace URL and exact published extension name.
5. Verify every live project URL and replace any project that is no longer available.
6. Check phone/email are the public contact details you want recruiters to use.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, select **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. No environment variables are required for this static portfolio.
