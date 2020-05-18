import {
  mount
} from '@vue/test-utils';
import formCheckboxes from '@/components/ui/form-checkboxes';

describe('Form checkboxes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(formCheckboxes);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a functions', () => {
    expect(
      typeof formCheckboxes.methods.privacyCheckboxChangeState && 
      typeof formCheckboxes.methods.discountOffersCheckboxChangeState
    ).toBe('function');
  });

  test('emits called with arguments', () => {
    const firstCheckbox = {
      target: {
        checked: true
      }
    };

    const secondCheckbox = {
      target: {
        checked: false
      }
    };

    wrapper.vm.privacyCheckboxChangeState(firstCheckbox);
    wrapper.vm.discountOffersCheckboxChangeState(secondCheckbox);

    expect(wrapper.emitted()).toBeTruthy();
    expect(wrapper.emitted().getPrivacyCheckboxState).toEqual([[true]]);
    expect(wrapper.emitted().getDiscountOffersCheckboxState).toEqual([[false]]);
  });
});
