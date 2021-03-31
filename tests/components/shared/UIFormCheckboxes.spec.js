import { render, fireEvent, screen } from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import UIFormCheckboxes from '@/components/shared/UIFormCheckboxes'

describe('UIFormCheckboxes', () => {
  const props = {
    id: 'custom-id',
  }

  it('should render correctly with slot', () => {
    const { container } = render(UIFormCheckboxes, {})
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with id prop', () => {
    const { container } = render(UIFormCheckboxes, {
      props,
    })

    const result = screen.getByText('I confirm that I have read and accepted')
    expect(result).not.toBeNull()
    expect(result.outerHTML).toContain(`for="privacy-policy-${props.id}`)
    expect(container).toMatchSnapshot()
  })

  it('should correctly handle click marketing-communications checkbox', async () => {
    const { getByTestId, emitted } = render(UIFormCheckboxes)
    const checkbox = getByTestId('test-form-checkbox-input')
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(false)
    expect(emitted().change).toHaveLength(2)
  })

  it('should correctly handle click privacy policy checkbox', async () => {
    const { getByTestId, emitted } = render(UIFormCheckboxes, {})
    const checkbox = getByTestId('test-privacy-policy-checkbox-input')
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(false)
    fireEvent.click(checkbox)
    expect(emitted().change).toHaveLength(3)
  })

  it('should correctly reset data after calling reset method', () => {
    const wrapper = mount(UIFormCheckboxes, { props })
    wrapper.vm.$data.privacy = true
    wrapper.vm.$data.discountOffers = true

    wrapper.vm.reset()

    expect(wrapper.vm.$data.privacy).toBeFalsy()
    expect(wrapper.vm.$data.discountOffers).toBeFalsy()
  })
})
