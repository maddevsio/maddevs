import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalTeams from '@/components/core/modals/ModalTeams'

describe('ModalTeams component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should render correctly', () => {
    const { container } = render(ModalTeams)

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref ModalTeams is undefined > "show" method in ref ModalTeams not call', () => {
    wrapper = shallowMount(ModalTeams)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref ModalTeams exist > "show" method in ref ModalTeams call', () => {
    wrapper = shallowMount(ModalTeams, {
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

  it('if call method "close" and ref ModalTeams is undefined > "close" method in ref ModalTeams not call', () => {
    wrapper = shallowMount(ModalTeams)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref ModalTeams exist > "close" method in ref ModalTeams call', () => {
    wrapper = shallowMount(ModalTeams, {
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
