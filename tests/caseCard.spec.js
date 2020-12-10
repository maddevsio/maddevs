import {
  mount
} from '@vue/test-utils';

import Card from '@/components/Cases/Card.vue';

describe('Card component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Card, {
      propsData: {
        padding: '16px'
      },
      slots: {
        default: 'Main Content'
      }
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
    expect(wrapper.props('padding')).toEqual('16px');
  });

  test('should have correct style', () => {
    const card = wrapper.find('.case_card');
    expect(card.element.style.getPropertyValue('padding')).toEqual('16px');
  });

  test('should have correct data in slot', () => {
    expect(wrapper.html()).toContain('Main Content');
  });
});
