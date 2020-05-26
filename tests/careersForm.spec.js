import { mount } from '@vue/test-utils';
import CareersForm from '@/components/Careers/CareersForm';

describe('CaseStudies component', () => {
  let wrapper;
  const projects = {
    selectedFile: null,
    positionValue: 'senior',
    radioData: [
      { id: 'senior', name: 'position', labelText: 'Senior,' },
      { id: 'middle', name: 'position', labelText: 'Middle,' },
      { id: 'junior', name: 'position', labelText: 'Junior,' },
      { id: 'intern', name: 'position', labelText: 'Intern' }
    ]
  };

  beforeEach(() => {
    const $route = {
      path: '/'
    };

    global.$nuxt = {
      $route: {
        name: '/'
      }
    };

    wrapper = mount(CareersForm, {
      mocks: {
        $route
      }
    });
  });

  test("is Vue's instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test("correctly sets the current page's name", () => {
    const $route = {
      path: '/projects'
    };

    wrapper = mount(CareersForm, {
      mocks: {
        $route
      }
    });

    wrapper.vm.$data.currentPageName = 'projects';
    expect(wrapper.vm.$route.path).toBe('/projects');
    expect(wrapper.vm.$data.currentPageName).toBe('projects');
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(projects);
  });
});
