import {mount} from '@vue/test-utils';
import GithubGistSlice from '../client/components/Blog/slices/GithubGistSlice';


describe('Github gist component', () => {
  let wrapper;

  const slice = {
    primary: {
      gist_id: '0987654321',
      file_name: 'file.php'
    }
  };

  beforeEach(() => {
    wrapper = mount(GithubGistSlice, {
      propsData: {slice},
      mocks: {
        $prismic: {
          asText: text => text
        }
      },
      stubs: ['vue-embed-gist']
    });
  });

  test('is a Vue component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
