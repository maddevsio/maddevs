import { mount } from '@vue/test-utils';

import FileInput from '@/components/Careers/FileInput';
import CareersForm from '@/components/Careers/CareersForm';

describe('FileInput component', () => {
  let wrapper;
  let data = {
    selectedFile: null
  };

  beforeEach(() => {
    wrapper = mount(FileInput, { parentComponent: CareersForm });
  });

  test('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('should have CareersForm parent component ', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('CareersForm');
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(data);
  });

  test('should  render .file-input__cv--attachable if !selectedFile', () => {
    wrapper = mount(FileInput);

    const container = wrapper.findAll('.file-input__cv').at(0);
    expect(container.classes()).toContain('file-input__cv--attachable');
  });

  test('should not render none-decorated-dash if while selectedFile if falsy', () => {
    wrapper = mount(FileInput);
    expect(wrapper.find('none-decorated-dash').exists()).toBe(false);
  });

  test('should test change emit', () => {
    wrapper = mount(FileInput);
    const selectedFile = 'mockedFile.doc';
    wrapper.vm.$emit('input', selectedFile);
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input.length).toBe(1);
    expect(wrapper.emitted().input).toStrictEqual([[selectedFile]]);
  });

  test('takes the file from the event', () => {
    let wrapper = mount(FileInput);

    const file = { size: 100, type: 'text', name: 'mockedFile.doc' };
    const event = {
      target: {
        files: [file]
      }
    };
    wrapper.vm.onFileChanged(event);
    expect(wrapper.vm.$data.selectedFile).toEqual('mockedFile.doc');
  });
});
