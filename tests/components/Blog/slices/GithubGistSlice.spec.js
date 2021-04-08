import { render } from '@testing-library/vue'
import GithubGistSlice from '../../../../client/components/Blog/slices/GithubGistSlice'

describe('github gist component', () => {
  const slice = {
    primary: {
      gist_id: '0987654321',
      file_name: 'file.php',
    },
  }

  it('is a Vue instance', () => {
    const { container } = render(GithubGistSlice, {
      props: {
        slice,
        stubs: ['PrismicImage'],
      },
      mocks: {
        $prismic: {
          asText: name => name,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
