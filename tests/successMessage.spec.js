import {
  mount
} from '@vue/test-utils';

import SuccessModal from '@/components/Modals/success-message';

describe('Success message', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SuccessModal);
  });

  // ------ IMPORTANT ----- //
  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //
});
