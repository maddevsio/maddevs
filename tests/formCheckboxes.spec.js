import { mount } from '@vue/test-utils';
import FormCheckboxes from '@/components/ui/form-checkboxes';

describe('form checkboxes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FormCheckboxes, {
      propsData: {
        inputId: 'input id',
      },
    });
  });

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a functions', () => {
    expect(
      typeof FormCheckboxes.methods.privacyCheckboxChangeState &&
        typeof FormCheckboxes.methods.discountOffersCheckboxChangeState,
    ).toBe('function');
  });

  it('emits called with arguments', () => {
    const firstCheckbox = {
      target: {
        checked: true,
      },
    };

    const secondCheckbox = {
      target: {
        checked: false,
      },
    };

    wrapper.vm.privacyCheckboxChangeState(firstCheckbox);
    wrapper.vm.discountOffersCheckboxChangeState(secondCheckbox);

    expect(wrapper.emitted()).toBeTruthy();
    expect(wrapper.emitted().getPrivacyCheckboxState).toEqual([[true]]);
    expect(wrapper.emitted().getDiscountOffersCheckboxState).toEqual([[false]]);
  });

  it('correctly props data', () => {
    expect(wrapper.props().inputId).toBe('input id');
  });
});
