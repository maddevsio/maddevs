import CardNinjaSushi from '@/components/Cases/nambafood/cards/CardNinjaSushi.vue'
import { render, screen } from '@testing-library/vue'

const DEFAULT_INDEX = 0

const PICTURES = [
  {
    img: 'ninja-sushi-slide',
    alt: 'Namba Food: Sushi Room.',
  },
  {
    img: 'sushi-room-slide',
    alt: 'Namba Food: Sushi Room.',
  },
  {
    img: 'coffee-house-slide',
    alt: 'Namba Food: Coffee House.',
  },
]

const mocks = {
  $getMediaFromS3: fileName => fileName,
}

describe('CardNinjaSushi component', () => {
  it('should render correctly', () => {
    const { container } = render(CardNinjaSushi, {
      mocks,
    })

    expect(screen.getByText(/Mini white label/i)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly after secons', async () => {
    render(CardNinjaSushi, {
      mocks,
    })
    await new Promise(resolve => setTimeout(resolve, 2000))

    expect(screen.getByTestId('test-case_card-content_image').alt).toBe(PICTURES[DEFAULT_INDEX].alt)
    expect(screen.getByTestId('test-case_card-content_image').dataset.src)
      .toBe(`/images/Cases/nambafood/jpg/${PICTURES[DEFAULT_INDEX].img}.jpg`)
  })
})
