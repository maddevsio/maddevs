import {
  mount
} from '@vue/test-utils';
import CustomerTestimonials from '@/components/About/CustomerTestimonials';

describe('Customer Testimonials', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CustomerTestimonials);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a mounted hook', () => {
    expect(typeof CustomerTestimonials.mounted).toBe('function');
  });

  it('sets the correct default data', () => {
    expect(typeof CustomerTestimonials.data).toBe('function');
    const defaultData = CustomerTestimonials.data();
    expect(defaultData.pageWasLoaded).toBe(false);
  });

  it('Widget show in DOM when page load', () => {
    let widget = wrapper.find('.clutch-widget');
    expect(widget).toBeTruthy();
  });

  test('itemsTextContent must contain three elements', () => {
    expect(wrapper.vm.$data.testimonials).toHaveLength(3);
  });

  test('correctly length of elements in DOM', () => {
    let contentItems = wrapper.findAll('.customer-testimonials__testimonials-item');
    expect(contentItems).toHaveLength(3);
  });

  it('correctly sets value when mounted', () => {
    expect(wrapper.vm.$data.pageWasLoaded).toBe(true);
  });
});
