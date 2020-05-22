import { mount } from '@vue/test-utils';
import OpenSource from '@/components/Projects/OpenSource';
import MadLocationLogo from '@/components/Projects/MadLocationLogo';
import AriadnaLogo from '@/components/Projects/AriadnaLogo';
import HeimdallLogo from '@/components/Projects/HeimdallLogo';
import ComedianLogo from '@/components/Projects/ComedianLogo';
import IdMatchLogo from '@/components/Projects/IdMatchLogo';
import YourCastLogo from '@/components/Projects/YourCastLogo';

describe('CaseStudies component', () => {
  let wrapper;
  const openSources = [
    {
      imgName: 'mad_location',
      industry: 'Logistics',
      link: 'https://github.com/maddevsio/mad-location-manager',
      description:
        'А library for GPS and accelerometer data "fusion" with a Kalman filter.'
    },
    {
      imgName: 'comedian',
      industry: 'Team Management',
      link: 'https://github.com/maddevsio/comedian',
      description:
        'A team-management system leveraging Slack and Telegram bot functionalities to enable remote standups and track daily performance.'
    },
    {
      imgName: 'ariadna',
      industry: 'Logistics',
      link: 'https://github.com/maddevsio/ariadna',
      description:
        'An open-source geocoder, built on top of ElasticSearch, for fast geocoding and better search for CIS countries.'
    },
    {
      imgName: 'id_match',
      industry: 'Security',
      link: 'https://github.com/maddevsio/idmatch',
      description:
        'An open source tool enabling ID cards recognition to ensure security on your premises.'
    },
    {
      imgName: 'your_cast',
      industry: 'Entertainment',
      link: 'https://github.com/maddevsio/yourcast.tv',
      description:
        'A solution to create lists of YouTube videos and stream them online in just a few seconds.'
    },
    {
      imgName: 'heimdall',
      industry: 'Security',
      link: 'https://github.com/maddevsio/heimdall',
      description:
        'A security-monitoring solution for Ethereum smart contracts.'
    }
  ];

  beforeEach(() => {
    wrapper = mount(OpenSource);
  });

  test('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
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

  test('renders all projectsLogo children', () => {
    const wrapper = mount(OpenSource);

    expect(wrapper.findAll(MadLocationLogo).length).toBe(1);
    expect(wrapper.findAll(AriadnaLogo).length).toBe(1);
    expect(wrapper.findAll(HeimdallLogo).length).toBe(1);
    expect(wrapper.findAll(ComedianLogo).length).toBe(1);
    expect(wrapper.findAll(IdMatchLogo).length).toBe(1);
    expect(wrapper.findAll(YourCastLogo).length).toBe(1);
  });
});
