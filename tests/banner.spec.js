import {
  mount
} from '@vue/test-utils';
import Banner from '@/components/Banner';

describe('Banner', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = mount(Banner, {
      stubs: ['router-link'],
      mocks: {
        $modal: {
          show: jest.fn()
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

  it('has a mounted hook', () => {
    expect(typeof Banner.mounted).toBe('function');
  });

  it('sets the correct default data', () => {
    expect(typeof Banner.data).toBe('function');
    const defaultData = Banner.data();
    expect(defaultData.currentPageName).toBe('');
  });

  it('correctly sets the message when mounted', () => {
    expect(wrapper.vm.$data.currentPageName).toBe('/');
  });

  it('switch state for showGreenBannerImage when call function', () => {
    wrapper.vm.switchImage();
    expect(wrapper.vm.$data.showGreenBannerImage).toBe(true);    
    wrapper.vm.switchImage();
    expect(wrapper.vm.$data.showGreenBannerImage).toBe(false);

    expect(wrapper.vm.$modal.show).toHaveBeenCalled();
  });

  it('add new state for showGreenBannerImage variable', () => {
    global.event = {
      target: {
        className: 'close-modal'
      }
    };

    wrapper.vm.$data.showGreenBannerImage = true;
    wrapper.vm.setInitialStateForImage();
    expect(wrapper.vm.$data.showGreenBannerImage).toBe(false);
  });
});
