import {
  mount
} from '@vue/test-utils';
import ListItemBoxCheckMark from '@/components/Cases/ListItemBoxCheckMark';

describe('List item box checkMark', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ListItemBoxCheckMark, {
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
