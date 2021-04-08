import { render, fireEvent, screen } from '@testing-library/vue'
import ModalContactMe from '@/components/core/modals/ModalContactMe'

const mocks = {
  $v: {
    fullName: {
      $touch: jest.fn(),
    },
    company: {
      $touch: jest.fn(),
    },
    email: {
      $touch: jest.fn(),
    },
    phoneNumber: {
      $touch: jest.fn(),
    },
    description: {
      $touch: jest.fn(),
    },
    validationGroup: {
      $invalid: false,
    },
    $reset: jest.fn(),
  },

  $store: {
    dispatch: jest.fn(),
  },

}

describe('ModalContactMe component', () => {
  it('should render correctly', () => {
    const { container } = render(ModalContactMe, {
      mocks,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct call handler', async () => {
    render(ModalContactMe, {
      mocks,
    })

    await fireEvent.update(screen.getByTestId('test-base-form-phone'), '+3 4546-657-9098-7875645342245')
    await fireEvent.update(screen.getByTestId('test-base-form-email'), 'someemail@maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-company'), 'Maddevs.io')
    await fireEvent.update(screen.getByTestId('test-base-form-full-name'), 'John Johnson')

    await fireEvent.click(screen.queryByTestId('test-privacy-policy-checkbox-input'))
    await fireEvent.click(screen.getByText('Сontact Me'))

    await new Promise(resolve => setTimeout(resolve, 1000))
    expect(mocks.$v.$reset).toHaveBeenCalledTimes(1)
  })
})
