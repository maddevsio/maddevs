import {
  mount
} from '@vue/test-utils';
import CardIssuesGoDee from '@/components/Cases/cards-content/CardIssuesGoDee';

describe('CardIssuesGoDee', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardIssuesGoDee);
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
