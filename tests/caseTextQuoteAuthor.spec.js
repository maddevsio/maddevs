import {
  mount
} from '@vue/test-utils';

import TextQuoteAuthor from '@/components/Cases/TextQuoteAuthor';

describe('Text quote author', () => {
  let wrapper;
  let props = {
    authorName: 'Author name',
    authorPosition: 'Author position',
    pictureFolder: 'nambafood',
    fileName: 'apple-iphone-xr-silver',
    fileExtension: 'png',
    alt: 'alt'
  };

  beforeEach(() => {
    wrapper = mount(TextQuoteAuthor, {
      propsData: props,
      slots: {
        default: 'Main Content'
      }
    });
  });

  // ------ IMPORTANT ----- //
  test('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props);
  });

  test('should have correct content in child elements', () => {
    const authorName = wrapper.find('.case_blockquote-author__name');
    const authorPosition = wrapper.find('.case_blockquote-author__position');
    expect(authorName.text()).toEqual('Author name');
    expect(authorPosition.text()).toEqual('Author position');
  });

  test('should have correct data in slot', () => {
    expect(wrapper.html()).toContain('Main Content');
  });
});
