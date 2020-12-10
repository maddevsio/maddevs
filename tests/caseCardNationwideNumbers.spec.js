import {
  mount
} from '@vue/test-utils';
import CardNationwideNumbers from '@/components/Cases/cards-content/CardNationwideNumbers';

describe('CardNationwideNumbers', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardNationwideNumbers);
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
