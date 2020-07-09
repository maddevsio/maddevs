import {
  mount
} from '@vue/test-utils';
import CaseStudies from '@/components/About/CaseStudies';
import BannerContainer from '@/containers/BannerContainer';

describe('CaseStudies component', () => {
  let wrapper;
  const projects = [
    {
      projectName: 'nambafood',
      logoImg: 'nambafoodColored',
      link: 'https://blog.maddevs.io/namba-food-startup-e6564e66806d',
      contributionWidgetColors: ['#ec1c24', '#96969c'],
      projectBackground: 'nambafoodBackground',
      projectColor: '#f8f7f6',
      projectTitle: 'Contactless Delivery Service',
      projectDescription:
        'Mad Devs created the Namba Food delivery service from scratch. The apps for couriers, end users placing orders and business owners work as a seamless system, ensuring a smooth delivery process for food and other goods.'
    },
    {
      projectName: 'teacherly',
      logoImg: 'teacherlyColored',
      link: 'https://blog.maddevs.io/teacherly-provides-collaboration-platform-to-70-000-teachers-88631cc5195f',
      contributionWidgetColors: ['#ec1c24', '#fff'],
      projectBackground: 'teacherlyBackground',
      projectColor: '#56448e',
      projectTitle: 'EdTech collaboration platform',
      projectDescription:
        'Mad Devs improved the collaboration experience for teachers and students by the feedback-driven development of the Teacherly educational platform.'
    },
    {
      projectName: 'guardrails',
      logoImg: 'guardrailsColored',
      link: 'https://blog.maddevs.io/guardrails-helps-800-development-teams-to-establish-devsecops-with-automated-security-reviews-806c3c1d516b',
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
      link: 'https://blog.maddevs.io/building-new-public-transport-habits-in-vietnam-with-godee-f7c4da25efc5',
      contributionWidgetColors: ['#000', '#000'],
      projectBackground: 'godeeBackground',
      projectColor: '#ff6A01',
      projectTitle: 'Mass transportation company',
      projectDescription:
        'Mad Devs helped to automate bus transportation in Vietnam by creating feature-rich GoDee applications for both commuters and bus drivers.'
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

  test('should have Banner parent component ', () => {
    const $route = {
      path: '/projects'
    };

    wrapper = mount(CaseStudies, {
      mocks: {
        $route
      },
      parentComponent: BannerContainer
    });

    expect(wrapper.vm.$parent.$options.name).toBe('Banner');
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
    const img = wrapper.findAll('.single-project__logo');
    expect(img.length).toBe(8);
  });
});
