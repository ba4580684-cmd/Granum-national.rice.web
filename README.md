# Granum Global Rice — Next.js

A responsive international-style rice export website built with Next.js App Router and JavaScript.

## What is included

- Requirement form shown first on `/`
- After submit, user is sent to `/home`
- Sticky responsive header
- Home, About Us, Products, Blogs, Recipes, Qualities and Contact Us routes
- Granum Global branding throughout
- Product catalogue cards
- Rice quality section
- Recipe section
- Contact/requirement form
- Mobile navigation
- WhatsApp/phone/email-ready contact links
- Local supplied Granum reference images used as website assets
- No Tailwind/PostCSS dependency, so it avoids the common `tailwindcss directly as a PostCSS plugin` error

## Run

npm install
npm run dev

Then open `http://localhost:3000`.

## Important

The Facebook, Instagram and LinkedIn buttons are visual navigation placeholders. Replace the `href="#facebook"` etc. values in `components/Header.js` and `components/Footer.js` with the real company profiles.

The requirement form currently stores the submitted lead in browser `localStorage` and opens `/home`. For production, connect the submit handler to your preferred backend, Firebase, MongoDB/API route or email service.
