import {
  mount
} from '@vue/test-utils';

import Customer from '@/components/Projects/Customer';
import Customers from '@/components/Projects/Customers';

describe('Customer component', () => {
  let wrapper;
  let props = {
    customer: {
      imgName: 'godee',
      industry: 'Transportation'
    }
  };

  beforeEach(() => {
    wrapper = mount(Customer, {
      propsData: props,
      parentComponent: Customers
    });
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should have Customers parent component ', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('Customers');
  });

  test('should pass correct props', () => {
    expect(wrapper.props().customer).toStrictEqual(props.customer);
  });
});
