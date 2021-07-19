import 'regenerator-runtime'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Banner from '@/components/Ebook/Banner'

describe('Banner component', () => {
  let wrapper = null
  let mockShow = null

  beforeEach(() => {
    wrapper = shallowMount(Banner, {
      stubs: ['NuxtLink'],
    })
    mockShow = jest.fn()
  })

  afterEach(() => {
    mockShow = null
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('if call method "showModalEbook" and ref modalEbook is undefined > "showModalEbook" method in ref modalEbook not call', () => {
    wrapper.vm.showModalEbook()
    expect(mockShow).not.toHaveBeenCalled()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "showModalEbook" and ref modalEbook exist > "showModalEbook" method in ref modalEbook call', () => {
    wrapper = shallowMount(Banner, {
      stubs: {
        NuxtLink: RouterLinkStub,
        ModalEbook: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
    })
    wrapper.vm.showModalEbook()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })
})
