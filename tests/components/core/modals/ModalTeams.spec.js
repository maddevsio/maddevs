import { render } from '@testing-library/vue'
import ModalTeams from '@/components/core/modals/ModalTeams'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps

describe('ModalTeams component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalTeams, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
