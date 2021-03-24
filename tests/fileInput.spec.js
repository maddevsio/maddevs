import { mount } from '@vue/test-utils';

import FileInput from '@/components/Careers/FileInput';
import CareersForm from '@/components/Careers/CareersForm';

describe('fileInput component', () => {
  let wrapper;
  const data = {
    selectedFile: null,
  };

  beforeEach(() => {
    wrapper = mount(FileInput, { parentComponent: CareersForm });
  });

  it('is Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have CareersForm parent component', () => {
    expect(wrapper.vm.$parent.$options.name).toBe('CareersForm');
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should check existence of data', () => {
    expect(wrapper.vm.$data).toStrictEqual(data);
  });

  it('should  render .file-input__cv--attachable if !selectedFile', () => {
    wrapper = mount(FileInput);

    const container = wrapper.findAll('.file-input__cv').at(0);
    expect(container.classes()).toContain('file-input__cv--attachable');
  });

  it('should not render none-decorated-dash if while selectedFile if falsy', () => {
    wrapper = mount(FileInput);
    expect(wrapper.find('none-decorated-dash').exists()).toBe(false);
  });

  it('should test change emit', () => {
    wrapper = mount(FileInput);
    const selectedFile = 'mockedFile.doc';
    wrapper.vm.$emit('input', selectedFile);
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input).toHaveLength(1);
    expect(wrapper.emitted().input).toStrictEqual([[selectedFile]]);
  });

  it('takes the file from the event', () => {
    const localWrapper = mount(FileInput);

    const file = { size: 100, type: 'text', name: 'mockedFile.doc' };
    const event = {
      target: {
        files: [file],
      },
    };
    localWrapper.vm.onFileChanged(event);
    expect(localWrapper.vm.$data.selectedFile).toEqual({ size: 100, type: 'text', name: 'mockedFile.doc' });
  });
});
