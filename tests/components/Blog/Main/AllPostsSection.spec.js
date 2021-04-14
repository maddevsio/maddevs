import { render } from '@testing-library/vue'
import AllPostsSection from '@/components/Blog/Main/AllPostsSection'

const stubs = [
  'vuex',
]

describe('AllPostsSection component', () => {
  it('is a Vue instance', () => {
    const { container } = render(AllPostsSection, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
