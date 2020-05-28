import {
  mount
} from '@vue/test-utils';

import RadioList from '@/components/ui/radio-list';

describe('Radio buttons list', () => {
  let wrapper;
  const props = {
    inputId: 'input id',
    emitMethodName: 'methodName',
    fieldName: 'field name',
    sectionIsRequired: true,
    options: [
      {
        id: 'digital-ocean',
        text: 'Digital Ocean'
      },
      {
        id: 'other',
        text: 'Other'
      }
    ]
  };

  beforeEach(() => {
    wrapper = mount(RadioList, {
      propsData: props
    });
  });

  // ------ IMPORTANT ----- //
  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a functions', () => {
    expect(typeof RadioList.methods.sendSelectedValue).toBe('function');
  });

  test('correctly props data', () => {
    expect(wrapper.props().inputId).toBe(props.inputId);
    expect(wrapper.props().emitMethodName).toBe(props.emitMethodName);
    expect(wrapper.props().fieldName).toBe(props.fieldName);
    expect(wrapper.props().sectionIsRequired).toBe(props.sectionIsRequired);
    expect(wrapper.props().options).toBe(props.options);
  });

  test('options must contain three elements', () => {
    expect(wrapper.vm.$props.options).toHaveLength(2);
  });

  test('correctly length of elements in DOM', () => {
    let contentItems = wrapper.findAll('.radio-buttons__radio-label');
    expect(contentItems).toHaveLength(2);
  });

  test('emits called with arguments', () => {
    const selectedValue = 'Digital Ocean';

    wrapper.vm.sendSelectedValue(selectedValue);

    expect(wrapper.emitted()).toBeTruthy();
    expect(wrapper.emitted()[props.emitMethodName]).toEqual([[selectedValue]]);
  });
});
