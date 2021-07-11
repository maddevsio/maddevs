import FeaturedProjectsList from '@/components/OpenSource/shared/FeaturedProjectsList'
import { render } from '@testing-library/vue'

const stubs = ['FeaturedProjectsListItem']

describe('FeaturedProjectsList component', () => {
  it('should render correctly', () => {
    const { container } = render(FeaturedProjectsList, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
