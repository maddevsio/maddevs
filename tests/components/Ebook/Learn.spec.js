import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import Learn from '@/components/Ebook/Learn'

describe('Learn component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Learn, {
      stubs: {
        Learn: {
          render(h) { return h('div') },
        },
      },
    })
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
