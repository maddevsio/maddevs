import { mount } from '@vue/test-utils';
import OpenSource from '@/components/Projects/OpenSource';

describe('CaseStudies component', () => {
  let wrapper;
  const openSources = [
    {
      projectName: 'mad-location',
      link: 'https://github.com/maddevsio/mad-location-manager',
      description: 'А library for GPS and accelerometer data "fusion" with a Kalman filter.'
    },
    {
      projectName: 'comedian',
      link: 'https://github.com/maddevsio/comedian',
      description: 'A <span>team-management</span> system leveraging Slack and Telegram bot functionalities to enable remote standups and track daily performance.'
    },
    {
      projectName: 'ariadna',
      link: 'https://github.com/maddevsio/ariadna',
      description: 'An <span>open-source</span> geocoder, built on top of ElasticSearch, for fast geocoding and better search for CIS countries.'
    },
    {
      projectName: 'id-match',
      link: 'https://github.com/maddevsio/idmatch',
      description: 'An open source tool enabling ID cards recognition to ensure security on your premises.'
    },
    {
      projectName: 'your-cast',
      link: 'https://github.com/maddevsio/yourcast.tv',
      description: 'A solution to create lists of YouTube videos and stream them online in just a few seconds.'
    },
    {
      projectName: 'heimdall',
      link: 'https://github.com/maddevsio/heimdall',
      description: 'A <span>security-monitoring</span> solution for Ethereum smart contracts.'
    }
  ];

  beforeEach(() => {
    wrapper = mount(OpenSource);
  });

  test('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data.openSources).toStrictEqual(openSources);
  });

  test('should render 6 .open-source__project', () => {
    const project = wrapper.findAll('.open-source__project');
    expect(project).toHaveLength(6);
  });
});
