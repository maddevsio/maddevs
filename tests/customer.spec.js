import { mount } from '@vue/test-utils';

import Customer from '@/components/Projects/Customer';
import Customers from '@/components/Projects/Customers';

describe('customer component', () => {
  let wrapper;
  const props = {
    customer: {
      imgName: 'godee',
      industry: 'Transportation',
    },
  };

  beforeEach(() => {
    wrapper = mount(Customer, {
      propsData: props,
      parentComponent: Customers,
    });
  });

  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have Customers parent component', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('Customers');
  });

  it('should pass correct props', () => {
    expect(wrapper.props().customer).toStrictEqual(props.customer);
  });
});
