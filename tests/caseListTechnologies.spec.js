import {
  mount
} from '@vue/test-utils';
import ListTechnologies from '@/components/Cases/ListTechnologies';

describe('List technologies', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ListTechnologies, {
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
