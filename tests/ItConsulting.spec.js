import { mount } from '@vue/test-utils';
import ItСonsulting from '@/components/Services/ItСonsulting.vue';

describe('Customer Testimonials Mobile Slider', () => {
  let wrapper;
  const data = {
    TechnologyStack: {
      title: 'Technology Stack',
      subTitle:
        'Tired of the slow and hard-to-maintain technology that your previous team used?',
      paragraph:
        'We’ll help you resolve this with minimal changes using proper optimisations, updates and code refactoring.'
    },
    ProcessAudit: {
      title: 'Process Audit',
      subTitle: 'Have to constantly deal with extended deadlines and mess-ups?',
      paragraph:
        'Your process probably just lacks transparency and reasonable control. We know how to avoid this and check who does what right now.'
    },
    TeamHeadcount: {
      title: 'Team Headcount',
      subTitle:
        'Is your team too big or too small and therefore causing trouble?',
      paragraph:
        'Hire good people and get rid of underperformers. Easier said than done, right? Get assessments for the skills and seniority level of your staff. Our positively mad engineers and PMs know how to do this.'
    },
    modalWindowName: 'get-expert-advice',
    buttonInnerText: 'Get expert advice'
  };

  beforeEach(() => {
    wrapper = mount(ItСonsulting);
  });
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(data);
  });
});
