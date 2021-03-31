import { mount } from '@vue/test-utils'
import ItConsultingContent from '@/components/Services/ItConsultingContent.vue'

describe('itConsultingContent component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ItConsultingContent, {
      stubs: ['client-only'],
      propsData: {
        title: 'Title',
        subtitle: 'Sub title',
        paragraph: 'Paragraph',
      },
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('correctly passed props data', () => {
    expect(wrapper.props().title).toBe('Title')
    expect(wrapper.props().subtitle).toBe('Sub title')
    expect(wrapper.props().paragraph).toBe('Paragraph')
  })
})
