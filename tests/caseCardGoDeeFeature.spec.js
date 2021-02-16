import {
  mount
} from '@vue/test-utils';
import CardGoDeeFeature from '@/components/Cases/cards-content/CardGoDeeFeature';

describe('CardGoDeeFeature', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardGoDeeFeature);
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
