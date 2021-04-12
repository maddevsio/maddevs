import Main from '@/components/Cases/yourcast/Main'
import { render } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      stubs: ['NuxtLink'],
      mocks: {
        getMediaFromS3: () => 'img.jpg',
      },
    })
    expect(container).toMatchSnapshot()
  })
})
