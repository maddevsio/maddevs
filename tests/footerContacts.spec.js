import {
  mount
} from '@vue/test-utils';
import FooterContacts from '@/components/Footer/footer-contacts';

describe('Footer contacts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FooterContacts);
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
