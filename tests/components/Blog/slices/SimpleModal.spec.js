import Modal from '@/components/Blog/slices/SimpleModal'
import { render } from '@testing-library/vue'

describe('SimpleModal component', () => {
  it('should render correctly', () => {
    const { container } = render(Modal, {
      props: {
        components: [],
      },
    })

    expect(container).toMatchSnapshot()
  })
})
