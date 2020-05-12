import {
  mount
} from '@vue/test-utils';

import jest from 'jest';
import SingleProject from '@/components/About/SingleProject';

describe('CaseStudies component', () => {
  let wrapper;
  let props = {
    project: {
      projectName: 'nambafood',
      logoImg: 'nambafoodColored',
      contributionWidgetColors: ['#ec1c24', '#96969c'],
      projectBackground: 'nambafoodBackground',
      projectColor: '#f8f7f6',
      projectTitle: 'Contactless delivery service',
      projectDescription: 'Mad Devs created the Namba Food delivery service from scratch. The apps for couriers, end users placing orders and business owners work as a seamless system, ensuring a smooth delivery process for food and other goods.'
    }
  };

  beforeEach(() => {
    wrapper = mount(SingleProject, {
      propsData: props
    });
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('shoud add contribution-widget__content_mobile-white class if projectName prop equals to guardrails', () => {
    props = {
      project: {
        ...props.project,
        projectName: 'guardrails'
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__content-mobile').at(0);
    expect(widget.classes()).toContain('contribution-widget__content_mobile-white');
  });

  test('shoud not add contribution-widget__content_mobile-white class if projectName prop notnequals to guardrails', () => {
    props = {
      project: {
        ...props.project,
        projectName: 'teacherly'
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__content-mobile').at(0);
    expect(widget.classes()).not.toContain('contribution-widget__content_mobile-white');
  });

  test('.single-project__container shoud contain single-project__container_white-letters-theme class if isWhiteColored computed value will be true', () => {
    props = {
      project: {
        ...props.project,
        projectName: 'teacherly'
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });

    const container = wrapper.findAll('.single-project__container').at(0);
    expect(container.classes()).toContain('single-project__container_white-letters-theme');

    props = {
      project: {
        ...props.project,
        projectName: 'guardrails'
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });
  });

  test('.single-project__container shoud not contain single-project__container_white-letters-theme class if isWhiteColored computed value will be false', () => {
    props = {
      project: {
        ...props.project,
        projectName: 'nambafood'
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });
    
    const container = wrapper.findAll('.single-project__container').at(0);
    expect(container.classes()).not.toContain('single-project__container_white-letters-theme');
  });

  test('shoud pass correct props', () => {
    expect(wrapper.props().project).toStrictEqual(props.project);
  });

  test('shoud contain contribution-widget__img_red class if color will be #ec1c24', () => {
    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).toContain('contribution-widget__img_red');
    expect(widget.classes()).not.toContain('contribution-widget__img_black');
  });

  test('shoud contain contribution-widget__img_black class if color will be #000', () => {
    props = {
      project: {
        ...props.project,
        contributionWidgetColors: ['#000', '#000']
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).not.toContain('contribution-widget__img_red');
    expect(widget.classes()).toContain('contribution-widget__img_black');
  });

  test('shoud add single-project__background_first-project class to .single-project__background if projectName will be nambafood', () => {
    props = {
      project: {
        ...props.project,
        projectName: 'nambafood'
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });
    const background = wrapper.findAll('.single-project__background').at(0);
    expect(background.classes()).toContain('single-project__background_first-project');
  });

  test('shoud not add single-project__background_first-project class to .single-project__background if projectName will be nambafood', () => {
    props = {
      project: {
        ...props.project,
        projectName: 'guardrails'
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });

    const background = wrapper.findAll('.single-project__background').at(0);
    expect(background.classes()).not.toContain('single-project__background_first-project');
  });

  test('shoud contain contribution-widget__img_gray class if color will not be #000 or #ec1c24', () => {
    props = {
      project: {
        ...props.project,
        contributionWidgetColors: ['#fff', '#ccc']
      }
    };

    wrapper = mount(SingleProject, {
      propsData: props
    });

    const widget = wrapper.findAll('.contribution-widget__img').at(0);
    expect(widget.classes()).not.toContain('contribution-widget__img_red');
    expect(widget.classes()).not.toContain('contribution-widget__img_black');
    expect(widget.classes()).toContain('contribution-widget__img_gray');
  });
});
