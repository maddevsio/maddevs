import {
  mount
} from '@vue/test-utils';
import GdprPage from '@/pages/gdpr';

describe('Gdpr page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GdprPage);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('Sets the correctly data', () => {
    expect(wrapper.vm.$data.title).toEqual('Mad Devs GDPR');
    expect(wrapper.vm.$data.description).toEqual('');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/gdpr');
  });
});
