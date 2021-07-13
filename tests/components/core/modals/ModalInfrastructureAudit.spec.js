import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import ModalInfrastructureAudit from '@/components/core/modals/ModalInfrastructureAudit'

describe('ModalInfrastructureAudit component', () => {
  let wrapper
  let mockShow
  let mockClose

  beforeEach(() => {
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  it('should render correctly', () => {
    const { container } = render(ModalInfrastructureAudit)

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref ModalInfrastructureAudit is undefined > "show" method in ref ModalInfrastructureAudit not call', () => {
    wrapper = shallowMount(ModalInfrastructureAudit)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref ModalInfrastructureAudit exist > "show" method in ref ModalInfrastructureAudit call', () => {
    wrapper = shallowMount(ModalInfrastructureAudit, {
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

  it('if call method "close" and ref ModalInfrastructureAudit is undefined > "close" method in ref ModalInfrastructureAudit not call', () => {
    wrapper = shallowMount(ModalInfrastructureAudit)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref ModalInfrastructureAudit exist > "close" method in ref ModalInfrastructureAudit call', () => {
    wrapper = shallowMount(ModalInfrastructureAudit, {
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
