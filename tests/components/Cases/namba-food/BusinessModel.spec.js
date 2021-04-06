import BusinessModel from '@/components/Cases/nambafood/BusinessModel.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  getMediaFromS3: () => 'img.jpg',
}

describe('BusinessModel component', () => {
  it('should render correctly', () => {
    const { container } = render(BusinessModel, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(BusinessModel, {
      mocks,
    })

    expect(screen.getByText(/^[M]ulti-directional business model/i).className).toBeTruthy()
  })
})
