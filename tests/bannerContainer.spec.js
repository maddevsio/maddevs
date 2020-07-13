import {
  mount
} from '@vue/test-utils';
import BannerContainer from '@/containers/BannerContainer';

describe('Banner Container', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = mount(BannerContainer);
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
    expect(typeof BannerContainer.mounted).toBe('function');
  });

  it('sets the correct default data', () => {
    expect(typeof BannerContainer.data).toBe('function');
    const defaultData = BannerContainer.data();
    expect(defaultData.currentPage).toBe(null);
  });

  it('correctly sets the message when mounted', () => {
    expect(wrapper.vm.$data.currentPage).toBe('/');
  });
});
