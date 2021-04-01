// eslint-disalbe quotes
import EmbedSlice from '@/components/Blog/slices/EmbedSlice'
import { render } from '@testing-library/vue'

describe('embed slice component', () => {
  const props = {
    slice: {
      items: [
        {
          embed: {
            type: 'video',
            html:
              '<div><img src="" height="300" width="300"/></div><h1>hello</h1><a href="http://maddevs.io">Hi</a> </div>',
          },
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
  it('is a Vue instance', () => {
    const { container } = render(EmbedSlice, {
      props,
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
    })

    expect(container).toMatchSnapshot()
  })
})
