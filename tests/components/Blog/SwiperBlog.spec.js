import SwiperBlog from '@/components/Blog/SwiperBlog'
import { render } from '@testing-library/vue'

describe('swiper Blog component', () => {
  it('should render correctly', () => {
    const { container } = render(SwiperBlog, {
      props: {
        components: [],
      },
    })

    expect(container).toMatchSnapshot()
  })
})
