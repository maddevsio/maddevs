import {
  mount
} from '@vue/test-utils';

import ContributionWidget from '@/components/About/ContributionWidget';

describe('ContributionWidget component', () => {
  let wrapper;
  let props = {
    projectName: 'nambafood',
    contribution: 'contribution text',
    maddevsLogo: 'md-logo-black'
  };

  beforeEach(() => {
    wrapper = mount(ContributionWidget, {
      propsData: props
    });
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('span should contain props text', () => {
    const span = wrapper.findAll('.contribution-widget__content').at(0);
    expect(span.text()).toEqual(`contribution: ${props.contribution}`);
  });

  test('span should contain projectName in class', () => {
    const span = wrapper.findAll('.contribution-widget__content').at(0);
    expect(span.classes()).toContain('contribution-widget__content_nambafood');
  });
});
