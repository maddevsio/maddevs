import { render, screen } from '@testing-library/vue'
import CaseStudies from '@/components/core/CaseStudies'

describe('CaseStudies', () => {
  const props = {
    type: 'index',
  }

  it('should render correctly', () => {
    const { container } = render(CaseStudies, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText('Sir John Monash Centre')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with type=projects', () => {
    props.type = 'projects'
    const { container } = render(CaseStudies, {
      props,
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })
})
