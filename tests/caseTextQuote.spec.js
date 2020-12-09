import {
  mount
} from '@vue/test-utils';
import TextQuote from '@/components/Cases/TextQuote';

describe('Text quote', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TextQuote, {
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
