import FeaturedProjects from '@/components/OpenSource/FeaturedProjects'
import { render } from '@testing-library/vue'

const stubs = ['TitleDesc', 'FeaturedProjectsList']

describe('FeaturedProjects component', () => {
  it('should render correctly', () => {
    const { container } = render(FeaturedProjects, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
