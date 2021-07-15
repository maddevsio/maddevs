import { shallowMount } from '@vue/test-utils'
import { render } from '@testing-library/vue'
import CTABanner from '@/components/DeliveryModels/CTABanner'

describe('CTABanner component', () => {
  let wrapper = null
  let mockShow = null

  beforeEach(() => {
    wrapper = shallowMount(CTABanner, {
      stubs: {
        UIBanner: {
          render(h) { return h('div') },
        },
      },
    })
    mockShow = jest.fn()
  })

  afterEach(() => {
    wrapper = null
    mockShow = null
  })

  it('should render correctly', () => {
    const { container } = render(CTABanner, {
      stubs: {
        UIBanner: {
          render(h) { return h('div') },
        },
        UIButton: {
          render(h) { return h('div') },
        },
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('if call method "show" and ref modalContactMe is undefined > "show" method in ref modalContactMe not call', () => {
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalContactMe exist > "show" method in ref modalContactMe call', () => {
    wrapper = shallowMount(CTABanner, {
      stubs: {
        UIBanner: {
          render(h) { return h('div') },
        },
        ModalContactMe: {
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
