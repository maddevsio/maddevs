import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalContactMe from '@/components/core/modals/ModalContactMe'

describe('ModalContactMe component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should render correctly', () => {
    const { container } = render(ModalContactMe)
    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalContactMe is undefined > will return false', () => {
    wrapper = shallowMount(ModalContactMe)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalContactMe exist > will return true', () => {
    wrapper = shallowMount(ModalContactMe, {
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
    })
    wrapper.vm.show()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })

  it('if call method "close" and ref modalContactMe is undefined > will return false', () => {
    wrapper = shallowMount(ModalContactMe)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref modalContactMe exist > will return true', () => {
    wrapper = shallowMount(ModalContactMe, {
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            close: mockClose,
          },
        },
      },
    })
    wrapper.vm.close()
    expect(mockClose).toHaveBeenCalledTimes(1)
  })
})
