import { render } from '@testing-library/vue'
import PostAuthor from '@/components/Blog/PostAuthor'

describe('text slice component', () => {
  it('is a Vue instance', () => {
    const { container } = render(PostAuthor, {
      props: {
        document: {
          author: 'some-author',
          author_image: {
            url: 'some-url',
          },
          author_title: 'author_title',
        },
      },
      mocks: {
        $prismic: {
          asText: text => text,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
