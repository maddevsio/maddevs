import CaseHeader from '@/components/Cases/shared/CaseHeader.vue'
import { render } from '@testing-library/vue'

const props = {
  logo: {
    width: 100,
    height: 100,
    pictureFolder: 'godee',
    file: 'godee-logo',
    alt: 'some-logo-alt',
  },
  width: 100,
  height: 100,
  pictureFolder: '',
  file: 'some-filename',
  alt: 'some-alt',
  videoName: 'video-name',
}

describe('CaseHeader component', () => {
  it('should render correctly', () => {
    const { container } = render(CaseHeader, {
      props,
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should render with navigation type iphone', () => {
    Object.defineProperty(window.navigator, 'userAgent', { value: 'iPhone' })

    const { html } = render(CaseHeader, {
      props,
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(html()).toContain('case_main-video')
  })
})
