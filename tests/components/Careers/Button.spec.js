import { render, fireEvent, screen } from '@testing-library/vue'
import Button from '@/components/Careers/shared/Button'

describe('Button component', () => {
  it('should render correctly with slot', () => {
    const { container } = render(Button, {
      slots: {
        default: 'It is a button',
      },
    })

    expect(screen.getByText('It is a button')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without slot', () => {
    const { container } = render(Button)

    expect(screen.queryByText('It is a button')).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with loading prop', () => {
    const { container } = render(Button, {
      props: {
        loading: true,
      },
    })

    expect(screen.queryByText('Waiting...')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle click', async () => {
    const { emitted } = render(Button, {
      slots: {
        default: 'Button',
      },
    })

    const btn = screen.getByText('Button')
    await fireEvent.click(btn)
    expect(emitted().click).toHaveLength(1)
  })

  it('should not handle click if disabled', async () => {
    const { emitted } = render(Button, {
      props: {
        disabled: true,
      },
      slots: {
        default: 'Button',
      },
    })

    const btn = screen.getByText('Button')
    await fireEvent.click(btn)
    expect(emitted().click).not.toBeDefined()
  })
})
