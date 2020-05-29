import { mount } from '@vue/test-utils';
import CareersForm from '@/components/Careers/CareersForm';

describe('CaseStudies component', () => {
  let wrapper;
  const projects = {
    fullName: null,
    positionValue: null,
    positionTitle: null,
    email: null,
    selectedFile: null,
    linkedinProfile: null,
    radioData: [
      { id: 'senior', name: 'position', labelText: 'Senior,' },
      { id: 'middle', name: 'position', labelText: 'Middle,' },
      { id: 'junior', name: 'position', labelText: 'Junior,' },
      { id: 'intern', name: 'position', labelText: 'Intern' }
    ]
  };

  beforeEach(() => {
    wrapper = mount(CareersForm);
  });

  test('is Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(projects);
  });

  test('onFileChanged method should set correct position', () => {
    const newPositionValue = null;
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
