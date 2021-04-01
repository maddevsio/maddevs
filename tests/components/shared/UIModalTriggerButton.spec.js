import { render, fireEvent, screen } from '@testing-library/vue'
import UIModalTriggerButton from '@/components/shared/UIModalTriggerButton'

describe('UIModalTriggerButton', () => {
  const props = {
    label: 'Some button name',
    color: 'red',
  }

  it('should render correctly with slot', () => {
    const { container } = render(UIModalTriggerButton, {
      props,
    })

    expect(screen.getByText(props.label)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle click', async () => {
    const { emitted, getByText } = render(UIModalTriggerButton, {
      props,
    })

    const btn = getByText(props.label)
    await fireEvent.click(btn)
    expect(emitted().click).toHaveLength(1)
  })

  it('should correctly render colour', async () => {
    const { getByText } = render(UIModalTriggerButton, {
      props,
    })

    const btn = getByText(props.label)
    expect(btn.className).toContain('ui-button-modal-trigger--red')
  })
})
