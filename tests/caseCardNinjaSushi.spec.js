import {
  mount
} from '@vue/test-utils';
import CardNinjaSushi from '@/components/Cases/cards-content/CardNinjaSushi';

describe('CardNinjaSushi', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardNinjaSushi);
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
