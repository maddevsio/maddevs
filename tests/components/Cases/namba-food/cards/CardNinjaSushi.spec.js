import CardNinjaSushi from '@/components/Cases/nambafood/cards/CardNinjaSushi.vue'
import { render, screen } from '@testing-library/vue'

describe('CardNinjaSushi component', () => {
  it('should render correctly', () => {
    const { container } = render(CardNinjaSushi, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(/Mini white label/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
