import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalIndividuals from '@/components/core/modals/ModalIndividuals'

describe('ModalIndividuals component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should render correctly', () => {
    const { container } = render(ModalIndividuals)

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref ModalIndividuals is undefined > "show" method in ref ModalIndividuals not call', () => {
    wrapper = shallowMount(ModalIndividuals)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref ModalIndividuals exist > "show" method in ref ModalIndividuals call', () => {
    wrapper = shallowMount(ModalIndividuals, {
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

  it('if call method "close" and ref ModalIndividuals is undefined > "close" method in ref ModalIndividuals not call', () => {
    wrapper = shallowMount(ModalIndividuals)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref ModalIndividuals exist > "close" method in ref ModalIndividuals call', () => {
    wrapper = shallowMount(ModalIndividuals, {
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
