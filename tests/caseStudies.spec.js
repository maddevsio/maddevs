import {
  mount
} from '@vue/test-utils';
import CaseStudies from '@/components/About/CaseStudies';

describe('CaseStudies component', () => {
  let wrapper;
  const projects = [
    {
      projectName: 'nambafood',
      logoImg: 'nambafoodColored',
      link: '/case-studies/namba-food',
      targetBlank: false,
      contributionWidgetColors: ['#ec1c24', '#96969c'],
      projectBackground: 'nambafoodBackground',
      projectColor: '#f8f7f6',
      projectTitle: 'Contactless Delivery Service',
      projectDescription:
        'Mad Devs created the Namba Food delivery service from scratch. The solution orchestrates feature-rich apps for couriers, end-users, and business owners.'
    },
    {
      projectName: 'teacherly',
      logoImg: 'sjmcIcon',
      link: '/case-studies/sir-john-monash-centre',
      targetBlank: true,
      contributionWidgetColors: ['#96969c', '#96969c'],
      projectBackground: 'sjmcBackground',
      projectColor: '#221F20',
      projectTitle: 'Australian National Interpretive Centre',
      projectDescription:
        'Mad Devs engineers helped Sir John Monash Centre to enhance and maintain the BYOD multimedia technology.'
    },
    {
      projectName: 'guardrails',
      logoImg: 'guardrailsColored',
      link: 'https://blog.maddevs.io/guardrails-helps-800-development-teams-to-establish-devsecops-with-automated-security-reviews-806c3c1d516b?source=friends_link&sk=15f4cdb98f9410b27b9d76dfd94ad1d0',
      targetBlank: true,
      contributionWidgetColors: ['#96969c', '#96969c'],
      projectBackground: 'guardrailsBackground',
      projectColor: '#0e1b27',
      projectTitle: 'Cloud cybersecurity service',
      projectDescription:
        'Mad Devs was involved with Guardrails\' security check service as a development contractor with exceptional knowledge of GitHub and GitLab processes.'
    },
    {
      projectName: 'godee',
      logoImg: 'godeeColored',
      link: 'https://blog.maddevs.io/building-new-public-transport-habits-in-vietnam-with-godee-f7c4da25efc5?source=friends_link&sk=3e3f75a7f35f0e4d9d447a19e015330a',
      targetBlank: true,
      contributionWidgetColors: ['#000', '#000'],
      projectBackground: 'godeeBackground',
      projectColor: '#ff6A01',
      projectTitle: 'Convenient shuttle bus service',
      projectDescription: 'Mad Devs helped GoDee with developing feature-rich software to re-invent public mobility by building new smart ways of a daily commute.'
    }
  ];

  beforeEach(() => {
    const $route = {
      path: '/'
    };

    global.$nuxt = {
      $route: {
        name: '/'
      }
    };

    wrapper = mount(CaseStudies, {
      mocks: {
        $route
      }
    });
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('correctly sets the current page\'s default name', () => {
    expect(wrapper.vm.$data.currentPageName).toBe('/');
  });

  test('correctly sets the current page\'s name', () => {
    const $route = {
      path: '/projects'
    };

    wrapper = mount(CaseStudies, {
      mocks: {
        $route
      }
    });

    wrapper.vm.$data.currentPageName = 'projects';
    expect(wrapper.vm.$route.path).toBe('/projects');
    expect(wrapper.vm.$data.currentPageName).toBe('projects');
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data.projects).toStrictEqual(projects);
  });

  test('should render mobile slider', () => {
    let mobileSlider = wrapper.findAll('.projects-mobile-slider');
    expect(mobileSlider).toHaveLength(1);
  });

  test('should render 4 single-projects in the project section', () => {
    let singleProjects = wrapper.findAll('.projects .single-project');
    expect(singleProjects).toHaveLength(4);
  });

  test('should have 16 projects including projects in the slider', () => {
    let sliderSingleProjects = wrapper.findAll('.single-project');
    expect(sliderSingleProjects).toHaveLength(8);
  });

  test('check that the specific images exists', () => {
    const img = wrapper.findAll('.single-project__logo-bg');
    expect(img.length).toBe(8);
  });
});
