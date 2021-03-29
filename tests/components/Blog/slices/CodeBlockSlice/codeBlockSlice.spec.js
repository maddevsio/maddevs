import CodeBlockSlice from '@/components/Blog/slices/CodeBlockSlice'
import { render } from '@testing-library/vue'

describe('code block slice component', () => {
  const props = {
    slice: {
      items: [{}],
      primary: {
        code: [
          {
            spans: [],
            text:
              "getAllHeadings() {\n  this.document.body.forEach(listItem => {\n    if(listItem.primary.text !== undefined) {\n      if(listItem.primary.text[0].type === 'heading1') {\n        this.headingsList.push({\n          textContent: listItem.primary.text[0].text,\n          headingName: listItem.primary.text[0].text.toLowerCase().replace(/s/g , '-')\n        });\n      }\n    }\n  });",
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
    const { container, html } = render(CodeBlockSlice, {
      props,
    })

    expect(html()).toContain('<div class="post-part single">')
    expect(container).toMatchSnapshot()
  })
})
