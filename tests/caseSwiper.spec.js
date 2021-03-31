import { mount } from '@vue/test-utils'
import Swiper from '@/components/Cases/shared/Swiper'

describe('swiper', () => {
  let wrapper
  const props = {
    components: [
      {
        fileName: 'admin',
        pictureFolder: 'nambafood',
        fileExtension: 'jpg',
      },
      {
        fileName: 'dashboard',
        pictureFolder: 'nambafood',
        fileExtension: 'jpg',
      },
    ],
  }

  beforeEach(() => {
    wrapper = mount(Swiper, {
      propsData: props,
    })
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('sets the correctly data', () => {
    expect(wrapper.vm.$data.swiperOptionTop).toEqual({
      loop: false,
      loopedSlides: 0,
      spaceBetween: 10,
      grabCursor: true,
    })
    expect(wrapper.vm.$data.swiperOptionThumbs).toEqual({
      loop: false,
      loopedSlides: 0,
      spaceBetween: 8,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.1,
      slideToClickedSlide: true,
    })
  })
})
