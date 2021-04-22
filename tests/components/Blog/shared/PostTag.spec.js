import { render } from '@testing-library/vue'
import PostTag from '@/components/Blog/shared/PostTag'

const TAG_NAME = 'post-tag'
const THEME_COLOR = 'very-dark'

describe('post tag component', () => {
  it('is a Vue instance', () => {
    const { container, getByTestId } = render(PostTag, {
      props: {
        tag: TAG_NAME,
      },
    })

    expect(getByTestId('test-tag').innerHTML.trim()).toBe(TAG_NAME)
    expect(container).toMatchSnapshot()
  })

  it('to be render with dark theme', () => {
    const { html } = render(PostTag, {
      props: {
        tag: TAG_NAME,
        theme: THEME_COLOR,
      },
    })

    expect(html()).toContain(THEME_COLOR)
  })
})
