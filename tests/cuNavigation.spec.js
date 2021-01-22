import {
  mount
} from '@vue/test-utils';
import CuNavigation from '../client/components/Blog/CuNavigation';

describe('', () => {
  let wrapper;

  const clusterPosts = [
    {
      chapter_name: [{
        spans: [],
        text: 'Chapter 1',
        type: 'heading1'
      }],
      cu_post: {
        id: 'YAGi7REAACMAgV8d',
        isBroken: false,
        lang: 'en-us',
        link_type: 'Document',
        slug: 'adadadad',
        tags: [],
        type: 'customer_university',
        uid: 'cu-test'
      }
    },
    {
      chapter_name: [{
        spans: [],
        text: 'Chapter 2',
        type: 'heading1'
      }],
      cu_post: {
        id: 'YAGi7REAACMAgV8d',
        isBroken: false,
        lang: 'en-us',
        link_type: 'Document',
        slug: 'adadadadaa',
        tags: [],
        type: 'customer_university',
        uid: 'cu-test-2'
      }
    }
  ];

  beforeEach(() => {
    wrapper = mount(CuNavigation, {
      stubs: ['router-link'],
      propsData: {
        clusterPosts,
        cluster: {
          items: clusterPosts,
          primary: {
            cluster_name: 'Pricing strategies in custom software development',
            read_more_text: 'Read more about pricing strategies'
          }
        },
        id: '123qweasd'
      },
      mocks: {
        $prismic: {
          asText: text => text[0].text
        }
      }
    });
  });

  test('Is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
