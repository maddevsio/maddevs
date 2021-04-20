export default ({ app }, inject) => { // eslint-disable-line
  inject('getMediaFromS3', path => {
    let resulPath = path
    if (!path) return null
    if (path[0] !== '/') resulPath = `/${resulPath}`
    try {
      return `${process.env.s3PublicUrl}${resulPath.replace('//', '/')}`
    } catch (error) {
      throw new Error(error)
    }
  })
}
