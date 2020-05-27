import { mount } from '@vue/test-utils';

import Button from '@/components/Careers/Button';
import CareersForm from '@/components/Careers/CareersForm';

describe('Button component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Button, {
      parentComponent: CareersForm,
      slots: {
        default: 'Btn text'
      }
    });
  });

  test('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Button slot renders a default button text', () => {
    const btn = wrapper.find('.button');
    expect(btn.text()).toBe('Btn text');
  });

  test('should have CareersForm parent component ', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('CareersForm');
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should test click emit', () => {
    wrapper = mount(Button);
    wrapper.vm.$emit('click');
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
  });
});
