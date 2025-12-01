export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': [
            "'self'",
            'https://cdn.ckeditor.com',
            'https://glorious-triumph-f1bbe1b0db.strapiapp.com'
          ],
          'connect-src': [
            "'self'",
            'https://proxy-event.ckeditor.com'
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://glorious-triumph-f1bbe1b0db.strapiapp.com'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://glorious-triumph-f1bbe1b0db.strapiapp.com'
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
