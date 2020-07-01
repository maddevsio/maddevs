import {
  mount
} from '@vue/test-utils';
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment.vue';

describe('SoftwareDevelopment', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SoftwareDevelopment);
  });
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
