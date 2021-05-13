const params = {
  ignoreFiles: ['dist/404.html'],
  MetaSocialRule: {
    enabled: true,
    properties: [
      'og:url',
      'og:type',
      'og:site_name',
      'og:title',
      'og:description',
      'og:image',
      'og:image:width',
      'og:image:height',
      'twitter:card',
      'twitter:text:title',
      'twitter:description',
      'twitter:image:src',
      'twitter:url',
    ],
  },
  MetaBaseRule: {
    enabled: true,
    names: ['description', 'viewport'],
  },
  JsonLdRule: {
    enabled: true,
    keys: ['@context', '@type'],
  },
}

module.exports = params
