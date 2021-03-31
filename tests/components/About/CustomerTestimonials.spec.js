import CustomerTestimonials from '@/components/About/CustomerTestimonials'
import { fireEvent, render, screen } from '@testing-library/vue'

describe('customer Testimonials', () => {
  it('is a Vue instance', () => {
    const { container } = render(CustomerTestimonials, {
      stubs: ['client-only'],
    })

    expect(screen.getByText('Daniel Vartanov,')).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('widget show in DOM when page load', () => {
    const { container } = render(CustomerTestimonials, {
      stubs: ['client-only'],
    })

    const widget = container.getElementsByClassName('.clutch-widget')
    expect(widget).toBeTruthy()
  })
  it('correctly length of elements in DOM', () => {
    const { container } = render(CustomerTestimonials, {
      stubs: ['client-only'],
    })

    const contentItems = container.querySelectorAll('.customer-testimonials__testimonials-item')
    expect(contentItems).toHaveLength(3)
  })

  it('correctly call script after mounting', async () => {
    const { getAllByTestId } = render(CustomerTestimonials, {
      stubs: ['client-only'],
    })

    await fireEvent.scroll(global, { target: { scrollY: 100 } })
    expect(getAllByTestId('test-clutch-script')).toHaveLength(4)
  })
})
