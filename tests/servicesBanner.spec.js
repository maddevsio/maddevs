import {
  mount
} from '@vue/test-utils';
import ServicesBanner from '@/components/Banner/ServicesBanner';

describe('Form checkboxes', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = mount(ServicesBanner, {
      stubs: ['nuxt-link'],
      mocks: {
        $modal: {
          show: jest.fn()
        },
        $store: {
          commit: jest.fn(),
          state: {
            modalWindowIsOpen: false
          }
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

  it('has a mounted and destroyed hooks', () => {
    expect(
      typeof ServicesBanner.mounted &&
      typeof ServicesBanner.destroyed
    ).toBe('function');
  });

  it('showModal should call functions', () => {
    wrapper.vm.showModal();
    expect(wrapper.vm.$modal.show).toBeCalled();
    expect(wrapper.vm.$store.commit).toBeCalled();
  });

  it('disableScrollOnBody should add new params for body', () => {
    wrapper.vm.disableScrollOnBody();
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('handleScroll should add new value for scrollYPosition', () => {
    Object.defineProperty(window, 'scrollY', {
      value: 100
    });
    wrapper.vm.handleScroll();
    expect(wrapper.vm.$data.scrollYPosition).toBe('100px');
  });
});
