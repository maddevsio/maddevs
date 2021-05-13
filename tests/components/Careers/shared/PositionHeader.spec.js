import { render } from '@testing-library/vue'
import PositionHeader from '@/components/Careers/shared/PositionHeader'

const store = {
  getters: {
    vacancy: () => ({
      title: 'Title',
      subtitle: 'Subtitle',
      labels: {},
      tags: [],
    }),
  },
}

describe('PositionHeader component', () => {
  it('should render correctly', () => {
    const { container } = render(PositionHeader, {
      store,
    })

    expect(container).toMatchSnapshot()
  })
})
