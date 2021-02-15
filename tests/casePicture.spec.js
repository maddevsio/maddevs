import {
  mount
} from '@vue/test-utils';

import Picture from '@/components/Cases/Picture';

describe('Picture', () => {
  let wrapper;
  let props = {
    pictureFolder: 'nambafood',
    fileName: 'apple-iphone-xr-silver',
    fileExtension: 'png',
    alt: 'alt',
    lazyLoading: true,
    boxShadow: true,
    borderRadius: false,
    height: 0,
    width: 0
  };

  beforeEach(() => {
    wrapper = mount(Picture, {
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

  test('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props);
  });
});
