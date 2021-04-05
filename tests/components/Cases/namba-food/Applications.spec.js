import Applications from '@/components/Cases/nambafood/Applications.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

const props = {
  isIphone: true,
}

describe('Applications component', () => {
  it('should render correctly', () => {
    const { container } = render(Applications, {
      mocks,
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render images', () => {
    render(Applications, {
      mocks,
      props,
    })

    expect(screen.getByTestId('test-case_phone-ios-image').src).toBe(global.location.href + mocks.getMediaFromS3())
  })
})
