import 'regenerator-runtime/runtime'
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

  it('if call method close > data isVisible, contentLoaded, isOverlay will be true', async () => {
    wrapper.vm.show()
    await new Promise(resolve => setTimeout(resolve, 500))
    expect(wrapper.vm.isVisible).toBeTruthy()
    expect(wrapper.vm.contentLoaded).toBeTruthy()
    expect(wrapper.vm.isOverlay).toBeTruthy()
  })

  it('if call method close > data isVisible, contentLoaded, isOverlay, isSuccess will be false', async () => {
    wrapper.vm.show()
    await new Promise(resolve => setTimeout(resolve, 500))
    wrapper.vm.close()
    await new Promise(resolve => setTimeout(resolve, 500))
    expect(wrapper.vm.isVisible).toBeFalsy()
    expect(wrapper.vm.contentLoaded).toBeFalsy()
    expect(wrapper.vm.isOverlay).toBeFalsy()
    expect(wrapper.vm.isSuccess).toBeFalsy()
  })

  it('if call method onKeydown > data isVisible, contentLoaded, isOverlay, isSuccess will be false', async () => {
    wrapper.vm.show()
    await new Promise(resolve => setTimeout(resolve, 500))
    wrapper.vm.onKeydown({ keyCode: 27 })
    await new Promise(resolve => setTimeout(resolve, 500))
    expect(wrapper.vm.isVisible).toBeFalsy()
    expect(wrapper.vm.contentLoaded).toBeFalsy()
    expect(wrapper.vm.isOverlay).toBeFalsy()
    expect(wrapper.vm.isSuccess).toBeFalsy()
  })
})
