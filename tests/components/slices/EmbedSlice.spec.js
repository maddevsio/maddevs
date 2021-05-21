// eslint-disalbe quotes
import { shallowMount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import EmbedSlice from '@/components/slices/EmbedSlice'

describe('EmbedSlice component', () => {
  const props = {
    slice: {
      items: [
        {
          embed: {
            title: 'Title',
            url: 'https://test',
            type: 'video',
            html:
              '<div><img src="" height="300" width="300"/></div><h1>hello</h1><a href="http://maddevs.io">Hi</a> </div>',
          },
          embed_title: 'Embed title',
        },
      ],
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
  }
  it('should render correctly', () => {
    const { container } = render(EmbedSlice, {
      props,
      stubs: ['PrismicEmbed'],
      mocks: {
        $prismic: {
          asHtml: name => name,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('must replace tags', async () => {
    const { container } = await render(EmbedSlice, {
      props: {
        slice: {
          items: [],
          primary: {
            code: [],
            language: 'javascript',
          },
          slice_label: null,
          slice_type: 'codeblock',
        },
      },
      stubs: ['PrismicEmbed'],
    })

    expect(container).toMatchSnapshot()
  })

  it('by default prop slice return empty object', () => {
    const wrapper = shallowMount(EmbedSlice, {
      stubs: ['PrismicEmbed'],
    })
    expect(wrapper.vm.slice).toStrictEqual({})
  })
})
