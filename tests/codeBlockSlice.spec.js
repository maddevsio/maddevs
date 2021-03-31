import { mount } from '@vue/test-utils'
import CodeBlockSlice from '../client/components/Blog/slices/CodeBlockSlice'

describe('code block slice component', () => {
  let wrapper

  const slice = {
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
  }

  beforeEach(() => {
    wrapper = mount(CodeBlockSlice, {
      propsData: { slice },
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
