import * as fs from 'fs';
import * as path from 'path';
import { pages } from '../src/content/StaticContent';

const template = (page: any)  => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    
    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" href="/logo192.png" />
    
    <!-- Manifest -->
    <link rel="manifest" href="/site.webmanifest">
    <link rel="manifest" href="/manifest.json" />

    <!-- Start Single Page Apps for GitHub Pages -->
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) {
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
                  l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>

    <!-- CSS Imports -->
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />

    <!-- Google Verification -->
    <meta name="google-site-verification" content="v7iTURdWoXhx7iFJtwBjNPenBsLdremzekJv7qUfnTE" />
  </head>
  <body>
    <noscript>JavaScript is recommended for this app.</noscript>
    <div id="static-content" >
      ${page.content}
    </div>
    <div id="root"></div>
    <script type="text/javascript" src="/static/js/bundle.js"></script>
  </body>
</html>`;
};

const buildDir = path.join(__dirname, '..', 'public');

pages.forEach(page => {
  const filePath = path.join(buildDir, page.path);
  fs.writeFileSync(filePath, template(page));
  console.log(`Generated: ${page.path}`);
});

console.log('Static pages generated successfully!');
