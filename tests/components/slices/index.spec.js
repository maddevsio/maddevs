import { shallowMount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import SlicesBlock from '@/components/slices'

const toOneLine = text => text
  .replace(/ +(?= )/g, '')
  .replace(/\n/g, '')
  .replace(/>(.*?)</g, '><')
  .trim()

describe('slice block component', () => {
  const slices = [
    {
      primary: {
        text: [
          {
            type: 'heading1',
            text: 'sample text',
          },
        ],
      },
      slice_type: 'text',
    },
    {
      primary: {
        quotation_design: 'border',
        quote: 'lorem ipsum dolor sit ame',
        name_of_the_author: 'John Doe',
        portrait_author: {
          mobile: {},
          url: '',
        },
      },
      slice_type: 'quote',
    },
    {
      items: [{}],
      primary: {
        code: [
          {
            spans: [],
            text:
              'getAllHeadings() {\n  this.document.body.forEach(listItem => {\n    if(listItem.primary.text !== undefined) {\n      if(listItem.primary.text[0].type === \'heading1\') {\n        this.headingsList.push({\n          textContent: listItem.primary.text[0].text,\n          headingName: listItem.primary.text[0].text.toLowerCase().replace(/s/g , \'-\')\n        });\n      }\n    }\n  });',
            type: 'paragraph',
          },
        ],
        language: 'javascript',
      },
      slice_label: null,
      slice_type: 'codeblock',
    },
    {
      items: [{}],
      primary: {
        image: {
          alt: 'alt text',
          copyright: null,
          dimensions: { height: 298, width: 1200 },
          url:
            'https://images.prismic.io/superpupertest/4b27a325-c48e-4f20-943d-e40537291055_2020-12-08_14-11.png?auto=compress,format&rect=0,0,1231,306&w=1200&h=298',
        },
        caption: 'caption',
      },
      slice_label: 'image-full-width',
      slice_type: 'image_with_caption',
    },
    {
      items: [{}],
      primary: {
        image: {
          alt: 'alt text',
          copyright: null,
          dimensions: { height: 298, width: 1200 },
          url:
            'https://images.prismic.io/superpupertest/4b27a325-c48e-4f20-943d-e40537291055_2020-12-08_14-11.png?auto=compress,format&rect=0,0,1231,306&w=1200&h=298',
        },
        target: '_blank',
        title: [
          {
            spans: [],
            text: 'Tired banner',
            type: 'paragraph',
          },
        ],
        url: 'https://blog.maddevs.io',
      },
      slice_label: null,
      slice_type: 'image_with_attributes',
    },
    {
      items: [
        { list_item: 'list item 1' },
        { list_item: 'list item 2' },
        { list_item: 'list item 3' },
        { list_item: 'list item 4' },
        { list_item: 'list item 5' },
      ],
      primary: {
        list_introduction: 'list introduction',
      },
      slice_type: 'ordered_list',
    },
  ]

  it('should render correctly', () => {
    const { container } = render(SlicesBlock, {
      props: { slices },
      mocks: {
        $prismic: {
          asText: text => text,
          asHtml: html => `<p>${html}</p>`,
        },
      },
      stubs: ['PrismicImage', 'PrismicRichText'],
    })

    expect(container).toMatchSnapshot()
  })
})

describe('Post component copyAnchorLink', () => {
  const slice = {
    primary: {
      text: [
        {
          type: 'heading1',
          text: 'sample text',
        },
      ],
    },
  }

  const wrapper = shallowMount(SlicesBlock, {
    stubs: ['PrismicRichText'],
    propsData: {
      slice,
    },
    mocks: {
      $prismic: {
        dom: {
          Link: {
            url: () => '',
          },
          RichText: {
            Elements: {
              em: 'em',
              embed: 'embed',
              heading1: 'heading1',
              heading2: 'heading2',
              heading3: 'heading3',
              heading4: 'heading4',
              heading5: 'heading5',
              heading6: 'heading6',
              hyperlink: 'hyperlink',
              image: 'image',
              label: 'label',
              list: 'group-list-item',
              listItem: 'list-item',
              oList: 'group-o-list-item',
              oListItem: 'o-list-item',
              paragraph: 'paragraph',
              preformatted: 'preformatted',
              span: 'span',
              strong: 'strong',
            },
          },
        },
      },
    },
  })

  const headerHtml = tag => `
        <div id="blog-post-title" class="anchor_title">
          <${tag} class="anchor_title-h">Blog post title</${tag}>
          <div class="anchor_copy-link">
            <button data-id="blog-post-title" class="copy-link">
              <img src="[object Object]" alt="Anchor" width="16" height="16" />
            </button>
            <div class="anchor_copy-link-tooltip">Copy link</div>
          </div>
        </div>
      `

  it('if type not heading will return null', () => {
    const result = wrapper.vm.htmlSerializer('div', null, null, ['Blog post title'])
    expect(result).toBeNull()
  })

  it('if type heading1 will return html with h1 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading1', null, null, ['Blog post title'])
    expect(result).toBe(headerHtml('h1'))
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['Blog post title'])
    expect(result).toBe(headerHtml('h2'))
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['Blog post title'])
    expect(result).toBe(headerHtml('h3'))
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['Blog post title'])
    expect(result).toBe(headerHtml('h4'))
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['Blog post title'])
    expect(result).toBe(headerHtml('h5'))
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['Blog post title'])
    expect(result).toBe(headerHtml('h6'))
  })

  it('if type paragraph will return <p>Blog post title</p>', () => {
    const result = wrapper.vm.htmlSerializer('paragraph', null, null, ['Blog post title'])
    expect(result).toBe('<p>Blog post title</p>')
  })

  it('if type preformatted will return <pre>Blog post title</pre>', () => {
    const result = wrapper.vm.htmlSerializer('preformatted', null, null, ['Blog post title'])
    expect(result).toBe('<pre>Blog post title</pre>')
  })

  it('if type strong will return <strong>Blog post title</strong>', () => {
    const result = wrapper.vm.htmlSerializer('strong', null, null, ['Blog post title'])
    expect(result).toBe('<strong>Blog post title</strong>')
  })

  it('if type em will return <em>Blog post title</em>', () => {
    const result = wrapper.vm.htmlSerializer('em', null, null, ['Blog post title'])
    expect(result).toBe('<em>Blog post title</em>')
  })

  it('if type list-item will return <li>Blog post title</li>', () => {
    const result = wrapper.vm.htmlSerializer('list-item', null, null, ['Blog post title'])
    expect(result).toBe('<li>Blog post title</li>')
  })

  it('if type o-list-item will return <li>Blog post title</li>', () => {
    const result = wrapper.vm.htmlSerializer('o-list-item', null, null, ['Blog post title'])
    expect(result).toBe('<li>Blog post title</li>')
  })

  it('if type group-list-item will return <ul>Blog post title</ul>', () => {
    const result = wrapper.vm.htmlSerializer('group-list-item', null, null, ['Blog post title'])
    expect(result).toBe('<ul>Blog post title</ul>')
  })

  it('if type group-o-list-item will return <ol>Blog post title</ol>', () => {
    const result = wrapper.vm.htmlSerializer('group-o-list-item', null, null, ['Blog post title'])
    expect(result).toBe('<ol>Blog post title</ol>')
  })

  it('if type span and content null will return empty string', () => {
    const result = wrapper.vm.htmlSerializer('span', null, null, ['Blog post title'])
    expect(result).toBe('')
  })

  it('if type span will return "Blog post <br /> title"', () => {
    const result = wrapper.vm.htmlSerializer('span', null, 'Blog post \n title', ['Blog post title'])
    expect(result).toBe('Blog post <br /> title')
  })

  it('if type embed will return embed html', () => {
    const element = {
      oembed: {
        provider_name: '',
        type: '',
        embed_url: '',
        html: 'html',
      },
    }
    const embedHtml = '<div data-oembed="" data-oembed-type="" data-oembed-provider="" ></div>'
    const result = wrapper.vm.htmlSerializer('embed', element, null, ['Blog post title'])
    expect(toOneLine(result)).toStrictEqual(toOneLine(embedHtml))
  })

  describe('hyperlink tests', () => {
    it('if type hyperlink & without target will return <a href=""></a>', () => {
      const element = {
        data: {
          target: null,
        },
      }
      const hyperlinkHtml = '<a href=""></a>'
      const result = wrapper.vm.htmlSerializer('hyperlink', element, null, ['Blog post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(hyperlinkHtml))
    })

    it('if type hyperlink will return <a target="_blank" rel="noopener" href=""></a>', () => {
      const element = {
        data: {
          target: '_blank',
        },
      }
      const hyperlinkHtml = '<a target="_blank" rel="noopener" href=""></a>'
      const result = wrapper.vm.htmlSerializer('hyperlink', element, null, ['Blog post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(hyperlinkHtml))
    })
  })

  describe('label tests', () => {
    it('if type label will return <span class="label"></span>', () => {
      const element = {
        data: {
          label: 'label',
        },
      }
      const labelHtml = '<span class="label"></span>'
      const result = wrapper.vm.htmlSerializer('label', element, null, ['Blog post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(labelHtml))
    })

    it('if type label & without label will return <span ></span>', () => {
      const element = {
        data: {
          label: null,
        },
      }
      const labelHtml = '<span ></span>'
      const result = wrapper.vm.htmlSerializer('label', element, null, ['Blog post title'])
      expect(toOneLine(result)).toStrictEqual(toOneLine(labelHtml))
    })
  })

  it('if type image will return html for img', () => {
    const element = {
      linkTo: {
        target: '_blank',
      },
      label: '',
      url: '',
      alt: '',
    }
    const imageHtml = '<p class=" block-img"><img src="" alt="" copyright=""></p>'
    const result = wrapper.vm.htmlSerializer('image', element, null, ['Blog post title'])
    expect(toOneLine(result)).toStrictEqual(toOneLine(imageHtml))
  })
})
