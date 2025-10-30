# MLOps.md — Next.js Futuristic Template

## Local (Docker)
1. Build and run with Docker Compose:
   ```bash
   docker compose up --build
   ```
2. Open http://localhost:3000

## Run locally without Docker
1. Install deps:
   ```bash
   npm install
   ```
2. Dev:
   ```bash
   npm run dev
   ```
3. Build & start:
   ```bash
   npm run build
   npm start
   ```

## Deploy to Vercel
1. Push repository to GitHub.
2. Import project in Vercel (Import Project -> Git Repository).
3. Add domain `mlops.md` in Vercel Settings -> Domains and follow DNS instructions.
