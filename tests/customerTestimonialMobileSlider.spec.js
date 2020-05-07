import {
  mount
} from '@vue/test-utils';
import CustomerTestimonialMobileSlider from '@/components/About/CustomerTestimonialMobileSlider';

describe('Customer Testimonials Mobile Slider', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CustomerTestimonialMobileSlider, {
      propsData: {
        testimonials: [
          {
            customerProject: 'teacherly',
            customerImageName: 'atif'
          },
          {
            customerProject: 'veeqo',
            customerImageName: 'daniel'
          },
          {
            customerProject: 'guardrails',
            customerImageName: 'stefan'
          }
        ] 
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
    expect(wrapper.props().testimonials).toStrictEqual(
      [
        {
          customerProject: 'teacherly',
          customerImageName: 'atif'
        },
        {
          customerProject: 'veeqo',
          customerImageName: 'daniel'
        },
        {
          customerProject: 'guardrails',
          customerImageName: 'stefan'
        }
      ]  
    );
  });

  it('check swiper option', () => {
    expect(wrapper.vm.$data.swiperOption.slidesPerView).toBe('auto');
    expect(wrapper.vm.$data.swiperOption.spaceBetween).toBe(30);
  });

  test('correctly length of slider items', () => {
    let swiperSlide = wrapper.findAll('.swiper-slide');
    expect(swiperSlide).toHaveLength(3);
  });
});
