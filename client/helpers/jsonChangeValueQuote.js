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

module.exports = (json = {}, quote = '“') => {
  let result = JSON.stringify(json)
  result = result
    .replace(/\\n|\\r/g, '') // Remove all \n & \r
    .replace(/"{/g, '\'{')
    .replace(/}"/g, '}\'')
    .replace(/{\s+\\"|{\\"/g, '{ \\\'') // Find this { \"
    .replace(/\\"\s+}|\\"}/g, '\\\' }') // Find this \" }
    .replace(/},\s+\\"|},\\"/g, '}, \\\'') // Find this }, \"
    .replace(/\\":\s+{|\\":{/g, '\\\': {') // Find this \": {
    .replace(/\[\\"|\[\s+\\"/g, '[\\\'') // Find this [ \"
    .replace(/\\"\]|\\"\s+\]/g, '\\\']') // Find this \" ]
    .replace(/\],\s+\\"|\],\\"/g, '], \\\'') // Find this ], \"
    .replace(/\\":\s+\[|\\":\[/g, '\\\': [') // Find this \": [
    .replace(/\\",\s+\\"|\\",\\"/g, '\\\', \\\'') // Find this \", \"
    .replace(/\\":\s+\\"|\\":\\"/g, '\\\': \\\'') // Find this \": \"
    .replace(/\\"/g, quote) // change all \" to custom quote
    .replace(/\\'/g, '\\"') // change all \' to \" and after will be parse to Json
    .replace(/'/g, '"') // change all ' to " and after will be parse to Json
  return JSON.parse(result)
}
