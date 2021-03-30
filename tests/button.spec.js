import { mount } from '@vue/test-utils'

import Button from '@/components/Careers/Button'
import CareersForm from '@/components/Careers/Careers'

describe('button component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Button, {
      parentComponent: CareersForm,
      slots: {
        default: 'Btn text',
      },
      propsData: {
        loading: false,
        disabled: false,
      },
    })
  })

  it('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('button slot renders a default button text', () => {
    const btn = wrapper.find('.button')
    expect(btn.text()).toBe('Btn text')
  })

  it('should have CareersForm parent component', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('Careers')
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should test click emit', () => {
    wrapper = mount(Button)
    wrapper.vm.$emit('click')
    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.emitted().click).toHaveLength(1)
  })

  it('should test click emit 2 times', () => {
    wrapper = mount(Button)
    wrapper.vm.$emit('click')
    expect(wrapper.find('#careers-btn').exists()).toBe(true)
    const button = wrapper.find('#careers-btn')
    button.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.emitted().click).toHaveLength(2)
  })

  it('correctly sets props and recognizes click event', () => {
    wrapper = mount(Button, {
      parentComponent: CareersForm,
      slots: {
        default: 'Btn text',
      },
      propsData: {
        disabled: true,
      },
    })

    expect(wrapper.props().disabled).toBe(true)
    expect(wrapper.find('#careers-btn').exists()).toBe(true)
    const button = wrapper.find('#careers-btn')
    button.trigger('click')
    expect(wrapper.emitted().click).toBeFalsy()

    wrapper = mount(Button, {
      parentComponent: CareersForm,
      slots: {
        default: 'Btn text',
      },
      propsData: {
        disabled: false,
      },
    })
  })

  it('button should contain span with text Waiting...', () => {
    wrapper = mount(Button, {
      propsData: {
        loading: true,
        disabled: false,
      },
      slots: {
        default: 'Slot text',
      },
    })

    expect(wrapper.find('span').text()).toEqual('Waiting...')
  })

  it('button should contain slot text', () => {
    wrapper = mount(Button, {
      propsData: {
        loading: false,
        disabled: false,
      },
      slots: {
        default: 'Slot text',
      },
    })

    expect(wrapper.text()).toEqual('Slot text')
  })
})
