import { render } from '@testing-library/vue'
import SlicesBlock from '@/components/Blog/Post/SlicesBlock'

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
