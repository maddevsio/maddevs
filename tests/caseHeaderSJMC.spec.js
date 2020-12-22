import {
  mount
} from '@vue/test-utils';
import HeaderSJMC from '@/components/Cases/HeaderSJMC';

describe('HeaderSJMC', () => {
  let wrapper;

  const VueVideoStub = { // Mock refs in child component
    render: () => {},
    methods: {
      onended: () => {}
    }
  };

  beforeEach(() => {
    wrapper = mount(HeaderSJMC, {
      mocks: {
        $nuxt: {
          $on: jest.fn()
        }
      },
      stubs: {
        'SJMCVideo': VueVideoStub
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
