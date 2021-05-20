import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import TextSlice from '@/components/slices/TextSlice'

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

  it('by default prop htmlSerializer has func which return null', () => {
    const wrapper = shallowMount(TextSlice, {
      propsData: {
        slice,
      },
      stubs: ['PrismicRichText'],
    })
    expect(wrapper.vm.htmlSerializer()).toBeNull()
  })
})
