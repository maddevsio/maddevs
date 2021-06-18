import { render } from '@testing-library/vue'
import ModalGetExpertAdvice from '@/components/core/modals/ModalGetExpertAdvice'
import formBaseProps from '../../../__mocks__/formBaseProps'

const mocks = formBaseProps
mocks.$v.questionsOnItConsulting = {
  $touch: jest.fn(),
}

describe('ModalGetExpertAdvice component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalGetExpertAdvice, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
