import 'regenerator-runtime'
import { shallowMount } from '@vue/test-utils'
import ReadForm from '@/components/Ebook/ReadForm'

describe('ReadForm component', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(ReadForm, {
      stubs: {
        Learn: {
          render(h) { return h('div') },
        },
        BaseInput: {
          render(h) { return h('div') },
        },
      },
      computed: {
        isValid: () => true,
      },
      mocks: {
        $v: {
          name: '',
        },
      },
    })
  })

  it('should render correctly with no data', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should generate $emit event when submit button is clicked', () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
  })

  it('should return base64 when call promise toBase64 with blob', () => {
    const blob = new Blob(['blob'], { type: 'text/plain' })
    const promise = wrapper.vm.toBase64(blob)
    expect(promise).toBeInstanceOf(Promise)
    // eslint-disable-next-line jest/no-test-return-statement
    return promise.then(base64 => {
      expect(base64).toBe('data:text/plain;base64,YmxvYg==')
    })
  })

  it('should return null when call toBase64 without param', () => {
    const promise = wrapper.vm.toBase64()
    expect(promise).toBeNull()
  })
})
