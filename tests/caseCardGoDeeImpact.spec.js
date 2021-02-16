import {
  mount
} from '@vue/test-utils';
import CardGoDeeImpact from '@/components/Cases/cards-content/CardGoDeeImpact';

describe('CardGoDeeImpact', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardGoDeeImpact);
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
