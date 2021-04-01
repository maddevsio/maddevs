import CaseHeader from '@/components/Cases/CaseHeader.vue'
import { render } from '@testing-library/vue'

const props = {
  headerLogo: {
    width: 100,
    height: 100,
    pictureFolder: 'godee',
    fileName: 'godee-logo',
    alt: 'some-logo-alt',
  },
  width: 100,
  height: 100,
  pictureFolder: '',
  fileName: 'some-filename',
  alt: 'some-alt',
  videoName: 'video-name',
}

describe('CaseHeader component', () => {
  it('should render correctly', () => {
    const { container } = render(CaseHeader, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with navigation type iphone', () => {
    Object.defineProperty(window.navigator, 'userAgent', { value: 'iPhone' })

    const { html } = render(CaseHeader, {
      props,
    })

    expect(html()).toContain('case_main-video')
  })
})
