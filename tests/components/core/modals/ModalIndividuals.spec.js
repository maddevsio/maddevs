import { render } from '@testing-library/vue'
import ModalIndividuals from '@/components/core/modals/ModalIndividuals'

describe('ModalIndividuals component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalIndividuals)

    expect(container).toMatchSnapshot()
  })
})
