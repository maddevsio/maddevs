import {
  mount
} from '@vue/test-utils';
import CardDeliveryServiceNambafood from '@/components/Cases/cards-content/CardDeliveryServiceNambafood';

describe('CardDeliveryServiceNambafood', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardDeliveryServiceNambafood);
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
