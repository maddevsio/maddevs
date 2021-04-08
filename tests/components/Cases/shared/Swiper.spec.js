import Swiper from '@/components/Cases/shared/Swiper'
import { render } from '@testing-library/vue'

const props = {
  components: [
    {
      fileName: 'admin',
      pictureFolder: 'nambafood',
      fileExtension: 'jpg',
    },
    {
      fileName: 'dashboard',
      pictureFolder: 'nambafood',
      fileExtension: 'jpg',
    },
  ],
  boxShadow: true,
  sliderDescription: 'some-description',
  safariTopBar: '',
  safariTopBarImage: '',
  safariTopBarAlt: '',
}

describe('Picture component', () => {
  it('should render correctly', () => {
    const { container } = render(Swiper, {
      props,
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })

  it('Should correct display description', () => {
    const { html } = render(Swiper, {
      props,
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(html()).toContain(props.sliderDescription)
  })
})
