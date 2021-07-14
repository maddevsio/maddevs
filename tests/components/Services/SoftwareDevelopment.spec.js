import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment'

describe('SoftwareDevelopment component', () => {
  let wrapper = null
  let mockShow = null

  beforeEach(() => {
    wrapper = shallowMount(SoftwareDevelopment)
    mockShow = jest.fn()
  })

  afterEach(() => {
    wrapper = null
    mockShow = null
  })

  it('should render correctly', () => {
    const { container } = render(SoftwareDevelopment, {
      stubs: ['ClientOnly'],
    })

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalGetYourTrustedItPartner is undefined > "show" method in ref modalGetYourTrustedItPartner not call', () => {
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalGetYourTrustedItPartner exist > "show" method in ref modalGetYourTrustedItPartner call', () => {
    wrapper = shallowMount(SoftwareDevelopment, {
      stubs: {
        ModalGetYourTrustedItPartner: {
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
