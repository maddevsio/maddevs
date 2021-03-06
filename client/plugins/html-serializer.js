/**
 * To learn more about HTML Serializer check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/html-serializer
 */

import prismicDOM from 'prismic-dom'
import linkResolver from './link-resolver'

const { Elements } = prismicDOM.RichText

export default (type, element, content, children) => {
  // Generate links to Prismic Documents as <router-link> components
  // Present by default, it is recommended to keep this
  if (type === Elements.hyperlink) {
    let result = ''
    const url = prismicDOM.Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<NuxtLink to="${url}">${content}</NuxtLink>`
    } else {
      const target = element.data.target ? `target="'${element.data.target}'" rel="noopener"` : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <router-link> component
  // Present by default, it is recommended to keep this
  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${element.alt || ''}" copyright="${element.copyright || ''}">`

    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === 'Document') {
        result = `<NuxtLink to="${url}">${result}</NuxtLink>`
      } else {
        const target = element.linkTo.target ? `target="${element.linkTo.target}" rel="noopener"` : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`
    return result
  }

  if (type === Elements.paragraph || type === Elements.list || type === Elements.paragraph || type === Elements.oList) {
    const processedChildren = children.map(child => child
      .replace(/`([^`]*)`/g, (match, p) => `<span class="inline-code">${p}</span>`)
      .replace(/<a href="http[^"]*"/, match => `${match} target="_blank"`))

    let tag
    switch (type) {
      case Elements.list:
        tag = 'ul'
        break
      case Elements.oList:
        tag = 'ol'
        break
      default:
        tag = 'p'
        break
    }

    return `<${tag}>${processedChildren.join('')}</${tag}>`
  }

  // Return null to stick with the default behavior for everything else
  return null
}
