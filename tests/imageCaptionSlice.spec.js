import {
  mount
} from '@vue/test-utils';
import ImageCaptionSlice from '../client/components/Blog/slices/ImageCaptionSlice';

describe('Image attribute slice component', () => {
  let wrapper;

  const slice = {
    items: [{}],
    primary: {
      image: {
        alt: 'alt text',
        copyright: null,
        dimensions: {height: 298, width: 1200},
        url: 'https://images.prismic.io/superpupertest/4b27a325-c48e-4f20-943d-e40537291055_2020-12-08_14-11.png?auto=compress,format&rect=0,0,1231,306&w=1200&h=298'
      },
      caption: 'caption'
    },
    slice_label: 'image-full-width',
    slice_type: 'image_with_caption'
  };

  beforeEach(() => {
    wrapper = mount(ImageCaptionSlice, {
      propsData: {slice},
      mocks: {
        $prismic: {
          asText: text => text,
          asHtml: html => html
        }
      },
      stubs: ['prismic-image']
    });
  });

  test('is vue component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('caption rendered', () => {
    expect(wrapper.find('.image-label').text()).toBe(slice.primary.caption);
  });
});
