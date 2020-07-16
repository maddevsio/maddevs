import {
  mount
} from '@vue/test-utils';
import UIButton from '@/components/ui/UIButton';

describe('Ui button modal trigger', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UIButton, {
      propsData: {
        name: 'Button name',
        disabled: false
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

  test('Button slot renders a default button text', () => {
    const button = wrapper.find('.ui-button');
    expect(button.text()).toBe('Button name');
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
