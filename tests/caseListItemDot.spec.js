import {
  mount
} from '@vue/test-utils';
import ListItemDot from '@/components/Cases/ListItemDot';

describe('List item dot', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ListItemDot, {
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
