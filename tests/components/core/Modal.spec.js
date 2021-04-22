import { mount } from '@vue/test-utils'
import Modal from '@/components/core/Modal.vue'

describe('namba food', () => {
  let wrapper

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: null,
      },
    }
    wrapper = mount(Modal, {
      stubs: ['ClientOnly', 'NuxtLink'],
      mocks: {
        $getMediaFromS3: () => 's3 image url',
        $lazyLoad: {
          init: () => {},
        },
      },
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('if call method openSuccessModal > data isSuccess will be true', () => {
    expect(wrapper.vm.isSuccess).toBeFalsy()
    wrapper.vm.openSuccessModal()
    expect(wrapper.vm.isSuccess).toBeTruthy()
  })
})
