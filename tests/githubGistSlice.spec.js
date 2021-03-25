import { mount } from '@vue/test-utils'
import GithubGistSlice from '../client/components/Blog/slices/GithubGistSlice'

describe('github gist component', () => {
  let wrapper

  const slice = {
    primary: {
      gist_id: '0987654321',
      file_name: 'file.php',
    },
  }

  beforeEach(() => {
    wrapper = mount(GithubGistSlice, {
      propsData: { slice },
      mocks: {
        $prismic: {
          asText: text => text,
        },
      },
      stubs: ['vue-embed-gist'],
    })
  })

  it('is a Vue component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
