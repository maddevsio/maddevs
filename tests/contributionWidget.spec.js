import {
  mount
} from '@vue/test-utils';

import ContributionWidget from '@/components/About/ContributionWidget';

describe('ContributionWidget component', () => {
  let wrapper;
  let props = {
    projectName: 'nambafood',
    contributionWidgetColors: ['#ec1c24', '#96969c']
  };

  beforeEach(() => {
    wrapper = mount(ContributionWidget, {
      propsData: props
    });
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('shoud contain contribution-widget__img_red class if color will be #ec1c24', () => {
    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).toContain('contribution-widget__img_red');
    expect(widget.classes()).not.toContain('contribution-widget__img_black');
  });

  test('shoud contain contribution-widget__img_black class if color will be #000', () => {
    props = {
      ...props,
      contributionWidgetColors: ['#000', '#000']
    };

    wrapper = mount(ContributionWidget, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).not.toContain('contribution-widget__img_red');
    expect(widget.classes()).toContain('contribution-widget__img_black');
  });

  test('shoud contain contribution-widget__img_gray class if color will not be #000 or #ec1c24', () => {
    props = {
      ...props,
      contributionWidgetColors: ['#fff', '#ccc']
    };

    wrapper = mount(ContributionWidget, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).not.toContain('contribution-widget__img_red');
    expect(widget.classes()).not.toContain('contribution-widget__img_black');
    expect(widget.classes()).toContain('contribution-widget__img_gray');
  });
});
