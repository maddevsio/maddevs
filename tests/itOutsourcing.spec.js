import {
  mount
} from '@vue/test-utils';
import ItOutsourcing from '@/components/Services/ItOutsourcing.vue';

describe('IT Outsourcing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItOutsourcing);
  });

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
