import {
  mount
} from '@vue/test-utils';
import footerSocialNetworkList from '@/components/Footer/footer-social-network-list';

describe('footer social network list', () => {
  let wrapper;
  const socialNetworkListMock = [
    {
      className: 'social-network-github',
      link: 'https://github.com/maddevsio'
    },
    {
      className: 'social-network-facebook',
      link: 'https://www.facebook.com/maddevsllc'
    },
    {
      className: 'social-network-twitter',
      link: 'https://twitter.com/MadDevsIO'
    },
    {
      className: 'social-network-linkedin',
      link: 'https://www.linkedin.com/company/mad-devs'
    },
    {
      className: 'social-network-instagram',
      link: 'https://www.instagram.com/maddevsio'
    },
    {
      className: 'social-network-medium',
      link: 'https://blog.maddevs.io'
    },
    {
      className: 'social-network-behance',
      link: 'https://www.behance.net/maddevs'
    }
  ];

  beforeEach(() => {
    wrapper = mount(footerSocialNetworkList);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('should check existence of data', () => {
    expect(wrapper.vm.$data.socialNetworkList).toEqual(socialNetworkListMock);
  });
});
