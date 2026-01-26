# MOH Skull Base Workshop 2026

A static, responsive Next.js website for the MOH Comprehensive Endoscopic Skull Base Cadaveric Workshop.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
   *Note: This project uses `lucide-react` for icons and `clsx`/`tailwind-merge` for styling utilities.*

2. **Setup Images:**
   Create a folder named `public` at the root of the project (alongside `package.json`). Save your image assets there with the following filenames:
   - `public/neon-skull.jpg` (Used for Hero & CTA backgrounds)
   - `public/procedure.jpg` (Used in the About section)

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) with your browser.**

## Project Structure

- `app/`: Routes and pages (Home, Programme, Fees, etc.)
- `components/`: Reusable UI components.
- `data/`: Source of truth for content (Prices, Faculty names, Dates). Edit files here to update the site content.
- `public/`: Static assets (Images, favicon, etc).
- `lib/`: Utility functions and client-side router configuration.

## Deployment to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Log in to [Vercel](https://vercel.com).
3. Click "Add New..." > "Project".
4. Import your repository.
5. Framework Preset should auto-detect as "Next.js".
6. Click "Deploy".

## Content Updates

- **Fees**: Update `data/fees.ts`.
- **Programme**: Update `data/programme.ts`.
- **Faculty**: Update `data/faculty.ts`.
- **Contacts**: Update `data/contacts.ts`.
