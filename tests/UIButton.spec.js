import {
  mount
} from '@vue/test-utils';
import UIButton from '@/components/ui/UIButton';

describe('Ui button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UIButton, {
      propsData: {
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
        name: 'Button name',
        disabled: true
      }
    });
    wrapper.vm.onClick();
    expect(wrapper.emitted().click).toBeFalsy();

    const button = wrapper.find('.ui-button');
    expect(button.classes()).toContain('ui-button--disabled');
  });
});
