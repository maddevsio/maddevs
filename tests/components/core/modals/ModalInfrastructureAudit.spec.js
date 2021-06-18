import { render } from '@testing-library/vue'
import ModalInfrastructureAudit from '@/components/core/modals/ModalInfrastructureAudit'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps

describe('ModalInfrastructureAudit component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalInfrastructureAudit, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
