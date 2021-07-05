import textEllipsis from '@/helpers/textEllipsis'
import convertTagsToText from '@/helpers/convertTagsToText'

const getFirstParagraph = (slices, limit) => {
  let paragraph = ''
  let haveFirstParagraph = false
  slices.forEach(slice => {
    if (haveFirstParagraph || slice.slice_type !== 'text') return

    slice.primary.text.filter(block => block.type === 'paragraph').forEach(block => {
      paragraph += block.text.replace(/`(.*?)`/g, '<code class="inline-code">$1</code>')
      // the second parameter of function excludes tags
      paragraph = convertTagsToText(paragraph, ['code', 'strong', 'em'])
      haveFirstParagraph = true
    })
  })

  return textEllipsis(paragraph, { limit })
}

export default getFirstParagraph
