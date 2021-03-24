import { mount } from '@vue/test-utils';

import RadioList from '@/components/ui/radio-list';

describe('radio buttons list', () => {
  let wrapper;
  const props = {
    inputId: 'input id',
    emitMethodName: 'methodName',
    fieldName: 'field name',
    sectionIsRequired: true,
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
  };

  beforeEach(() => {
    wrapper = mount(RadioList, {
      propsData: props,
    });
  });

  // ------ IMPORTANT ----- //
  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a functions', () => {
    expect(typeof RadioList.methods.sendSelectedValue).toBe('function');
  });

  it('correctly props data', () => {
    expect(wrapper.props().inputId).toBe(props.inputId);
    expect(wrapper.props().emitMethodName).toBe(props.emitMethodName);
    expect(wrapper.props().fieldName).toBe(props.fieldName);
    expect(wrapper.props().sectionIsRequired).toBe(props.sectionIsRequired);
    expect(wrapper.props().options).toBe(props.options);
  });

  it('options must contain three elements', () => {
    expect(wrapper.vm.$props.options).toHaveLength(2);
  });

  it('correctly length of elements in DOM', () => {
    const contentItems = wrapper.findAll('.radio-buttons__radio-label');
    expect(contentItems).toHaveLength(2);
  });

  it('emits called with arguments', () => {
    const selectedValue = 'Digital Ocean';

    wrapper.vm.sendSelectedValue(selectedValue);

    expect(wrapper.emitted()).toBeTruthy();
    expect(wrapper.emitted()[props.emitMethodName]).toEqual([[selectedValue]]);
  });

  it('has class if sectionIsRequired equal true', () => {
    const div = wrapper.find('.radio-buttons__field-name');
    expect(div.classes()).toContain('required');
  });
});
