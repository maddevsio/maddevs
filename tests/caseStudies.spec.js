import { mount } from '@vue/test-utils'
import CaseStudies from '@/components/About/CaseStudies'

describe('caseStudies component', () => {
  let wrapper
  const projects = [
    {
      projectName: 'nambafood',
      logoImg: 'nambafood-icon',
      logoWidth: 104,
      maddevsLogo: 'md-logo-black',
      link: '/case-studies/namba-food/',
      targetBlank: false,
      projectBackground: 'nambafoodBackground',
      fileExtension: 'png',
      projectColor: '#f8f7f6',
      projectTitle: 'Contactless Delivery Service',
      projectDescription:
        'Mad Devs created the Namba Food delivery service from scratch. The solution orchestrates feature-rich apps for couriers, end-users, and business owners.',
      contribution: 'Backend, Infrastructure, Frontend',
      alt: 'Namba Food Contactless Delivery Service`s Logo.',
    },
    {
      projectName: 'sjmc',
      logoImg: 'sjmc-icon',
      logoWidth: 91.5,
      maddevsLogo: 'md-logo-white',
      link: '/case-studies/sir-john-monash-centre/',
      targetBlank: false,
      projectBackground: 'sjmcBackground',
      fileExtension: 'jpg',
      projectColor: '#221F20',
      projectTitle: 'Australian National Interpretive Centre',
      projectDescription:
        'Mad Devs engineers helped Sir John Monash Centre to enhance and maintain the BYOD multimedia technology.',
      contribution: 'Backend, Infrastructure, Frontend',
      alt: 'General John Monash The Australian War Memorial`s Logo.',
    },
    {
      projectName: 'guardrails',
      logoImg: 'guardrails-icon',
      logoWidth: 174,
      maddevsLogo: 'md-logo-white',
      link:
        'https://blog.maddevs.io/guardrails-helps-800-development-teams-to-establish-devsecops-with-automated-security-reviews-806c3c1d516b?source=friends_link&sk=15f4cdb98f9410b27b9d76dfd94ad1d0',
      targetBlank: true,
      projectBackground: 'guardrailsBackground',
      fileExtension: 'png',
      projectColor: '#0e1b27',
      projectTitle: 'Cloud cybersecurity service',
      projectDescription:
        "Mad Devs was involved with Guardrails' security check service as a development contractor with exceptional knowledge of GitHub and GitLab processes.",
      contribution: 'Backend, Infrastructure, Frontend',
      alt: 'Guardrails Cloud CyberSecurity Services Logo.',
    },
    {
      projectName: 'godee',
      logoImg: 'godee-icon',
      logoWidth: 121,
      maddevsLogo: 'md-logo-black',
      link: '/case-studies/godee/',
      targetBlank: false,
      projectBackground: 'godeeBackground',
      fileExtension: 'png',
      projectColor: '#ff6A01',
      projectTitle: 'Convenient shuttle bus service',
      projectDescription:
        'Mad Devs helped GoDee with developing feature-rich software to re-invent public mobility by building new smart ways of a daily commute.',
      contribution: 'Backend, Infrastructure, Mobile Apps',
      alt: 'GoDee Bus Transportation Services Logo.',
    },
  ]

  beforeEach(() => {
    const $route = {
      path: '/',
    }

    global.$nuxt = {
      $route: {
        name: '/',
      },
    }

    wrapper = mount(CaseStudies, {
      mocks: {
        $route,
      },
    })
  })

  it("is Vue's instance", () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it("correctly sets the current page's default name", () => {
    expect(wrapper.vm.$data.currentPageName).toBe('/')
  })

  it("correctly sets the current page's name", () => {
    const $route = {
      path: '/projects',
    }

    wrapper = mount(CaseStudies, {
      mocks: {
        $route,
      },
    })

    wrapper.vm.$data.currentPageName = 'projects'
    expect(wrapper.vm.$route.path).toBe('/projects')
    expect(wrapper.vm.$data.currentPageName).toBe('projects')
  })

  it('should check existence of data', () => {
    expect(wrapper.vm.$data.projects).toStrictEqual(projects)
  })

  it('should render 4 single-projects in the project section', () => {
    const singleProjects = wrapper.findAll('.projects .single-project')
    expect(singleProjects).toHaveLength(4)
  })

  it('should have 16 projects including projects in the slider', () => {
    const sliderSingleProjects = wrapper.findAll('.single-project')
    expect(sliderSingleProjects).toHaveLength(4)
  })

  it('check that the specific images exists', () => {
    const img = wrapper.findAll('.single-project__logo')
    expect(img).toHaveLength(4)
  })
})
