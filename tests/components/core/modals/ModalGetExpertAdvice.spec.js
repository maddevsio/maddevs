import { render } from '@testing-library/vue'
import ModalGetExpertAdvice from '@/components/core/modals/ModalGetExpertAdvice'

describe('ModalGetExpertAdvice component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalGetExpertAdvice)

    expect(container).toMatchSnapshot()
  })
})
