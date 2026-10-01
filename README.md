# Hamza Chnafa — Full Stack Developer Portfolio

Personal portfolio of Hamza Chnafa, a Full Stack Developer from Morocco. The site presents education, skills, selected projects and professional experience through a calm, illustration-led interface.

The portfolio is a Vite + React + TypeScript single-page application with English, French and Arabic, including full RTL support for Arabic.

## Features

- Sections: Navbar, Hero, About, Skills, Projects, Experience and Contact
- English, French and Arabic, with a custom lightweight translation system
- Full RTL layout for Arabic
- Responsive layout
- Accessible UI, including skip-to-content, form labels, validation feedback and keyboard-friendly navigation
- Scroll-based entrance animations with `prefers-reduced-motion` support
- SEO foundation and Open Graph metadata
- Conceptual WebP illustrations (16:9)
- Client-side contact form validation (no backend email service)

## Tech Stack

- React
- TypeScript
- Vite
- HTML5
- CSS3
- JavaScript

Core skills presented on the site:

- React
- JavaScript
- HTML5
- CSS3
- Laravel
- PHP
- REST APIs
- MySQL
- Git
- GitHub
- Responsive Design
- API Integration
- Database Design
- Full Stack Web Development

## Projects

### Industrial Supervision System

A web-based supervision application designed to monitor industrial equipment and display operational data in real time.

- React · Laravel · WebSocket
- Industrial equipment monitoring
- Real-time data display
- Web-based supervision interface

### Medical Appointment Booking Application

A web platform designed to manage patient appointments and organize interactions between patients and doctors.

- Laravel · MySQL
- Patient and doctor user management
- Appointment management
- Organized medical booking workflow

## Experience

**2026 — Web Development Internship — OCP Fauget Studio**

- Website creation
- Participation in application development

## Education

- **2023** — Diploma in Office Computing / Informatique Bureautique
- **2024** — Baccalauréat — Sciences Physiques
- **2024–2026** — Technicien Spécialisé en Développement Digital — Web Full Stack — OFPPT / ISTA
  - 1st year · 2024–2025
  - 2nd year · 2025–2026

## Design & Visual Direction

The portfolio uses a professional visual language inspired by hand-painted 2D illustration, with a watercolor / gouache atmosphere.

Palette:

- Warm cream
- Forest green
- Sage
- Muted gold
- Dark navy

The illustrations are conceptual portfolio artwork, not screenshots of the applications.

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── hero/
│       ├── about/
│       ├── skills/
│       ├── projects/
│       ├── experience/
│       └── contact/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── Navbar/
    │   ├── Hero/
    │   ├── About/
    │   ├── Skills/
    │   ├── Projects/
    │   ├── Experience/
    │   └── Contact/
    ├── hooks/
    └── i18n/
```

## Getting Started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

The development server is started with Vite.

## Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| Development | `npm run dev` | Start the Vite development server |
| Production build | `npm run build` | Type-check with TypeScript, then build for production |
| Preview | `npm run preview` | Preview the production build locally |
| Lint | `npm run lint` | Run Oxlint |

## Accessibility & Performance

- Semantic HTML and labelled form fields
- Keyboard navigation and visible focus states
- Skip-to-content link
- `prefers-reduced-motion` support
- Intersection Observer for scroll reveals
- Lazy loading for below-the-fold images
- High-priority loading for the Hero image
- WebP images at a 16:9 ratio

## Internationalization

Languages:

- English (`lang="en"`, `dir="ltr"`)
- French (`lang="fr"`, `dir="ltr"`)
- Arabic (`lang="ar"`, `dir="rtl"`)

Locale is stored in the browser and applied to the document language and direction. Translations live in a custom i18n module rather than an external i18n library.

## Deployment

The project is ready for production deployment (`npm run build`).

Deployment URL will be added once the production deployment is configured.

Built by Hamza Chnafa
