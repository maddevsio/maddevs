import ListTeamItem from '@/components/Cases/ListTeamItem'
import { render } from '@testing-library/vue'

describe('ListTeamItem component', () => {
  const props = {
    name: 'Name',
    position: 'Position',
    pictureFolder: 'nambafood',
    fileName: 'apple-iphone-xr-silver',
    fileExtension: 'png',
    alt: 'alt',
  }

  it('should render correctly', () => {
    const { container } = render(ListTeamItem, {
      props,
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
