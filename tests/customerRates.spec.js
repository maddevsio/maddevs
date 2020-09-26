import {
  mount
} from '@vue/test-utils';
import CustomerRates from '@/components/About/CustomerRates.vue';

describe('Customer Rates', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CustomerRates);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //
});
