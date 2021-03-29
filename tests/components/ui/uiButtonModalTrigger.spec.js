import { render, fireEvent, screen } from '@testing-library/vue'
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger'

const props = {
  buttonInnerText: 'Some button name',
  isRed: true,
}

describe('uIButton Modal Trigger component', () => {
  it('should render correctly with slot', () => {
    const { container } = render(UIButtonModalTrigger, {
      props,
    })

    expect(screen.getByText(props.buttonInnerText)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle click', async () => {
    const { emitted, getByText } = render(UIButtonModalTrigger, {
      props,
    })

    const btn = getByText(props.buttonInnerText)
    await fireEvent.click(btn)
    expect(emitted().onClick).toHaveLength(1)
  })

  it('should correctly render colour', async () => {
    const { getByText } = render(UIButtonModalTrigger, {
      props,
    })

    const btn = getByText(props.buttonInnerText)
    expect(btn.className).toContain('ui-button-modal-trigger--red')
  })
})
