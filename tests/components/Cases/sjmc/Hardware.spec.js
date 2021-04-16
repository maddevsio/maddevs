import Hardware from '@/components/Cases/sjmc/Hardware.vue'
import { render, screen } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'

const mocks = {
  $getMediaFromS3: image => image,
}

describe('Hardware component', () => {
  it('should render correctly', () => {
    const { container } = render(Hardware, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with text', () => {
    render(Hardware, {
      mocks,
    })

    expect(screen.getByText(/SJMC Hardware/i).className).toBeTruthy()
  })
})
