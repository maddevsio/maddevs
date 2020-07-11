import {
  mount
} from '@vue/test-utils';

import ImageComponent from '@/components/ui/image-component';

describe('Webp image component', () => {
  let wrapper;
  const props = {
    fileName: 'Marat',
    fileNameRetina: 'Marat@2x'
  };

  beforeEach(() => {
    wrapper = mount(ImageComponent, {
      propsData: props
    });
  });

  // ------ IMPORTANT ----- //
  test('is Vue\'s instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('correctly props data', () => {
    expect(wrapper.props().fileName).toBe(props.fileName);
    expect(wrapper.props().fileNameRetina).toBe(props.fileNameRetina);
  });

  test('Has class if sectionIsRequired equal true', () => {
    expect(wrapper.find('picture')).toBeTruthy();
  });
});
