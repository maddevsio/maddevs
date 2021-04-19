import Modal from '@/components/Blog/slices/SimpleModal'
import { render } from '@testing-library/vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('SimpleModal component', () => {
  it('should render correctly', () => {
    const { container } = render(Modal, {
      props: {
        components: [],
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work show handler', () => {
    jest.useFakeTimers()
    const disableScrollOnBody = jest.fn()
    const wrapper = shallowMount(Modal, {
      props: {
        components: [],
      },
    })

    wrapper.vm.$options.methods.show.call({
      disableScrollOnBody,
    })

    expect(disableScrollOnBody).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100)
  })

  it('should correctly work close handler', () => {
    jest.useFakeTimers()
    const enableScrollOnBody = jest.fn()
    const wrapper = mount(Modal, {
      props: {
        components: [],
      },
    })

    wrapper.vm.$options.methods.close.call({
      enableScrollOnBody,
    })

    expect(setTimeout).toHaveBeenCalledTimes(3)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100)
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
})
