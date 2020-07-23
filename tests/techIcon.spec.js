import { mount } from '@vue/test-utils';

import TechIcon from '@/components/IconsGroup/tech-icon';

describe('TechIcon component', () => {
  let wrapper;
  const props = {
    classPrefix: 'vue',
    title: 'Vue tech'
  };

  beforeEach(() => {
    wrapper = mount(TechIcon, {
      propsData: props
    });
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Component renders a props title', () => {
    const icon = wrapper.props();
    expect(icon.title).toBe(props.title);
  });

  test('Component have dynamic class', () => {
    const icon = wrapper.findAll(`.tech-icon__logo--${props.classPrefix}`);
    expect(icon.length).toBe(1);
  });

  test('Component contain base class', () => {
    expect(wrapper.classes()).toContain('tech-icon');
  });

  test('Component html includes', () => {
    expect(wrapper.html().includes(props.title)).toBeTruthy();
  });
});
