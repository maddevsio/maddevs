import {
  mount
} from '@vue/test-utils';
import FormCheckboxes from '@/components/ui/form-checkboxes';

describe('Form checkboxes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FormCheckboxes, {
      propsData: {
        firstCheckboxId: 'First checkbox id',
        secondCheckboxId: 'Second checkbox id'
      }
    });
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
      typeof FormCheckboxes.methods.privacyCheckboxChangeState && 
      typeof FormCheckboxes.methods.discountOffersCheckboxChangeState
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

  test('correctly props data', () => {
    expect(wrapper.props().inputId).toBe('input-id');
  });
});
