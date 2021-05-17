import BenefitCard from '@/components/Careers/shared/BenefitCard'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  icon: {
    name: 'trips',
    width: 28,
    height: 32,
  },
  title: 'Onsite business trips',
}

describe('BenefitCard', () => {
  it('is a Vue instance', () => {
    const { container } = render(BenefitCard, {
      mocks,
      props,
    })

    expect(screen.getByText(props.title)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
