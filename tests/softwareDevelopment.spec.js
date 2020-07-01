import {
  mount
} from '@vue/test-utils';
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment';

describe('SoftwareDevelopment', () => {
  let wrapper;

  const mockedData = {
    backend: {
      title: 'Backend',
      subTitle: 'Your MVP doesn\'t work as expected after launch?',
      firstParagraph: 'Let our positively mad team rescue you and create sensible server logic for your project.',
      secondParagraph: 'We\'ll cure your growth pains like good doctors – just tell us about them and focus on your business.',
      thirdParagraph: 'At Mad Devs we know everything about:',
      buttonInnerText: 'Get server help'
    },
    frontend: {
      title: 'Frontend',
      subTitle: 'Your users get lost in lousy interfaces?',
      firstParagraph: 'Our wizards will take your UX magic to the next level where everything is intuitive and user-friendly. Mad Devs strive to get involved with well-polished projects that will live a long life.',
      secondParagraph: 'We work with the best present-day frontend stack:',
      buttonInnerText: 'Get UX help'
    },
    mobile: {
      title: 'Mobile',
      subTitle: 'Your app is slow and unable to survive a demo?',
      firstParagraph: 'We understand that your success is our reputation, so we want your apps to be awesome. Our team will deliver an app that you\'ll be ecstatic to use yourself.',
      secondParagraph: 'We do both iOS and Android development using the following languages and frameworks:',
      buttonInnerText: 'Get mobile help'
    },
    modalWindowName: 'get-your-trusted-it-partner',
    buttonInnerText: 'Get your trusted IT partner'
  };

  beforeEach(() => {
    wrapper = mount(SoftwareDevelopment);
  });

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(mockedData);
  });
});
