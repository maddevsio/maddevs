const enLocale = require('../locales/en/resource');
const fs = require('fs');

const fixedEn = Object.entries(enLocale).reduce((accum, [key]) => {
  accum[key] = key; /* eslint-disable-line */
  return accum;
}, {});

fs.writeFileSync(
  'src/locales/en/resource.json',
  JSON.stringify(fixedEn, null, 2)
);
console.warn('FIXED EN TRANSLATIONS');
