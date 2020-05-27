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
