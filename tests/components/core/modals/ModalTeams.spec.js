import { render } from '@testing-library/vue'
import ModalTeams from '@/components/core/modals/ModalTeams'

describe('ModalTeams component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalTeams)

    expect(container).toMatchSnapshot()
  })
})
