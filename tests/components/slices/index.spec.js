import { shallowMount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import SlicesBlock from '@/components/slices'

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
  })

  const html = tag => `
        <div id="blog-post-title" class="anchor_title">
          <${tag} class="anchor_title-h">Blog post title</${tag}>
          <div class="anchor_copy-link">
            <button data-id="blog-post-title" class="copy-link">
              <img src="[object Object]" alt="Anchor" />
            </button>
            <div class="anchor_copy-link-tooltip">Copy link</div>
          </div>
        </div>
      `

  it('if type not heading will return null', () => {
    const result = wrapper.vm.htmlSerializer('div', null, null, ['Blog post title'])
    expect(result).toBeNull()
  })

  it('if type heading2 will return html with h2 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading2', null, null, ['Blog post title'])
    expect(result).toBe(html('h2'))
  })

  it('if type heading3 will return html with h3 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading3', null, null, ['Blog post title'])
    expect(result).toBe(html('h3'))
  })

  it('if type heading4 will return html with h4 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading4', null, null, ['Blog post title'])
    expect(result).toBe(html('h4'))
  })

  it('if type heading5 will return html with h5 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading5', null, null, ['Blog post title'])
    expect(result).toBe(html('h5'))
  })

  it('if type heading6 will return html with h6 tag', () => {
    const result = wrapper.vm.htmlSerializer('heading6', null, null, ['Blog post title'])
    expect(result).toBe(html('h6'))
  })
})
