import {
  mount
} from '@vue/test-utils';
import UIButton from '@/components/ui/UIButton';

describe('Ui button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UIButton, {
      propsData: {
        loading: false,
        disabled: false
      },
      slots: {
        default: 'button text'
      }
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('Slot should set text for button', () => {
    expect(wrapper.html()).toContain('button text');
  });

  test('onClick should call $emit', () => {
    wrapper.vm.onClick();
    expect(wrapper.emitted().click).toBeTruthy();
  });

  test('if this.$props.disabled equal false, onClick should not call $emit and button should contain new class', () => {
    wrapper = mount(UIButton, {
      propsData: {
        loading: false,
        disabled: true
      }
    });
    wrapper.vm.onClick();
    expect(wrapper.emitted().click).toBeFalsy();

    const button = wrapper.find('.ui-button');
    expect(button.classes()).toContain('ui-button--disabled');
  });

  test('Button should contain span with text Waiting...', () => {
    wrapper = mount(UIButton, {
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
    wrapper = mount(UIButton, {
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
