# RC Digital Creations React migration

Pass 1 is a real DOM migration of the current homepage into React components. The existing visual CSS and legacy interaction scripts are intentionally retained as a compatibility layer so the site can be tested before features are rewritten into React state.

## React components
Navbar, Hero, Pricing, Services, Portfolio, About, Reviews, FAQ, Contact, Footer and legacy floating extras.

## Preserved
- Existing compiled Tailwind/custom styling
- Existing images and advertisements
- Portfolio filters/pagination/lightboxes
- Contact form behavior
- Bella chatbot and `/api/chat` endpoint
- Existing static About/Privacy/Terms/Success pages

## Next pass
Replace DOM-manipulating portfolio/pricing/menu behavior with native React state, then modernize the design section-by-section.

## Run
`npm install`
`npm run dev`

Bella's `/api/chat` serverless endpoint is available on Vercel. For a local end-to-end API test, use a Vercel-compatible local environment.
