/**
 * This helper will except some keys from provided object using entries logic
 * For example, you provide the next arguments to the helper:
 * exceptKeys({ good: '', bad: '' }, ['bad'])
 * After calling this you'll get the next object: { good: '' }
 * The 'bad' key was deleted from provided object
 * @function
 * @param {Object} obj - Object to except some keys
 * @param {Array<String>} exceptKeys - array of keys to except from object
 * @returns {Object}
 */
export default (obj, exceptKeys = []) => Object.fromEntries(
  Object.entries(obj).filter(([key]) => !exceptKeys.includes(key)),
)
