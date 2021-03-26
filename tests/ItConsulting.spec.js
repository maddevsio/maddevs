import { mount } from '@vue/test-utils'
import ItСonsulting from '@/components/Services/ItСonsulting.vue'

describe('itСonsulting component', () => {
  let wrapper
  const data = {
    TechnologyStack: {
      title: 'Technology <br> Stack',
      subTitle: 'Tired of the slow and <span>hard-to-maintain</span> technology that your previous team used?',
      paragraph:
        'We’ll help you resolve this with minimal changes using proper optimisations, updates and code refactoring.',
      className: 'first-item',
    },
    ProcessAudit: {
      title: 'Process <br> Audit',
      subTitle: 'Have to constantly deal with extended deadlines and <span>mess-ups?</span>',
      paragraph:
        'Your process probably just lacks transparency and reasonable control. We know how to avoid this and check who does what right now.',
      className: 'second-item',
    },
    TeamHeadcount: {
      title: 'Team <br> Headcount',
      subTitle: 'Is your team too big or too small and therefore causing trouble?',
      paragraph:
        'Hire good people and get rid of underperformers. Easier said than done, right? Get assessments for the skills and seniority level of your staff. Our positively mad engineers and PMs know how to do this.',
      className: 'third-item',
    },
    buttonInnerText: 'Get expert advice',
  }

  beforeEach(() => {
    wrapper = mount(ItСonsulting, {
      stubs: ['client-only'],
    })
  })
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(data)
  })
})
