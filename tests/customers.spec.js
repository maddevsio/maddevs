import {
  mount
} from '@vue/test-utils';
import Customers from '@/components/Projects/Customers';

describe('Customers component', () => {
  let wrapper;
  let customers = [
    {
      imgName: 'godee',
      industry: 'Transportation'
    },
    {
      imgName: 'guardrails',
      industry: 'Security'
    },
    {
      imgName: 'teacherly',
      industry: 'EdTech'
    },
    {
      imgName: 'triggermesh',
      industry: 'CloudTech'
    },
    {
      imgName: 'clutch',
      industry: 'AdTech'
    },
    {
      imgName: 'eatigo',
      industry: 'Logistics'
    },
    {
      imgName: 'veeqo',
      industry: 'Ecommerce'
    },
    {
      imgName: 'admitad',
      industry: 'AdTech'
    },
    {
      imgName: 'iotsploit',
      industry: 'IoT'
    },
    {
      imgName: 'sir_jonas',
      industry: 'Tourism'
    },
    {
      imgName: 'progressay',
      industry: 'EdTech'
    },
    {
      imgName: 'kickoico',
      industry: 'Blockchain'
    },
    {
      imgName: 'namba_food',
      industry: 'Logistics'
    },
    {
      imgName: 'showmebishkek',
      industry: 'Tourism'
    },
    {
      imgName: 'mythril',
      industry: 'Blockchain'
    },
    {
      imgName: 'seso',
      industry: 'Entertainment'
    },
    {
      imgName: 'tengri',
      industry: 'FinTech'
    },
    {
      imgName: 'peklo',
      industry: 'AdTech'
    }
  ];

  beforeEach(() => {
    wrapper = mount(Customers);
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data.customers).toStrictEqual(customers);
  });
});
