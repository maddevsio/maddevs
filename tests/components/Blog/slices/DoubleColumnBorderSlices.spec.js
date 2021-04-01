// eslint-disalbe quotes
import DoubleColumnBorderedSlice from '@/components/Blog/slices/DoubleColumnBorderedSlice'
import { render } from '@testing-library/vue'

describe('double Column Bordered slice component', () => {
  const props = {
    slice: {
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
  }
  it('is a Vue instance', () => {
    const { container } = render(DoubleColumnBorderedSlice, {
      props,
      mocks: {
        $prismic: {
          asHtml: name => name,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
