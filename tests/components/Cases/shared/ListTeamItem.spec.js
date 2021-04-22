import ListTeamItem from '@/components/Cases/shared/ListTeamItem'
import { render, screen } from '@testing-library/vue'

describe('ListTeamItem component', () => {
  const props = {
    name: 'some-name',
    image: {
      name: 'Name',
      position: 'Position',
      pictureFolder: 'nambafood',
      fileName: 'apple-iphone-xr-silver',
      fileExtension: 'png',
      alt: 'alt',
    },
  }

  it('should render correctly', () => {
    const { container } = render(ListTeamItem, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(props.name).className).toBe('case_team-item__name')
    expect(container).toMatchSnapshot()
  })
})
