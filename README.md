# Vinoth T — Full Stack Developer Portfolio

A premium, animated, fully responsive portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

## Tech Stack

- React.js (Vite)
- Tailwind CSS
- Framer Motion
- React Icons
- React Router
- EmailJS (contact form)

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Editing Content

All text, links, and data live in one file:

```
src/data/portfolioData.js
```

Update your name, bio, skills, experience, projects, services, testimonials, and social links there — every section reads from it, so there's no need to touch component files for content changes.

## Setting Up the Contact Form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Create an Email Service and an Email Template with `name`, `email`, `subject`, and `message` variables.
3. Copy `.env.example` to `.env` and fill in your keys:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart the dev server. The form on the Contact section will now send real emails.

## Resume & Photo

- Replace `public/resume.pdf` with your actual resume (the Hero section's "Download Resume" button links to `/resume.pdf`).
- Swap the "VT" placeholder in `src/sections/Hero.jsx` for a real photo by adding an image to `src/assets/` and rendering it inside the photo card.

## Project Structure

```
src/
  components/   Reusable UI (Navbar, Footer, cards, effects)
  sections/     Page sections (Hero, About, Skills, Experience, Timeline,
                 Projects, Services, Testimonials, Contact)
  hooks/        Custom hooks (typewriter, count-up, scroll progress)
  data/         Single source of truth for all content
  index.css     Design tokens, glass utilities, global styles
  App.jsx       Section composition + routing
tailwind.config.js  Color/typography/animation tokens
```

## Design Notes

- Dark theme with a blue → purple gradient (`azure` → `violet`) as the primary accent.
- Glassmorphism cards throughout (`.glass` utility in `index.css`).
- Display type: Space Grotesk · Body: Inter · Data/labels: JetBrains Mono.
- Section eyebrows use a JSX-tag motif (`<About />`, `<Skills />`) instead of generic numbering, tying the UI back to the developer's own vocabulary.
- Respects `prefers-reduced-motion`.
