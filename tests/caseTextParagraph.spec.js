import {
  mount
} from '@vue/test-utils';
import TextParagraph from '@/components/Cases/TextParagraph';

describe('Text paragraph', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TextParagraph, {
      propsData: {
        color: '#000000'
      },
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

  test('should have correct style', () => {
    const paragraph = wrapper.find('.case_paragraph');
    expect(paragraph.element.style.getPropertyValue('color')).toEqual('rgb(0, 0, 0)');
  });
});
