import {
  mount
} from '@vue/test-utils';
import QuickProjectStart from '@/components/About/QuickProjectStart.vue';

describe('Quick Project Start', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(QuickProjectStart);
  });

  test('itemsTextContent must contain five elements', () => {
    expect(wrapper.vm.$data.itemsTextContent).toHaveLength(5);
  });

  test('correctly length of elements in DOM', () => {
    let contentItems = wrapper.findAll('.quick-project_start__content-item');
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
