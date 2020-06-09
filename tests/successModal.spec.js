import {
  mount
} from '@vue/test-utils';

import SuccessModal from '@/components/Modals/success-modal';

describe('Success modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SuccessModal, {
      stubs: ['modal']
    });
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
