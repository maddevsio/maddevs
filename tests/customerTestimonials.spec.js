import { mount } from '@vue/test-utils';
import CustomerTestimonials from '@/components/About/CustomerTestimonials';

describe('customer Testimonials', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CustomerTestimonials, {
      stubs: ['client-only'],
    });
  });

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a mounted hook', () => {
    expect(typeof CustomerTestimonials.mounted).toBe('function');
  });

  it('sets the correct default data', () => {
    expect(typeof CustomerTestimonials.data).toBe('function');
  });

  it('widget show in DOM when page load', () => {
    const widget = wrapper.findAll('.clutch-widget');
    expect(widget).toBeTruthy();
  });

  it('itemsTextContent must contain three elements', () => {
    expect(wrapper.vm.$data.testimonials).toHaveLength(3);
  });

  it('correctly length of elements in DOM', () => {
    const contentItems = wrapper.findAll('.customer-testimonials__testimonials-item');
    expect(contentItems).toHaveLength(3);
  });
});
