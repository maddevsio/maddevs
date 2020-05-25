import {
  mount
} from '@vue/test-utils';

import ExpectedTeamSize from '@/components/ui/expected-team-size';

describe('Expected team size', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ExpectedTeamSize);
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
