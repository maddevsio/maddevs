import {
  mount
} from '@vue/test-utils';

import ListTechnologiesItem from '@/components/Cases/ListTechnologiesItem';

describe('List technologies item', () => {
  let wrapper;
  let props = {
    techName: 'techName',
    className: 'iconClassName'
  };

  beforeEach(() => {
    wrapper = mount(ListTechnologiesItem, {
      propsData: props
    });
  });

  // ------ IMPORTANT ----- //
  test('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props);
  });

  test('should have correct content in child elements', () => {
    const itemTechName = wrapper.find('.case_technologies-item__tech-name');
    const itemTechIcon = wrapper.find('.case_technologies-item__tech-icon');
    expect(itemTechName.text()).toEqual('techName');
    expect(itemTechIcon.classes()).toContain('iconClassName');
  });
});
