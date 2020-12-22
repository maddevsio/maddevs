import {
  mount
} from '@vue/test-utils';
import HeaderSJMC from '@/components/Cases/HeaderSJMC';

describe('HeaderSJMC', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HeaderSJMC, {
      mocks: {
        $nuxt: {
          $on: jest.fn()
        }
      }
    });
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
