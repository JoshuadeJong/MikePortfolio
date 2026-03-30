import WebsiteContent from './WebsiteContent';

interface StaticPage {
  path: string;
  title: string;
  description: string;
  content: string;
}

const BASE_URL = 'https://www.michaeleskenazi1.com';

export function template(page: any) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <link rel="canonical" href="${BASE_URL}/${page.path}" />
    
    <!-- Attempt to redirect the user to the React app -->
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // Modified to handle urls with .html
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/\\.html$/, '').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );  
    </script>

    <!-- Google Verification -->
    <meta name="google-site-verification" content="v7iTURdWoXhx7iFJtwBjNPenBsLdremzekJv7qUfnTE" />
  </head>
  <body>
    <noscript>JavaScript is recommended for this app.</noscript>
    <div id="static-content" >
      ${page.content}
    </div>
    <div id="root"></div>
  </body>
</html>`;
}

function generateHeader(): string {
  return `
      <h1>${WebsiteContent.website.name}</h1>
      <h1>Professional Jazz Guitarist - ${WebsiteContent.contact.location}</h1>
      <p><a href="/home.html">Home</a></p>
      <p><a href="/reviews.html">Reviews</a></p>
      <p><a href="/faq.html">FAQ</a></p>
      <p><a href="/contact.html">Contact</a></p>
  `
}

function generateHomeContent(): string {
  const { about, lesson, testimonials, listen, contact } = WebsiteContent;
  
  return `
    ${generateHeader()}

    <section id="about">
      <h3>Here is a bit about me!</h3>
      ${about.text.map(text => `<p>${text}</p>`).join('\n      ')}
      <p><a href="${about.learnMoreLink}">${about.learnMoreText}</a></p>
    </section>
    
    <section id="testimonials">
      <h3>Why people love learning from me!</h3>
      ${testimonials.slice(0, 6).map(testimonial => `
        <blockquote>
          <p>${testimonial.text.replace(/\n/g, '</p><p>')}</p>
          <footer>— ${testimonial.person}</footer>
        </blockquote>
      `).join('\n      ')}
      <p><a href="/reviews.html">Read More Reviews</a></p>
    </section>
    
    <section id="lessons">
      <h3>Lessons</h3>
      ${lesson.info.slice(0, 2).map(text => `<p>${text}</p>`).join('\n      ')}
      
      <h4>${lesson.options[0].title} - ${lesson.options[0].price}</h4>
      <p>${lesson.options[0].description}</p>
      <ul>
        ${lesson.options[0].includes.map(item => `<li>${item}</li>`).join('\n        ')}
      </ul>
      <p><em>${lesson.options[0].note}</em></p>
      <p><small>* Rates may change based on travel</small></p>
      
      <p><strong>${lesson.optionsCallback}</strong></p>
    </section>
    
    <section id="performances">
      <h3>Performances</h3>
      <p>Watch recent performances and live sessions.</p>
      ${listen.personal.map(video => `
        <p><a href="https://www.youtube.com/watch?v=${video.videoId}">${video.title}</a></p>
      `).join('\n      ')}
    </section>
    
    <section id="connect">
      <h3>Let's connect!</h3>
      <p>${contact.connectActionMessage}</p>
      <p><a href="/contact.html">Say Hello</a></p>
    </section>
  `;
}

function generateLessonContent(): string {
  const { lesson } = WebsiteContent;
  return `
    ${generateHeader()}
    
    <h1>Guitar Lessons with ${WebsiteContent.website.name}</h1>
    ${lesson.info.map(text => `<p>${text}</p>`).join('\n    ')}
    
    <h2>Rates</h2>
    ${lesson.options.map(option => `
      <h3>${option.title} - ${option.price}</h3>
      <p>${option.description}</p>
      <ul>
        ${option.includes.map(item => `<li>${item}</li>`).join('\n        ')}
      </ul>
      <p><em>${option.note}</em></p>
    `).join('\n    ')}
    <p>${lesson.optionsCallback}</p>
    
    <p><a href="/contact.html">Book a lesson</a></p>
  `;
}

function generateContactContent(): string {
  const { contact } = WebsiteContent;
  return `
    ${generateHeader()}
    
    <h1>Contact ${contact.namePersonFull}</h1>
    <p>${contact.connectActionMessage}</p>
    
    <h2>Contact Information</h2>
    <p>Email: <a href="mailto:${contact.email}">${contact.email}</a></p>
    <p>Phone: <a href="tel:${contact.phone.replace(/\s/g, '')}">${contact.phone}</a></p>
    <p>Location: ${contact.location}</p>
  `;
}

function generateReviewsContent(): string {
  const { testimonials } = WebsiteContent;
  return `
    ${generateHeader()}
    
    <h1>Student Reviews</h1>
    <p>See what students say about their experience learning guitar with ${WebsiteContent.website.name}.</p>
    
    ${testimonials.map(testimonial => `
      <blockquote>
        <p>${testimonial.text.replace(/\n/g, '</p><p>')}</p>
        <footer>— ${testimonial.person}</footer>
      </blockquote>
    `).join('\n    ')}
  `;
}

function generateFaqContent(): string {
  const { faq } = WebsiteContent;
  return `
    ${generateHeader()}
      
    <h1>Frequently Asked Questions</h1>
    
    ${Object.entries(faq).map(([category, questions]) => `
      <h2>${category}</h2>
      ${questions.map(qa => `
        <h3>${qa.question}</h3>
        <div>${qa.answer}</div>
      `).join('\n      ')}
    `).join('\n    ')}
  `;
}

export const pages: StaticPage[] = [
  {
    path: 'home.html',
    title: `${WebsiteContent.website.name} - Professional Jazz Guitarist`,
    description: `Book private guitar lessons or live performances with ${WebsiteContent.website.name}, a professional jazz guitarist based in ${WebsiteContent.contact.location}.`,
    content: generateHomeContent()
  },
  // {
  //   path: 'lesson.html',
  //   title: `Guitar Lessons - ${WebsiteContent.website.name}`,
  //   description: `Professional guitar lessons in ${WebsiteContent.contact.location}. Learn jazz, technique, music theory, and improvisation from an experienced instructor.`,
  //   content: generateLessonContent()
  // },
  {
    path: 'contact.html',
    title: `Contact - ${WebsiteContent.website.name}`,
    description: `Get in touch with ${WebsiteContent.website.name} for guitar lessons or performance bookings in ${WebsiteContent.contact.location}.`,
    content: generateContactContent()
  },
  {
    path: 'reviews.html',
    title: `Student Reviews - ${WebsiteContent.website.name}`,
    description: `Read testimonials from guitar students who have learned with ${WebsiteContent.website.name}.`,
    content: generateReviewsContent()
  },
  {
    path: 'faq.html',
    title: `FAQ - ${WebsiteContent.website.name}`,
    description: `Frequently asked questions about guitar lessons with ${WebsiteContent.website.name}.`,
    content: generateFaqContent()
  }
];
