import {
  mount
} from '@vue/test-utils';

import ContributionWidget from '@/components/About/ContributionWidget';

describe('ContributionWidget component', () => {
  let wrapper;
  let props = {
    projectName: 'nambafood',
    contributionWidgetColors: []
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

  test('should contain contribution-widget__img_nambafood and contribution-widget__content_nambafood classes if projectName will be nambafood', () => {
    props = {
      ...props,
      projectName: 'nambafood'
    };

    wrapper = mount(ContributionWidget, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).toContain('contribution-widget__img_nambafood');

    const widget_content = wrapper.findAll('.contribution-widget__content').at(0);
    expect(widget_content.classes()).toContain('contribution-widget__content_nambafood');
  });

  test('should contain contribution-widget__img_godee and contribution-widget__content_godee classes if projectName will be godee', () => {
    props = {
      ...props,
      projectName: 'godee'
    };

    wrapper = mount(ContributionWidget, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).toContain('contribution-widget__img_godee');

    const widget_content = wrapper.findAll('.contribution-widget__content').at(0);
    expect(widget_content.classes()).toContain('contribution-widget__content_godee');
  });

  test('should contain contribution-widget__img_guardrails and contribution-widget__content_guardrails classes if projectName will be guardrails', () => {
    props = {
      ...props,
      projectName: 'guardrails'
    };

    wrapper = mount(ContributionWidget, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).toContain('contribution-widget__img_guardrails');

    const widget_content = wrapper.findAll('.contribution-widget__content').at(0);
    expect(widget_content.classes()).toContain('contribution-widget__content_guardrails');
  });

  test('should contain contribution-widget__img_teacherly and contribution-widget__content_teacherly classes if projectName will be teacherly', () => {
    props = {
      ...props,
      projectName: 'teacherly'
    };

    wrapper = mount(ContributionWidget, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).toContain('contribution-widget__img_teacherly');

    const widget_content = wrapper.findAll('.contribution-widget__content').at(0);
    expect(widget_content.classes()).toContain('contribution-widget__content_teacherly');
  });
});
