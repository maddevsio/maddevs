import {
  mount
} from '@vue/test-utils';
import Mvp from '@/components/GoDee/Mvp';

describe('Mvp', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Mvp);
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
