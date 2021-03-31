import { fireEvent, render, screen } from '@testing-library/vue'
import UIRadioList from '@/components/shared/UIRadioList'

describe('UIRadioList list', () => {
  const props = {
    id: 'input id',
    label: 'field name',
    required: true,
    options: [
      {
        id: 'digital-ocean',
        text: 'Digital Ocean',
      },
      {
        id: 'other',
        text: 'Other',
      },
    ],
  }

  it('should correctly render', async () => {
    const { container } = render(UIRadioList, {
      props,
    })
    expect(container).toMatchSnapshot()
  })

  it('should correctly render with default props', async () => {
    const { container } = render(UIRadioList)
    expect(container).toMatchSnapshot()
  })

  it('should correctly call function on click', async () => {
    const { emitted } = render(UIRadioList, {
      props,
    })

    const elements = screen.getAllByTestId('test-radio-buttons')
    fireEvent.click(elements[0])
    fireEvent.click(elements[1])

    expect(emitted().select).toHaveLength(2)
    expect(emitted().select[0][0]).toBe(props.options[0])
    expect(emitted().select[1][0]).toBe(props.options[1])
  })
})
