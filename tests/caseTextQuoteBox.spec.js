import {
  mount
} from '@vue/test-utils';
import TextQuoteBox from '@/components/Cases/TextQuoteBox';

describe('Text quote box', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TextQuoteBox, {
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
