import { render } from '@testing-library/vue'
import ModalGetYourTrustedItPartner from '@/components/core/modals/ModalGetYourTrustedItPartner'

describe('ModalGetYourTrustedItPartner component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalGetYourTrustedItPartner)

    expect(container).toMatchSnapshot()
  })
})
