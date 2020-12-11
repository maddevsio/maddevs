import {
  mount
} from '@vue/test-utils';
import ListTeam from '@/components/Cases/ListTeam';

describe('List team', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ListTeam, {
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
