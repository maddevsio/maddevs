import { mount } from '@vue/test-utils';

import RadioButton from '@/components/Careers/RadioButton';
import CareersForm from '@/components/Careers/CareersForm';

describe('RadioButton component', () => {
  let wrapper;
  let props = {
    radio: {
      id: 'intern',
      name: 'position',
      labelText: 'Senior,'
    }
  };

  beforeEach(() => {
    wrapper = mount(RadioButton, {
      propsData: props,
      parentComponent: CareersForm
    });
  });

  test("is Vue's instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should have CareersForm parent component ', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('CareersForm');
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should not render .last-additional-description if id props is not intern', () => {
    props = {
      radio: {
        ...props.radio,
        id: 'senior'
      }
    };

    wrapper = mount(RadioButton, {
      propsData: props
    });

    const container = wrapper.findAll('.radio').at(0);
    expect(container.classes()).not.toContain('last-additional-description');
  });

  test('should test change emit', () => {
    wrapper = mount(RadioButton, {
      propsData: props
    });
    const id = 'senior';
    wrapper.vm.$emit('change', id);
    expect(wrapper.emitted().change).toBeTruthy();
    expect(wrapper.emitted().change.length).toBe(1);
    expect(wrapper.emitted().change).toStrictEqual([[id]]);
  });
});
