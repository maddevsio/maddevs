import {
  mount
} from '@vue/test-utils';
import FooterSocialNetwork from '@/components/Footer/footer-social-network';

describe('Footer social network', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FooterSocialNetwork);
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
