import { render, fireEvent, screen } from '@testing-library/vue'
import FormCheckboxes from '@/components/ui/form-checkboxes.vue'

const INPUT_ID = 'some-id'

describe('formCheckboxes component', () => {
  it('should render correctly with slot', () => {
    const { container } = render(FormCheckboxes, {})

    expect(container).toMatchSnapshot()
  })

  it('should render correctly with id prop', () => {
    const { container } = render(FormCheckboxes, {
      props: {
        inputId: INPUT_ID,
      },
    })

    const result = screen.getByText('I confirm that I have read and accepted')
    expect(result).not.toBeNull()
    expect(result.outerHTML).toContain(`for="privacy-policy-${INPUT_ID}`)
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle click marketing-communications checkbox', async () => {
    const { getByTestId, emitted } = render(FormCheckboxes)
    const checkbox = getByTestId('test-form-checkbox-input')
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(false)
    expect(emitted().getDiscountOffersCheckboxState).toHaveLength(2)
  })

  it('should correctly handle click privacy policy checkbox', async () => {
    const { getByTestId, emitted } = render(FormCheckboxes, {})
    const checkbox = getByTestId('test-privacy-policy-checkbox-input')
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    expect(emitted().getPrivacyCheckboxState).toHaveLength(3)
  })
})
