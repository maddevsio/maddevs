import BeforeAfter from '@/components/Cases/godee/BeforeAfter.vue'
import { render, screen } from '@testing-library/vue'

describe('BeforeAfter component', () => {
  it('should render correctly', () => {
    const { container } = render(BeforeAfter, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly display current date', () => {
    render(BeforeAfter, {
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(/GoDee 2018 VS. GoDee/i).innerHTML.trim())
      .toBe(`GoDee 2018 VS. GoDee ${new Date().getFullYear()}`)
  })
})
