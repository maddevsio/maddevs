const scripts = {
  sjmc: [
    {
      src: 'https://cdn.jsdelivr.net/npm/fullscreen-api-polyfill@1.1.2/fullscreen-api-polyfill.min.js',
    },
  ],
}

export const getPageScripts = key => scripts[key] || []
