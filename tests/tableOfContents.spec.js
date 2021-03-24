import { mount } from '@vue/test-utils';
import TableOfContents from '@/components/Blog/TableOfContents';

describe('table of contents block in single post page', () => {
  let wrapper;

  const content = [
    {
      spans: [
        {
          data: {
            lunk_type: 'Web',
            url: 'https://#gallery',
          },
          start: 0,
          end: 7,
          type: 'hyperlink',
        },
      ],
      text: 'Gallery',
      type: 'list-item',
    },
    {
      spans: [
        {
          data: {
            lunk_type: 'Web',
            url: 'https://#main',
          },
          start: 0,
          end: 7,
          type: 'hyperlink',
        },
      ],
      text: 'Main',
      type: 'list-item',
    },
  ];

  beforeEach(() => {
    wrapper = mount(TableOfContents, {
      propsData: { content },
    });
  });

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('ordered list rendered', () => {
    expect(wrapper.find('ol').exists()).toBeTruthy();
  });

  it('link replaced https', () => {
    expect(wrapper.find('li').find('a').attributes('href')).toMatch(
      content[0].spans[0].data.url.replace('https://', ''),
    );
  });
});
