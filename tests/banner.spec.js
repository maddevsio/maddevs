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
      stubs: ['router-link']
    });
  });

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
});
