import Modal from '@/components/slices/SimpleModal'
import { render } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'

describe('SimpleModal component', () => {
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
    const wrapper = shallowMount(Modal, {
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
})
