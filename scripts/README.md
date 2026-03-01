# Static Page Generation

This script generates static HTML pages for SEO purposes while maintaining React functionality.

## How It Works

1. **Static Content for Crawlers**: Each page includes semantic HTML with key content that Google can index
2. **React Enhancement**: When JavaScript loads, React takes over and hides the static content
3. **Progressive Enhancement**: Users without JS see basic content; users with JS get the full React experience

## Generated Pages

- `home.html` - Main landing page with about, lessons, and contact info
- `lesson.html` - Guitar lesson details and pricing
- `contact.html` - Contact information
- `reviews.html` - Student testimonials
- `faq.html` - Frequently asked questions

## Usage

Run manually:
```bash
npm run generate-static
```

Or automatically during deployment:
```bash
npm run deploy
```

The `predeploy` script automatically generates static pages before building.

## Updating Content

Edit the `pages` array in `generate-static-pages.js` to modify static content. Keep it synchronized with your React components for consistency.
