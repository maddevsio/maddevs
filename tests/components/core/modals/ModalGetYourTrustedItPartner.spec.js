import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalGetYourTrustedItPartner from '@/components/core/modals/ModalGetYourTrustedItPartner'

describe('ModalGetYourTrustedItPartner component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should render correctly', () => {
    const { container } = render(ModalGetYourTrustedItPartner)

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref ModalGetYourTrustedItPartner is undefined > "show" method in ref ModalGetYourTrustedItPartner not call', () => {
    wrapper = shallowMount(ModalGetYourTrustedItPartner)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref ModalGetYourTrustedItPartner exist > "show" method in ref ModalGetYourTrustedItPartner call', () => {
    wrapper = shallowMount(ModalGetYourTrustedItPartner, {
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

  it('if call method "close" and ref ModalGetYourTrustedItPartner is undefined > "close" method in ref ModalGetYourTrustedItPartner not call', () => {
    wrapper = shallowMount(ModalGetYourTrustedItPartner)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref ModalGetYourTrustedItPartner exist > "close" method in ref ModalGetYourTrustedItPartner call', () => {
    wrapper = shallowMount(ModalGetYourTrustedItPartner, {
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
