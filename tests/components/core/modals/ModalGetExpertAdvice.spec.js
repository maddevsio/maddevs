import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalGetExpertAdvice from '@/components/core/modals/ModalGetExpertAdvice'

describe('ModalGetExpertAdvice component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should render correctly', () => {
    const { container } = render(ModalGetExpertAdvice)

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref ModalGetExpertAdvice is undefined > "show" method in ref ModalGetExpertAdvice not call', () => {
    wrapper = shallowMount(ModalGetExpertAdvice)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref ModalGetExpertAdvice exist > "show" method in ref ModalGetExpertAdvice call', () => {
    wrapper = shallowMount(ModalGetExpertAdvice, {
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

  it('if call method "close" and ref ModalGetExpertAdvice is undefined > "close" method in ref ModalGetExpertAdvice not call', () => {
    wrapper = shallowMount(ModalGetExpertAdvice)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref ModalGetExpertAdvice exist > "close" method in ref ModalGetExpertAdvice call', () => {
    wrapper = shallowMount(ModalGetExpertAdvice, {
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
