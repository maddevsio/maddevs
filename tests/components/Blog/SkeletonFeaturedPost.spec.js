import SkeletonFeaturedPost from '@/components/Blog/SkeletonFeaturedPost'
import { render } from '@testing-library/vue'

describe('skeleton post widget component', () => {
  it('should render correctly', () => {
    const { container } = render(SkeletonFeaturedPost)

    expect(container).toMatchSnapshot()
  })
})
