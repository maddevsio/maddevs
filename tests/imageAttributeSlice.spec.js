import {
  mount
} from '@vue/test-utils';
import ImageAttributesSlice from '../client/components/Blog/slices/ImageAttributesSlice';

describe('Image attribute slice component', () => {
  let wrapper;

  const slice = {
    items: [{}],
    primary: {
      image: {
        alt: 'alt text',
        copyright: null,
        dimensions: {height:298, width:1200},
        url: 'https://images.prismic.io/superpupertest/4b27a325-c48e-4f20-943d-e40537291055_2020-12-08_14-11.png?auto=compress,format&rect=0,0,1231,306&w=1200&h=298'
      },
      target: '_blank',
      title: [{
        spans: [],
        text: 'Tired banner',
        type: 'paragraph'
      }],
      url: 'https://blog.maddevs.io'
    },
    slice_label: null,
    slice_type: 'image_with_attributes'
  };

  beforeEach(() => {
    wrapper = mount(ImageAttributesSlice, {
      propsData: {slice},
      mocks: {
        $prismic: {
          asText: text => text
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

  test('link has target attribute', () => {
    expect(wrapper.find('.block-img').attributes('target')).toMatch('_blank');
  });

  test('link has href attribute', () => {
    expect(wrapper.find('.block-img').attributes('href')).toMatch('https://blog.maddevs.io');
  });
});
