import CardNinjaSushi from '@/components/Cases/namba-food/cards/CardNinjaSushi.vue'
import { render } from '@testing-library/vue'

describe('CardNinjaSushi component', () => {
  it('should render correctly', () => {
    const { container } = render(CardNinjaSushi, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
