import Main from '@/components/Cases/godee/Main.vue'
import { render } from '@testing-library/vue'
import '../../../__mocks__/intersectionObserverMock'

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')

const mocks = {
  $getMediaFromS3: img => img,
}

describe('Main component', () => {
  it('should render correctly', () => {
    const { container } = render(Main, {
      mocks,
      stubs: ['ClientOnly', 'NuxtLink', 'Footer'],
      container: document.body.appendChild(containerToRender),
    })

    expect(container).toMatchSnapshot()
  })
})
