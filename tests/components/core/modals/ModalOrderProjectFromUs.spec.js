import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalOrderProjectFromUs from '@/components/core/modals/ModalOrderProjectFromUs'

describe('ModalOrderProjectFromUs component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should render correctly', () => {
    const { container } = render(ModalOrderProjectFromUs)

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref ModalOrderProjectFromUs is undefined > "show" method in ref ModalOrderProjectFromUs not call', () => {
    wrapper = shallowMount(ModalOrderProjectFromUs)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref ModalOrderProjectFromUs exist > "show" method in ref ModalOrderProjectFromUs call', () => {
    wrapper = shallowMount(ModalOrderProjectFromUs, {
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

  it('if call method "close" and ref ModalOrderProjectFromUs is undefined > "close" method in ref ModalOrderProjectFromUs not call', () => {
    wrapper = shallowMount(ModalOrderProjectFromUs)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref ModalOrderProjectFromUs exist > "close" method in ref ModalOrderProjectFromUs call', () => {
    wrapper = shallowMount(ModalOrderProjectFromUs, {
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
