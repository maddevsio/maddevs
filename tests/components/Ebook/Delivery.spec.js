import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import Delivery from '@/components/Ebook/Delivery'

describe('Delivery component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Delivery, {
      stubs: {
        UIBanner: {
          render(h) { return h('div') },
        },
      },
      mocks: {
        $router: {
          push: jest.fn(),
        },
      },
    })
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('if call goToDeliveryPage func then redirect to the delivery page', () => {
    wrapper.vm.goToDeliveryPage()
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/delivery-models/')
  })
})
