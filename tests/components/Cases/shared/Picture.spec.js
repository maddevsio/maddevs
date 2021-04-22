import Picture from '@/components/Cases/shared/Picture'
import { mount } from '@vue/test-utils'
import { render, fireEvent, screen } from '@testing-library/vue'

const props = {
  folder: 'nambafood',
  file: 'apple-iphone-xr-silver',
  extension: 'png',
  alt: 'alt',
  lazy: false,
  shadow: true,
  radius: false,
  height: 0,
  width: 0,
  background: false,
}

const imgPath = '../../../../client/assets/img/Home/jpg/experts/Alice.jpg'

const mocks = {
  $getMediaFromS3: () => imgPath,
}

describe('Picture component', () => {
  it('should render correctly', async () => {
    const { container, html } = render(Picture, {
      props,
      mocks,
    })

    const imageData = screen.getByTestId('test-picture-img')

    await fireEvent.load(imageData)

    expect(html()).not.toContain('grey-background')
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with background', async () => {
    props.background = true
    const { html } = render(Picture, {
      props,
      mocks,
    })

    const imageData = screen.getByTestId('test-picture-img')

    await fireEvent.load(imageData)

    expect(html()).toContain('grey-background')
  })
})

describe('Computed', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Picture, {
      mocks,
    })
  })

  it('if set prop lazy = false > value attrsImg will return attrs src & srcset without prefix "data-"', async () => {
    await wrapper.setProps({ lazy: false })
    const result = { src: [imgPath], srcset: [imgPath] }
    expect(wrapper.vm.attrsImg).toMatchObject(result)
  })

  it('if set prop lazy = true > value attrsImg will return attrs src & srcset with prefix "data-"', async () => {
    await wrapper.setProps({ lazy: true })
    const result = { 'data-src': [imgPath], 'data-srcset': [imgPath] }
    expect(wrapper.vm.attrsImg).toMatchObject(result)
  })

  it('if set prop lazy = false > value attrsSource will return attrs src & srcset without prefix "data-"', async () => {
    await wrapper.setProps({ lazy: false })
    const result = { srcset: [imgPath, imgPath] }
    expect(wrapper.vm.attrsSource).toMatchObject(result)
  })

  it('if set prop lazy = true > value attrsSource will return attrs src & srcset with prefix "data-"', async () => {
    await wrapper.setProps({ lazy: true })
    const result = { 'data-srcset': [imgPath, imgPath] }
    expect(wrapper.vm.attrsSource).toMatchObject(result)
  })
})
