const params = {
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
}

module.exports = params
