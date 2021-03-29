import { render } from '@testing-library/vue'

import ImageComponent from '@/components/ui/image-component'

describe('webp image component', () => {
  const props = {
    fileName: 'Marat',
    fileNameRetina: 'Marat@2x',
    alt: 'marat',
    width: '1000',
    height: '500',
  }

  it("is Vue's instance", () => {
    const { container } = render(ImageComponent, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('correctly props data', () => {
    const { getByTestId } = render(ImageComponent, {
      props,
    })
    const result = getByTestId('test-multi-image')
    expect(result.width).toBe(Number(props.width))
    expect(result.height).toBe(Number(props.height))
    expect(result.alt).toBe(props.alt)
  })

  it('has class if sectionIsRequired equal true', () => {
    const { container } = render(ImageComponent, {
      props,
    })
    expect(container.getElementsByTagName('picture')).toBeTruthy()
  })
})
