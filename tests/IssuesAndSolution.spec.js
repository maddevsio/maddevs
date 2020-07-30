import {
  mount
} from '@vue/test-utils';
import IssuesAndSolution from '@/components/GoDee/IssuesAndSolution';

describe('Issues And Solution', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(IssuesAndSolution);
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
