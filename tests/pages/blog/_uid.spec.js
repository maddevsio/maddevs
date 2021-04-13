import { render } from '@testing-library/vue'
import Post from '@/components/Blog/Post/Post'
import blogPost from '../../__mocks__/blogPost'
import { blogDoc } from '../../components/Blog/header/mocked/blog-document'

const mocks = {
  document: blogDoc,
  $prismic: {
    asText: () => 'text',
    api: {
      getByUID: () => blogPost,
    },
  },
}

const props = {
  document: blogDoc,
  tags: ['Project Management', 'Featured post'],
  formattedDate: 'Mar 23, 2021',
}

const subs = ['vue-social-sharing']

jest.spyOn(window, 'scroll').mockImplementation()

describe('Post component', () => {
  document.featured_image = {
    url: '',
  }
  it('should render correctly', () => {
    const { container } = render(Post, {
      mocks,
      subs,
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
