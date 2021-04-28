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
const pattern1 = { get: /\\",\\n\\"|\\",\\n\s+\\"|\\",\s+\\n\s+\\"|\\",\s+\\n\\"/g, to: '\\\', \\\'' } // Find this \", \n \"
const pattern2 = { get: /},\\n\s+\\"|},\s+\\n\\"|},\s+\\n\s+\\"|},\\n\\"/g, to: '}, \\\'' } // Find this },\n \"
const pattern3 = { get: /\\":\s+\\"/g, to: '\\\': \\\'' } // Find this \": \"
const pattern4 = { get: /\\":\s+{/g, to: '\\\': {' } // Find this \": {
const pattern5 = { get: /{\s+\\"|{\\"|{\\n\\"|{\s+\\n\\"|{\s+\\n\s+\\"|{\\n\s+\\"/g, to: '{ \\\'' } // Find this { \n \"
const pattern6 = { get: /\\"\s+\\n\s+}|\\"\s+\\n}|\\"\\n\s+}|\\"\\n}/g, to: '\\\' }' } // Find this \"\n }

export default (json, quote = '“') => {
  let Json = JSON.stringify(json)
  Json = Json
    .replace(pattern1.get, pattern1.to)
    .replace(pattern2.get, pattern2.to)
    .replace(pattern3.get, pattern3.to)
    .replace(pattern4.get, pattern4.to)
    .replace(pattern5.get, pattern5.to)
    .replace(pattern6.get, pattern6.to)
    .replace(/\\"/g, quote) // change all \" to new quote
    .replace(/\\'/g, '\\"') // change all \' to \" and after will be parse to Json
  return JSON.parse(Json)
}
