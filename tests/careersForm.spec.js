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

  test('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('correctly sets the current pages name', () => {
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

  test('should render 4 radio elements', () => {
    const radio = wrapper.findAll('.radio');
    expect(radio.length).toBe(4);
  });

  test('should render file-input component', () => {
    const fileInput = wrapper.findAll('.file-input');
    expect(fileInput.length).toBe(1);
  });

  test('onFileChanged method should set correct position', () => {
    const newPositionValue = 'senior';
    CareersForm.methods.onFileChanged(newPositionValue);
    expect(wrapper.vm.$data.positionValue).toStrictEqual(newPositionValue);
  });

  test('should have methods', () => {
    expect(
      typeof CareersForm.methods.onFileChanged &&
        typeof CareersForm.methods.changePositionValue
    ).toBe('function');
  });
});
