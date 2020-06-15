import {
  mount
} from '@vue/test-utils';
import MeetOurExpertsMobile from '@/components/About/MeetOurExpertsMobile';

describe('Meet Our Experts Mobile Slider', () => {
  let wrapper;
  const props = {
    experts: [
      {
        name: 'Marat Bediev',
        position: 'Senior DevOps',
        image: 'marat',
        linkedin: 'https://www.linkedin.com/in/marat-bediev-a973171b/'
      }
    ]
  };

  beforeEach(() => {
    wrapper = mount(MeetOurExpertsMobile, {
      propsData: props
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('sets the correct data in props', () => {
    expect(wrapper.props().experts).toStrictEqual(props.experts);
  });

  test('correctly length of slider items', () => {
    let swiperSlide = wrapper.findAll('.swiper-slide');
    expect(swiperSlide).toHaveLength(1);
  });
});
