/**
 * This helper changes the standard quotes in the value to a different quote to avoid conflicts.
 * For example, we have this json:
 * { "key": "Data from "Admin panel" " }
 * Data from the admin panel may come in with double quotes. This will be considered a syntax error.
 * @function
 * @param {JSON} json - JSON object with uncorrect symbols
 * @param {String} quote - quote to replace
 * @returns {JSON}
 */

// Order important
const pattern = { findBy: /":\s+{\s+}/g, replaceTo: '": {}' } // Find this \", \n \"
const pattern0 = { findBy: /":\n"/g, replaceTo: '": "' } // Find this \", \n \"
const pattern1 = { findBy: /\\",\\n\\"|\\",\\n\s+\\"|\\",\s+\\n\s+\\"|\\",\s+\\n\\"/g, replaceTo: '\\\', \\\'' } // Find this \", \n \"
const pattern2 = { findBy: /},\\n\s+\\"|},\s+\\n\\"|},\s+\\n\s+\\"|},\\n\\"/g, replaceTo: '}, \\\'' } // Find this },\n \"
const pattern3 = { findBy: /\\":\s+\\"/g, replaceTo: '\\\': \\\'' } // Find this \": \"
const pattern4 = { findBy: /\\":\s+{/g, replaceTo: '\\\': {' } // Find this \": {
const pattern5 = { findBy: /{\s+\\"|{\\"|{\\n\\"|{\s+\\n\\"|{\s+\\n\s+\\"|{\\n\s+\\"/g, replaceTo: '{ \\\'' } // Find this { \n \"
const pattern6 = { findBy: /\\"\s+\\n\s+}|\\"\s+\\n}|\\"\\n\s+}|\\"\\n}/g, replaceTo: '\\\' }' } // Find this \"\n }

export default (json = {}, quote = '“') => {
  let result = JSON.stringify(json)
  result = result
    .replace(pattern.findBy, pattern.replaceTo)
    .replace(pattern0.findBy, pattern0.replaceTo)
    .replace(pattern1.findBy, pattern1.replaceTo)
    .replace(pattern2.findBy, pattern2.replaceTo)
    .replace(pattern3.findBy, pattern3.replaceTo)
    .replace(pattern4.findBy, pattern4.replaceTo)
    .replace(pattern5.findBy, pattern5.replaceTo)
    .replace(pattern6.findBy, pattern6.replaceTo)
    .replace(/\\"/g, quote) // change all \" to new quote
    .replace(/\\'/g, '\\"') // change all \' to \" and after will be parse to Json
  return JSON.parse(result)
}
