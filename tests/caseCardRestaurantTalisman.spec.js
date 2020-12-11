import {
  mount
} from '@vue/test-utils';
import CardRestaurantTalisman from '@/components/Cases/cards-content/CardRestaurantTalisman';

describe('CardRestaurantTalisman', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardRestaurantTalisman);
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
