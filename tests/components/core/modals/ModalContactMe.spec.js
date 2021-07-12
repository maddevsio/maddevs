import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalContactMe from '@/components/core/modals/ModalContactMe'

describe('ModalContactMe component', () => {
  let wrapper

  it('should render correctly', () => {
    const { container } = render(ModalContactMe)

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalContactMe is undefined > will return false', () => {
    wrapper = shallowMount(ModalContactMe)
    expect(wrapper.vm.show()).toBe(false)
  })

  it('if call method "show" and ref modalContactMe exist > will return true', () => {
    wrapper = shallowMount(ModalContactMe, {
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            show() {},
          },
        },
      },
    })
    expect(wrapper.vm.show()).toBe(true)
  })

  it('if call method "close" and ref modalContactMe is undefined > will return false', () => {
    wrapper = shallowMount(ModalContactMe)
    expect(wrapper.vm.close()).toBe(false)
  })

  it('if call method "close" and ref modalContactMe exist > will return true', () => {
    wrapper = shallowMount(ModalContactMe, {
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            close() {},
          },
        },
      },
    })
    expect(wrapper.vm.close()).toBe(true)
  })
})
