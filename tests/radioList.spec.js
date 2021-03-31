import { mount } from '@vue/test-utils'

import RadioList from '@/components/shared/UIRadioList'

describe('radio buttons list', () => {
  let wrapper
  const props = {
    id: 'input id',
    label: 'Label',
    required: true,
    options: [
      {
        id: 'digital-ocean',
        text: 'Digital Ocean',
      },
      {
        id: 'other',
        text: 'Other',
      },
    ],
  }

  beforeEach(() => {
    wrapper = mount(RadioList, {
      propsData: props,
    })
  })

  // ------ IMPORTANT ----- //
  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  // --------------------- //

  it('has a functions', () => {
    expect(typeof RadioList.methods.handleSelect).toBe('function')
  })

  it('correctly props data', () => {
    expect(wrapper.props().id).toBe(props.id)
    expect(wrapper.props().options).toBe(props.options)
    expect(wrapper.props().label).toBe(props.label)
    expect(wrapper.props().required).toBe(props.required)
  })

  it('options must contain three elements', () => {
    expect(wrapper.vm.$props.options).toHaveLength(2)
  })

  it('correctly length of elements in DOM', () => {
    const contentItems = wrapper.findAll('.radio-buttons__radio-label')
    expect(contentItems).toHaveLength(2)
  })

  it('emits called with arguments', () => {
    const selectedValue = 'Digital Ocean'

    wrapper.vm.handleSelect(selectedValue)

    expect(wrapper.emitted()).toBeTruthy()
    expect(wrapper.emitted().select).toEqual([[selectedValue]])
  })

  it('has class if sectionIsRequired equal true', () => {
    const div = wrapper.find('.radio-buttons__field-name')
    expect(div.classes()).toContain('required')
  })
})
