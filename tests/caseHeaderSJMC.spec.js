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
          $on: jest.fn(),
          $emit: jest.fn()
        }
      },
      stubs: {
        'SJMCVideo': VueVideoStub
      }
    });
    navigator.__defineGetter__('userAgent', () => 'iPhone'); // Set custom userAgent
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('isIphone should equal true', () => {
    expect(wrapper.vm.$data.isIphone).toEqual(true);
  });

  test('Have been called emit', () => {
    wrapper.vm.$emit('open-fullscreen');
    expect(wrapper.emitted('open-fullscreen')).toBeTruthy();
  });
});
