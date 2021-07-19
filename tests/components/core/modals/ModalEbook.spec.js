import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import ModalEbook from '@/components/core/modals/ModalEbook'

describe('ModalEbook component', () => {
  let wrapper = null
  let mockShow = null
  let mockClose = null

  beforeEach(() => {
    wrapper = shallowMount(ModalEbook)
    mockShow = jest.fn()
    mockClose = jest.fn()
  })

  afterEach(() => {
    mockShow = null
    mockShow = null
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('if call method "show" and ref modalEbook is undefined > "show" method in ref modalEbook not call', () => {
    wrapper = shallowMount(ModalEbook)
    wrapper.vm.show()
    expect(mockShow).not.toHaveBeenCalled()
  })

  it('if call method "show" and ref modalEbook exist > "show" method in ref modalEbook call', () => {
    wrapper = shallowMount(ModalEbook, {
      stubs: {
        Modal: {
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

  it('if call method "close" and ref modalEbook is undefined > "close" method in ref modalEbook not call', () => {
    wrapper = shallowMount(ModalEbook)
    wrapper.vm.close()
    expect(mockClose).not.toHaveBeenCalled()
  })

  it('if call method "close" and ref modalEbook exist > "close" method in ref modalEbook call', () => {
    wrapper = shallowMount(ModalEbook, {
      stubs: {
        Modal: {
          render(h) { return h('div') },
          methods: {
            close: mockClose,
          },
        },
      },
    })
    wrapper.vm.close()
    expect(mockClose).toHaveBeenCalledTimes(1)
  })
})
