import {
  mount
} from '@vue/test-utils';
import List from '@/components/Cases/List';

describe('List', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(List, {
      slots: {
        default: '<li>List item</li>'
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
    expect(wrapper.html()).toContain('<li>List item</li>');
  });
});
