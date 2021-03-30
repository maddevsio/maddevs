import { render } from '@testing-library/vue'
import PostView from '../../../client/components/Blog/PostView'

describe('text slice component', () => {
  it('is a Vue instance', () => {
    const { container } = render(PostView, {
      mocks: {
        $prismic: {
          asText: text => text,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
