import { render } from '@testing-library/vue'
import { mount, shallowMount } from '@vue/test-utils'
import Modal from '../../../client/components/core/Modal'

describe('Modal component', () => {
  it('should render correctly', () => {
    const { container } = render(Modal, {
      props: {
        components: [],
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work close handler', async () => {
    jest.useFakeTimers()

    const callObject = {
      enableScrollOnBody: jest.fn(),
      isVisible: true,
      contentLoaded: true,
      isOverlay: true,
      isSuccess: true,
      $emit: jest.fn(),
    }

    const wrapper = shallowMount(Modal, {
      props: {
        components: [],
      },
    })

    wrapper.vm.$options.methods.close.call(callObject)
    jest.runOnlyPendingTimers()

    expect(setTimeout).toHaveBeenCalledTimes(3)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100)
    expect(callObject.$emit).toHaveBeenCalledTimes(1)
    expect(callObject.enableScrollOnBody).toHaveBeenCalledTimes(1)
  })

  it('should correctly work show handler', async () => {
    jest.useFakeTimers()

    const callObject = {
      disableScrollOnBody: jest.fn(),
      isVisible: false,
      contentLoaded: false,
      isOverlay: false,
      $emit: jest.fn(),
    }

    const wrapper = shallowMount(Modal, {
      props: {
        components: [],
      },
    })

    wrapper.vm.$options.methods.show.call(callObject)
    jest.runOnlyPendingTimers()

    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100)
    expect(callObject.$emit).toHaveBeenCalledTimes(1)
    expect(callObject.disableScrollOnBody).toHaveBeenCalledTimes(1)
    expect(callObject.isOverlay).toBeTruthy()
    expect(callObject.isVisible).toBeTruthy()
    expect(callObject.contentLoaded).toBeTruthy()
  })

  it('should correctly work on key press handler', () => {
    const close = jest.fn()
    const event = {
      keyCode: 27,
    }
    const wrapper = mount(Modal, {
      props: {
        components: [],
      },
    })

    wrapper.vm.$options.methods.onKeydown.call({
      close,
    }, {})

    expect(close).toHaveBeenCalledTimes(0)

    wrapper.vm.$options.methods.onKeydown.call({
      close,
    }, event)

    expect(close).toHaveBeenCalledTimes(1)
  })

  it('should correctly work open success modal handler', () => {
    const callObject = {
      isSuccess: false,
    }

    const wrapper = mount(Modal, {
      props: {
        components: [],
      },
    })

    expect(callObject.isSuccess).toBeFalsy()
    wrapper.vm.$options.methods.openSuccessModal.call(callObject)
    expect(callObject.isSuccess).toBeTruthy()
  })

  it('should correctly work enableScrollOnBody handler', async () => {
    const wrapper = mount(Modal, {
      props: {
        components: [],
      },
    })

    expect(document.body.style.top).toBe('')
    expect(document.body.style.overflow).toBe('')
    await wrapper.vm.$options.methods.enableScrollOnBody()
    expect(document.body.style.overflow).toBe('auto')
  })

  it('should correctly work disableScrollOnBody handler', async () => {
    const wrapper = mount(Modal, {
      props: {
        components: [],
      },
    })

    expect(document.body.style.top).toBe('')
    expect(document.body.style.overflow).toBe('auto')
    await wrapper.vm.$options.methods.disableScrollOnBody()
    expect(document.body.style.overflow).toBe('hidden')
    expect(document.body.style.top).toBe('-0px')
  })
})
