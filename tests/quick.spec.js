import {
  mount
} from '@vue/test-utils';
import QuickProjectStart from '@/components/About/QuickProjectStart.vue';

describe('Quick Project Start', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(QuickProjectStart);
  });

  test('correctly length of elements in DOM', () => {
    let contentItems = wrapper.findAll('.quickProjectStart__list-item');
    expect(contentItems).toHaveLength(5);
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
