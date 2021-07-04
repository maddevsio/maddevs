const convertTagsToText = (text = '', excludedTags = []) => {
  // convert all html tags to text
  let formatedText = text
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
      formatedText = formatedText.replace(openTagRegExp, `<${tag} $1>`)
      formatedText = formatedText.replace(closeTagRegExp, `</${tag}>`)
    }
  }

  return formatedText
}

export default convertTagsToText
