import { render } from '@testing-library/vue'
import ModalInfrastructureAudit from '@/components/core/modals/ModalInfrastructureAudit'

describe('ModalInfrastructureAudit component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalInfrastructureAudit)

    expect(container).toMatchSnapshot()
  })
})
