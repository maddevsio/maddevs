import Blog from '@/components/Blog/header/Blog'
import { render, screen } from '@testing-library/vue'
import { blogDoc } from './mocked/blog-document'

const props = {
  document: blogDoc,
  tags: ['Project Management', 'Featured post'],
  formattedDate: 'Mar 23, 2021',
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
    })

    expect(screen.getByText('Project Management')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
