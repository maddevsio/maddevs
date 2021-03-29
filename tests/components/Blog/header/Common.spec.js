import Common from '@/components/Blog/header/Common'
import { render, screen } from '@testing-library/vue'

const props = {
  title: 'some title',
  coverImageUrl: 'some-url.jpg',
}

const IMAGE_JPG_CLASS = 'blog-post__introduction-image--with-background'

describe('header Common', () => {
  it('is a Vue instance', () => {
    const { container, html } = render(Common, {
      props,
    })

    expect(screen.getByText(props.title)).not.toBeNull()
    expect(html()).toContain(IMAGE_JPG_CLASS)
    expect(container).toMatchSnapshot()
  })

  it('is a Vue instance with another image format', () => {
    const { html } = render(Common, {
      props: {
        title: 'some title',
        coverImageUrl: 'some-url.gif',
      },
    })

    expect(html()).not.toContain(IMAGE_JPG_CLASS)
  })
})
