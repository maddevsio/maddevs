import IntellegentManagementPanel from '@/components/Cases/godee/IntellegentManagementPanel.vue'
import { render, screen } from '@testing-library/vue'

describe('IntellegentManagementPanel component', () => {
  it('should render correctly', () => {
    const { container } = render(IntellegentManagementPanel, {
      props: {
        isIphone: false,
      },
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(IntellegentManagementPanel, {
      props: {
        isIphone: false,
      },
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(/Intelligent management panel/i).className).toContain('case_title_h2')
  })

  it('should render isIphone property', () => {
    render(IntellegentManagementPanel, {
      props: {
        isIphone: true,
      },
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    const element = screen.getByTestId('test-video-flex-wrapper')

    expect(element).toBeTruthy()
  })
})
