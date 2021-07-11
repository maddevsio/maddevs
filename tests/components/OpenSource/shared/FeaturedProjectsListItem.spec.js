import FeaturedProjectsListItem from '@/components/OpenSource/shared/FeaturedProjectsListItem'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  logo: 'logo name',
  name: 'name',
  title: 'title',
  description: 'description',
  link: 'link',
}

describe('FeaturedProjectsListItem component', () => {
  it('should render correctly', () => {
    const { container } = render(FeaturedProjectsListItem, {
      mocks,
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
