import {
  mount
} from '@vue/test-utils';
import ListNumberedItemBox from '@/components/Cases/ListNumberedItemBox';

describe('List numbered item box', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ListNumberedItemBox, {
      slots: {
        default: 'Main Content'
      }
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('should have correct data in slot', () => {
    expect(wrapper.html()).toContain('Main Content');
  });
});
