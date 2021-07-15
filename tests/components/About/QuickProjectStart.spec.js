import 'regenerator-runtime'
import { mount, shallowMount } from '@vue/test-utils'
import QuickProjectStart from '@/components/About/QuickProjectStart'

describe('QuickProjectStart', () => {
  let wrapper = null
  let mockShow = null

  beforeEach(() => {
    wrapper = mount(QuickProjectStart)
    mockShow = jest.fn()
  })

  afterEach(() => {
    wrapper = null
    mockShow = null
  })

  it('correctly length of elements in DOM', () => {
    const contentItems = wrapper.findAll('.quickProjectStart__list-item')
    expect(contentItems).toHaveLength(5)
  })

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('if call method "show" and ref modalOrderProjectFromUs is undefined > "show" method in ref modalOrderProjectFromUs not call', () => {
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalOrderProjectFromUs exist > "show" method in ref modalOrderProjectFromUs call', () => {
    wrapper = shallowMount(QuickProjectStart, {
      stubs: {
        ModalOrderProjectFromUs: {
          render(h) { return h('div') },
          methods: {
            show: mockShow,
          },
        },
      },
    })
    wrapper.vm.show()
    expect(mockShow).toHaveBeenCalledTimes(1)
  })
})
