import Picture from '@/components/Cases/shared/Picture'
import { render, fireEvent, screen } from '@testing-library/vue'

const props = {
  folder: 'nambafood',
  file: 'apple-iphone-xr-silver',
  extension: 'png',
  alt: 'alt',
  lazy: false,
  shadow: true,
  radius: false,
  height: 0,
  width: 0,
  background: false,
}

const mocks = {
  $getMediaFromS3: () => '../../../../client/assets/img/Home/jpg/experts/Alice.jpg',
}

describe('Picture component', () => {
  it('should render correctly', async () => {
    const { container, html } = render(Picture, {
      props,
      mocks,
    })

    const imageData = screen.getByTestId('test-picture-img')

    await fireEvent.load(imageData)

    expect(html()).not.toContain('grey-background')
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with background', async () => {
    props.background = true
    const { html } = render(Picture, {
      props,
      mocks,
    })

    const imageData = screen.getByTestId('test-picture-img')

    await fireEvent.load(imageData)

    expect(html()).toContain('grey-background')
  })
})
