import RadioList from '@/components/ui/radio-list'
import { fireEvent, render, screen } from '@testing-library/vue'

describe('radio buttons list', () => {
  const props = {
    inputId: 'input id',
    emitMethodName: 'methodName',
    fieldName: 'field name',
    sectionIsRequired: true,
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
    const { container } = render(RadioList, {
      props,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly call function on click', async () => {
    const { emitted } = render(RadioList, {
      props,
    })

    const elements = screen.getAllByTestId('test-radio-buttons')
    fireEvent.click(elements[0])
    fireEvent.click(elements[1])

    expect(emitted().methodName).toHaveLength(2)
    expect(emitted().methodName[0][0]).toBe(props.options[0].text)
    expect(emitted().methodName[1][0]).toBe(props.options[1].text)
  })
})
