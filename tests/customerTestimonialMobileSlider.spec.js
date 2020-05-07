import {
  mount
} from '@vue/test-utils';
import CustomerTestimonialMobileSlider from '@/components/About/CustomerTestimonialMobileSlider';

describe('Customer Testimonials Mobile Slider', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CustomerTestimonialMobileSlider, {
      propsData: {
        testimonials: [{}, {}, {}] 
      }
    })
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('sets the correct data in props', () => {
    expect(wrapper.props().testimonials).toStrictEqual([{}, {}, {}]);
    expect(wrapper.props().testimonials.length).toBeTruthy();
  });
});
