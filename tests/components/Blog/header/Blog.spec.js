import Blog from '@/components/Blog/header/Blog'
import { render, screen } from '@testing-library/vue'

const props = {
  title: 'title',
  subtitle: 'subtitle',
  featuredImage: {
    url: 'url',
    alt: 'alt',
    dimensions: {
      width: '200',
      height: '300',
    },
  },
  tags: ['Project Management', 'Featured post'],
  date: 'Mar 23, 2021',
}

describe('header Blog', () => {
  it('is a Vue instance', () => {
    const { container } = render(Blog, {
      props,
      mocks: {
        $prismic: {
          asText: text => text[0].text,
        },
      },
      store: {
        modules: {
          blogAuthor: {
            state: {
              blogAuthor: {},
            },
            getters: {
              blogAuthor(state) {
                return state.blogAuthor
              },
            },
          },
          blogTag: {
            state: {
              blogTag: '',
            },
            getters: {
              blogTag(state) {
                return state.blogTag
              },
            },
          },
        },
      },
    })

    expect(screen.getByText('Project Management')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
