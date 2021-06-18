import { render } from '@testing-library/vue'
import ModalGetYourTrustedItPartner from '@/components/core/modals/ModalGetYourTrustedItPartner'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps
mocks.$v.needAssistanceWith = {
  $touch: jest.fn(),
}

describe('ModalGetYourTrustedItPartner component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalGetYourTrustedItPartner, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
