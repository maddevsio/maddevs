import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import TextSlice from '@/components/Blog/slices/TextSlice'

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

describe('text slice component', () => {
  it('is a Vue instance', () => {
    const { container } = render(TextSlice, {
      props: {
        slice,
      },
      stubs: ['PrismicRichText'],
    })

    expect(container).toMatchSnapshot()
  })
})

describe('Post component copyAnchorLink', () => {
  const wrapper = shallowMount(TextSlice, {
    stubs: ['PrismicRichText'],
    propsData: {
      slice,
    },
  })

  const html = tag => `
        <div id="blog-post-title" class="anchor_title">
          <${tag} class="anchor_title-h">Blog post title</${tag}>
          <div class="anchor_copy-link">
            <img src="[object Object]" alt="Anchor" />
            <button data-id="blog-post-title" class="copy-link">Copy link</button>
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
