import IntellegentManagementPanel from '@/components/Cases/godee/IntellegentManagementPanel.vue'
import { render, screen } from '@testing-library/vue'

const mocks = {
  $getMediaFromS3: () => 'img.jpg',
}

const props = {
  isIphone: false,
}

describe('IntellegentManagementPanel component', () => {
  it('should render correctly', () => {
    const { container } = render(IntellegentManagementPanel, {
      props,
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(IntellegentManagementPanel, {
      props,
      mocks,
    })

    expect(screen.getByText(/Intelligent management panel/i).className).toContain('case_title_h2')
  })

  it('should render isIphone property', () => {
    props.isIphone = true
    render(IntellegentManagementPanel, {
      props,
      mocks,
    })

    const element = screen.getByTestId('test-video-flex-wrapper')

    expect(element).toBeTruthy()
  })
})
