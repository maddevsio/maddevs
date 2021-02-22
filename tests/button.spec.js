import { mount } from '@vue/test-utils';

import Button from '@/components/Careers/Button';
import CareersForm from '@/components/Careers/CareersForm';

describe('Button component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Button, {
      parentComponent: CareersForm,
      slots: {
        default: 'Btn text'
      },
      propsData: {
        loading: false,
        disabled: false
      }
    });
  });

  test('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Button slot renders a default button text', () => {
    const btn = wrapper.find('.button');
    expect(btn.text()).toBe('Btn text');
  });

  test('should have CareersForm parent component ', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('CareersForm');
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should test click emit', () => {
    wrapper = mount(Button);
    wrapper.vm.$emit('click');
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });

  test('should test click emit', () => {
    wrapper = mount(Button);
    wrapper.vm.$emit('click');
    expect(wrapper.find('#careers-btn').exists()).toBe(true);
    const button = wrapper.find('#careers-btn');
    button.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(2);
  });

  test('correctly sets props and recognizes click event', () => {
    wrapper = mount(Button, {
      parentComponent: CareersForm,
      slots: {
        default: 'Btn text'
      },
      propsData: {
        disabled: true
      }
    });

    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.find('#careers-btn').exists()).toBe(true);
    const button = wrapper.find('#careers-btn');
    button.trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();

    wrapper = mount(Button, {
      parentComponent: CareersForm,
      slots: {
        default: 'Btn text'
      },
      propsData: {
        disabled: false
      }
    });
  });

  test('Button should contain span with text Waiting...', () => {
    wrapper = mount(Button, {
      propsData: {
        loading: true,
        disabled: false
      },
      slots: {
        default: 'Slot text'
      }
    });

    expect(wrapper.find('span').text()).toEqual('Waiting...');
  });

  test('Button should contain slot text', () => {
    wrapper = mount(Button, {
      propsData: {
        loading: false,
        disabled: false
      },
      slots: {
        default: 'Slot text'
      }
    });

    expect(wrapper.text()).toEqual('Slot text');
  });
});
