import { render, fireEvent, screen } from '@testing-library/vue'
import BaseInput from '@/components/core/forms/BaseInput'

describe('BaseInput', () => {
  const props = {
    name: 'input',
    label: 'Custom label',
    placeholder: 'custom placeholder',
    value: '123',
    validation: {
      $touch: jest.fn(),
    },
  }

  it('should render correctly', () => {
    const { container } = render(BaseInput, {
      props,
    })

    const input = screen.getByTestId(`test-base-form-${props.name}`)
    expect(input).not.toBeNull()
    expect(input.value).toBe(props.value)
    expect(input.placeholder).toBe(props.placeholder)
    expect(screen.getByText(props.label)).not.toBeNull()

    expect(container).toMatchSnapshot()
  })

  it('should correctly emitted input event', async () => {
    render(BaseInput, {
      props,
    })

    const input = screen.getByTestId(`test-base-form-${props.name}`)
    await fireEvent.update(input, { target: { value: 'new value' } })
    expect(props.validation.$touch).toHaveBeenCalledTimes(1)
  })

  it('should correctly emitted input event without touch', async () => {
    props.validation = undefined

    render(BaseInput, {
      props,
    })

    const input = screen.getByTestId(`test-base-form-${props.name}`)
    await fireEvent.update(input, { target: { value: 'new value' } })
    expect(props.validation).toBeUndefined()
  })

  it('should correctly render error', async () => {
    props.validation = {
      $dirty: true,
      $params: {
        required: {
          type: 'required',
        },
      },
      required: false,
    }

    render(BaseInput, {
      props,
    })

    expect(screen.getByText('This field is required.')).not.toBeNull()
  })

  it('should correctly render maxLength error', async () => {
    props.validation = {
      $dirty: true,
      $params: {
        maxLength: {
          type: 'maxLength',
          max: 50,
        },
      },
      maxLength: false,
    }

    render(BaseInput, {
      props,
    })

    expect(screen.getByText('Sorry, the number of characters in this field should not exceed 50.')).not.toBeNull()
  })
})
