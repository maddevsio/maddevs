import BoilerplatesListItem from '@/components/OpenSource/shared/BoilerplatesListItem'
import { render } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  fullWidth: false,
  bottomPadding: true,
  logo: {
    name: 'logo name',
    alt: 'alt text',
    width: 23,
    height: 32,
  },
  title: 'title',
  description: 'description',
  link: 'link',
}

describe('BoilerplatesListItem component', () => {
  it('should render correctly', () => {
    const { container } = render(BoilerplatesListItem, {
      mocks,
      props,
    })

    expect(container).toMatchSnapshot()
  })
})
