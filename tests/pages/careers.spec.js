import { render } from '@testing-library/vue'
import MainCareers from '@/pages/careers.vue'

const mocks = {
  $v: {
    name: {
      $touch: jest.fn(),
    },
    position: {
      $touch: jest.fn(),
    },
    grade: {
      $touch: jest.fn(),
    },
    email: {
      $touch: jest.fn(),
    },
    cvFile: {
    },
    validationGroup: {

    },
  },
  $store: {
    dispatch: jest.fn(),
  },
}

describe('CustomerRates', () => {
  it('should render correctly', () => {
    const { container } = render(MainCareers, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })
})
