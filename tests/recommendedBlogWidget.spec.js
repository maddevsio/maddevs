import {mount} from '@vue/test-utils';
import RecommendedBlogWidget from '../client/components/Blog/RecommendedBlogWidget';
import blogPost from './__mocks__/blogPost';

describe('Recommended blog widget component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RecommendedBlogWidget, {
      mocks: {
        $prismic: {
          asText: text => text[0].text
        }
      },
      propsData: {post: blogPost}
    });
  });

  test('is a Vue component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
