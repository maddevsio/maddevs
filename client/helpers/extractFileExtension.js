// Helper, that gets the file extension from a string with a file name or URL
export default url => {
  if (Boolean(url) && typeof url === 'string') return url.split(/[#?]/)[0].split('.').pop().trim()
  return null
}
