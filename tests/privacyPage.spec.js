import {
  mount
} from '@vue/test-utils';
import PrivacyPage from '@/pages/_lang/privacy';

describe('Privacy page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PrivacyPage);
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs Privacy');
    expect(wrapper.vm.$data.description).toEqual('');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/privacy');
  });
});
