import { render, screen, fireEvent } from '@testing-library/vue'
import HeaderMobile from '@/components/core/Header/HeaderMobile'

const props = {
  enablePageScroll: jest.fn(),
}

const stubs = ['NuxtLink']

describe('MobileHeader component', () => {
  it('should render correctly', () => {
    const { container } = render(HeaderMobile, {
      props,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly work on click link handler', () => {
    process.client = true
    const { emitted } = render(HeaderMobile, {
      props,
      stubs,
    })

    const element = screen.queryAllByTestId('test-header-nav-link')

    fireEvent.click(element[0])
    fireEvent.click(element[1])

    expect(emitted()['changed-page']).toHaveLength(2)
    expect(props.enablePageScroll).toHaveBeenCalledTimes(0)
  })
})
