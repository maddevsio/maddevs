import { render, screen } from '@testing-library/vue'
import UICustomersList from '@/components/shared/UICustomersList'

const props = {
  customers: ['topica'],
  light: true,
  iconBackground: 'rgb(255, 255, 255)',
}

describe('UICustomersList', () => {
  it('should render correctly', () => {
    const { container } = render(UICustomersList, {
      props,
    })
    const iconWrapper = screen.getByTestId('icon-wrapper')

    expect(iconWrapper.style.backgroundColor).toBe(props.iconBackground)
    expect(container).toMatchSnapshot()
  })
})
