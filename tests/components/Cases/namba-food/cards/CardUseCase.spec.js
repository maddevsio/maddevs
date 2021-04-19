import CardUseCase from '@/components/Cases/nambafood/cards/CardUseCase.vue'
import { render, screen } from '@testing-library/vue'

const props = {
  title: 'some-title',
  description: 'some-description',
  pictureFolder: '',
  fileName: 'some-filename',
  fileExtension: 'png',
  alt: 'alt',
}

describe('CardUseCase component', () => {
  it('should render correctly', () => {
    const { container } = render(CardUseCase, {
      props,
      stubs: ['ClientOnly'],
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render classname', () => {
    const classList = {
      uniqueСlass: 'uniqueСlass',
    }
    const { html } = render(CardUseCase, {
      props: {
        ...props,
        classList,
      },
      stubs: ['ClientOnly'],
      mocks: {
        $getMediaFromS3: () => 'img.jpg',
      },
    })

    expect(screen.getByText(props.title)).toBeTruthy()
    expect(html()).toContain(`card-use-case__${classList.uniqueСlass}-title`)
  })
})
