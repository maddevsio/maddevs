import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import ItСonsulting from '@/components/Services/ItСonsulting.vue'

describe('itСonsulting component', () => {
  let wrapper = null
  let mockShow = null

  beforeEach(() => {
    wrapper = shallowMount(ItСonsulting)
    mockShow = jest.fn()
  })

  afterEach(() => {
    wrapper = null
    mockShow = null
  })

  it('should render correctly', () => {
    const { container } = render(ItСonsulting, {
      stubs: ['ClientOnly'],
    })

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalGetExpertAdvice is undefined > "show" method in ref modalGetExpertAdvice not call', () => {
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalGetExpertAdvice exist > "show" method in ref modalGetExpertAdvice call', () => {
    wrapper = shallowMount(ItСonsulting, {
      stubs: {
        ModalGetExpertAdvice: {
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
