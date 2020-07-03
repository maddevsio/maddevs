import {
  mount
} from '@vue/test-utils';

import SuccessModal from '@/components/Modals/success-message';

describe('Success message', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SuccessModal);
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should call close emit twice', () => {
    expect(wrapper.emitted().close).toBeFalsy();
    wrapper.vm.close();
    expect(wrapper.emitted().close.length).toBe(1);
    wrapper.vm.$emit('close');
    expect(wrapper.emitted().close).toBeTruthy();
    expect(wrapper.emitted().close.length).toBe(2);
  });
});
