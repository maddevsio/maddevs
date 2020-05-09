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
      contributionVidgetImg: 'maddevsLogoWithoutText',
      projectBackground: 'nambafoodBackground',
      projectColor: '#f8f7f6',
      projectTitle: 'Contactless delivery service',
      projectDescription: 'Mad Devs created the Namba Food delivery service from scratch. The apps for couriers, end users placing orders and business owners work as a seamless system, ensuring a smooth delivery process for food and other goods.'
    },
    {
      projectName: 'teacherly',
      logoImg: 'teacherlyColored',
      contributionVidgetImg: 'maddevsLogoWithoutText',
      projectBackground: 'teacherlyBackground',
      projectColor: '#56448E',
      projectTitle: 'EdTech collaboration platform',
      projectDescription: 'Mad Devs improved the collaboration experience for teachers and students by the feedback-driven development of the Teacherly educational platform.'
    },
    {
      projectName: 'guardrails',
      logoImg: 'guardrailsColored',
      contributionVidgetImg: 'maddevsLogoWithoutText',
      projectBackground: 'guardrailsBackground',
      projectColor: '#0E1B27',
      projectTitle: 'Cloud cybersecurity service',
      projectDescription: 'Mad Devs was involved with Guardrails\' security check service as a development contractor with exceptional knowledge of GitHub and GitLab processes.'
    },
    {
      projectName: 'godee',
      logoImg: 'godeeColored',
      contributionVidgetImg: 'maddevsLogoWithoutText',
      projectBackground: 'godeeBackground',
      projectColor: '#FF6A01',
      projectTitle: 'Mass transportation company',
      projectDescription: 'Mad Devs helped to automate bus transportation in Vietnam by creating feature-rich GoDee applications for both commuters and bus drivers.'
    }
  ];

  beforeEach(() => {
    wrapper = mount(CaseStudies);
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
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

  test('should have 8 projects including projects in the slider', () => {
    let sliderSingleProjects = wrapper.findAll('.single-project');
    expect(sliderSingleProjects).toHaveLength(8);
  });

  test('check that the specific images exists', () => {
    const img = wrapper.findAll('.single-project__logo');
    expect(img.length).toBe(8);
  });
});
