import { mount } from '@vue/test-utils'
import { render, fireEvent, screen } from '@testing-library/vue'
import UIRadioButtons from '@/components/shared/UIRadioButtons'

const props = {
  options: [{ label: 'some label', value: 1 }],
}

describe('UIRadioButtons', () => {
  it('should render correctly', () => {
    const { container } = render(UIRadioButtons, {
      props,
    })

    expect(screen.getByText(props.options[0].label)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with empty array', () => {
    const { container } = render(UIRadioButtons)

    expect(screen.queryByText(props.options[0].label)).toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should not handle click disabled', async () => {
    const { emitted } = render(UIRadioButtons, {
      props,
    })

    const btn = screen.getByText(props.options[0].label)
    await fireEvent.click(btn)
    await fireEvent.click(btn)
    expect(emitted().input).toHaveLength(2)
  })

  it('should correctly reset data after calling reset method', () => {
    const wrapper = mount(UIRadioButtons, { props })
    wrapper.vm.$data.active = { ...props.options[0] }
    wrapper.vm.reset()

    expect(wrapper.vm.$data.active).toBeNull()
  })
})
