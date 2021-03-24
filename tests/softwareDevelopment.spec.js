import { mount } from '@vue/test-utils';
import SoftwareDevelopment from '@/components/Services/SoftwareDevelopment';

describe('softwareDevelopment', () => {
  let wrapper;

  const mockedData = {
    backend: {
      title: 'Backend',
      subTitle: "Your MVP doesn't work as expected after launch?",
      firstParagraph:
        "Let our positively mad team rescue you and create sensible server logic for your project. We'll cure your growth pains like good doctors – just tell us about them and only focus on your business.",
      secondParagraph: 'At Mad Devs we know everything about:',
      icons: [
        {
          title: 'Python',
          className: 'backend-python',
        },
        {
          title: 'Go',
          className: 'backend-go',
        },
        {
          title: 'Node.js',
          className: 'backend-node',
        },
        {
          title: 'C',
          className: 'backend-c',
        },
        {
          title: 'TypeScript',
          className: 'frontend-typescript',
        },
        {
          title: 'PHP',
          className: 'backend-php',
        },
        {
          title: 'Ruby',
          className: 'backend-ruby',
        },
        {
          title: 'C++',
          className: 'backend-c-plus',
        },
      ],
    },
    frontend: {
      title: 'Frontend',
      subTitle: 'Your users get lost in lousy interfaces?',
      firstParagraph:
        'Our wizards will take your UX magic to the next level where everything is intuitive and <span>user-friendly.</span> <span>Mad Devs</span> strive to get involved with <span>well-polished</span> projects that will live a long life.',
      secondParagraph: 'We work with the best <span>present-day</span> frontend stack:',
      icons: [
        {
          title: 'JavaScript',
          className: 'frontend-js',
        },
        {
          title: 'React',
          className: 'frontend-react',
        },
        {
          title: 'Babel',
          className: 'frontend-babel',
        },
        {
          title: 'Vue',
          className: 'frontend-vue',
        },
        {
          title: 'PostCSS',
          className: 'frontend-post-css',
        },
        {
          title: 'Angular',
          className: 'frontend-angular',
        },
        {
          title: 'Nuxt.js',
          className: 'frontend-nuxt',
        },
        {
          title: 'SASS',
          className: 'frontend-sass',
        },
      ],
    },
    mobile: {
      title: 'Mobile',
      subTitle: 'Your app is slow and unable to survive a demo?',
      firstParagraph:
        "We understand that your success is our reputation, so we want your apps to be awesome. Our team will deliver an app that you'll be ecstatic to use yourself.",
      secondParagraph: 'We do both iOS and Android development using the following languages and frameworks:',
      icons: [
        {
          title: 'Android',
          className: 'mobile-android',
        },
        {
          title: 'Kotlin',
          className: 'mobile-kotlin',
        },
        {
          title: 'Java',
          className: 'mobile-java',
        },
        {
          title: 'Firebase',
          className: 'mobile-firebase',
        },
        {
          title: 'iOS',
          className: 'mobile-apple',
        },
        {
          title: 'Objective-C',
          className: 'mobile-obj-c',
        },
        {
          title: 'Swift',
          className: 'mobile-swift',
        },
        {
          title: 'Flutter',
          className: 'mobile-flutter',
        },
      ],
    },
    buttonInnerText: 'Get your trusted IT partner',
  };

  beforeEach(() => {
    wrapper = mount(SoftwareDevelopment, {
      stubs: ['client-only'],
    });
  });

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(mockedData);
  });
});
