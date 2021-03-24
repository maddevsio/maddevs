import { mount } from '@vue/test-utils';
import Customers from '@/components/Projects/Customers';

describe('customers component', () => {
  let wrapper;
  const customers = [
    {
      className: 'godee-icon',
    },
    {
      className: 'guardrails-icon',
    },
    {
      className: 'teacherly-icon',
    },
    {
      className: 'triggermesh-icon',
    },
    {
      className: 'clutch-icon',
    },
    {
      className: 'eatigo-icon',
    },
    {
      className: 'veeqo-icon',
    },
    {
      className: 'admitad-icon',
    },
    {
      className: 'iotsploit-icon',
    },
    {
      className: 'sir-jonas-icon',
    },
    {
      className: 'progressay-icon',
    },
    {
      className: 'kickoico-icon',
    },
    {
      className: 'nambafood-icon',
    },
    {
      className: 'showmebishkek-icon',
    },
    {
      className: 'mythril-icon',
    },
    {
      className: 'seso-icon',
    },
    {
      className: 'tengri-icon',
    },
    {
      className: 'peklo-icon',
    },
  ];

  beforeEach(() => {
    wrapper = mount(Customers);
  });

  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should check existence of data', () => {
    expect(wrapper.vm.$data.customers).toStrictEqual(customers);
  });
});
