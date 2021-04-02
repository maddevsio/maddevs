import SoftwareDevelopmentIcons from '@/components/Services/SoftwareDevelopmentIcons'
import { render } from '@testing-library/vue'

const props = {
  icons: [
    {
      title: 'some_icon',
      className: 'icon_className',
    },
  ],
}

describe('SoftwareDevelopmentIcons component', () => {
  it('should render correctly', () => {
    const { container } = render(SoftwareDevelopmentIcons, {
      stubs: ['client-only'],
    })

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with icons array', () => {
    const { html } = render(SoftwareDevelopmentIcons, {
      props,
      stubs: ['client-only'],
    })

    expect(html()).toContain(props.icons[0].className)
  })
})
