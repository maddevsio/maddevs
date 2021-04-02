import { render, fireEvent, screen } from '@testing-library/vue'
import BeforeAfterImage from '@/components/shared/UIBeforeAfterImage'

describe('UIBeforeAfterImage component', () => {
  const props = {
    baseWidth: '1000',
    baseHeight: '578.47',
    beforeImage: '/images/Cases/godee/png/application-before.png',
    afterImage: '/images/Cases/godee/png/application-before.png',
    alt: 'GoDee Public Transportation App at 2018 and now.',
  }

  it('should render correctly with slot', () => {
    const { container } = render(BeforeAfterImage, {
      stubs: ['nuxt-link', 'NuxtLink', 'prismic-image'],
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly change opacity when handle mouse move over', async () => {
    render(BeforeAfterImage, {
      stubs: ['nuxt-link', 'NuxtLink', 'prismic-image'],
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    const hover = screen.getByTestId('track-img')
    expect(screen.getByTestId('test-comparsion-track-line').style.opacity).toBe('')
    await fireEvent.mouseMove(hover)
    expect(screen.getByTestId('test-comparsion-track-line').style.opacity).toBe('0.25')
  })

  it('should correctly change styles after 2500ms when mouseLeave', async () => {
    render(BeforeAfterImage, {
      stubs: ['nuxt-link', 'NuxtLink', 'prismic-image'],
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    const hover = screen.getByTestId('track-img')
    await fireEvent.mouseLeave(hover)
    await new Promise(resolve => setTimeout(resolve, 2500))
    expect(screen.getByTestId('test-comparsion-track-line').style.transition).toBe(
      '0.3s ease-out left, 0.3s ease-in opacity',
    )
    expect(screen.getByTestId('test-comparsion-track-line').style.left).toBe('50%')
    expect(screen.getByTestId('test-comparsion-track-line').style.opacity).toBe('1')
  })

  it('should correctly change alt by properties', async () => {
    render(BeforeAfterImage, {
      props,
      stubs: ['nuxt-link', 'NuxtLink', 'prismic-image'],
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })

    const { alt, width, height } = screen.getByTestId('test-comparsion-image_after')

    expect(alt).toBe(props.alt)
    expect(width).toBe(parseInt(props.baseWidth, 10))
    expect(height).toBe(parseInt(props.baseHeight, 10))
  })
})
