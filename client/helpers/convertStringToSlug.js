// Helper, that gets the slug string from text
export default text => text.toLowerCase()
  .trim()
  .replace(/[^\w ]+/g, '')
  .replace(/ +/g, '-')
