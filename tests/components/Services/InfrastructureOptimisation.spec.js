import 'regenerator-runtime'
import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import InfrastructureOptimisation from '@/components/Services/InfrastructureOptimisation'

describe('InfrastructureOptimisation', () => {
  let wrapper = null
  let mockShow = null

  beforeEach(() => {
    wrapper = shallowMount(InfrastructureOptimisation)
    mockShow = jest.fn()
  })

  afterEach(() => {
    wrapper = null
    mockShow = null
  })

  it('should render correctly', () => {
    const { container } = render(InfrastructureOptimisation)

    expect(screen.getByTestId('test-container').className).toBe('container')
    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalInfrastructureAudit is undefined > "show" method in ref modalInfrastructureAudit not call', () => {
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalInfrastructureAudit exist > "show" method in ref modalInfrastructureAudit call', () => {
    wrapper = shallowMount(InfrastructureOptimisation, {
      stubs: {
        ModalInfrastructureAudit: {
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
})
