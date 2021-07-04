const convertTagsToText = (text = '', excludedTags = []) => {
  // convert all html tags to text
  let formattedText = text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  /**
   * convert excluded tags back from text to html tags
   */
  if (excludedTags && excludedTags.length) {
    for (const tag of excludedTags) {
      const openTagRegExp = new RegExp(`&lt;${tag}(.*?)&gt;`, 'g')
      // eslint-disable-next-line
      const closeTagRegExp = new RegExp(`&lt;\/${tag}&gt;`, 'g')
      formattedText = formattedText.replace(openTagRegExp, `<${tag} $1>`)
      formattedText = formattedText.replace(closeTagRegExp, `</${tag}>`)
    }
  }

  return formattedText
}

export default convertTagsToText
