import {
  mount
} from '@vue/test-utils';
import FeaturedPost from '../client/components/Blog/FeaturedPost';
import blogPost from './__mocks__/blogPost';

describe('Featured post component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FeaturedPost, {
      propsData: {
        post: blogPost
      },
      stubs: ['nuxt-link'],
      mocks: {
        $prismic: {
          asText: text => text[0].text
        }
      }
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });


});
