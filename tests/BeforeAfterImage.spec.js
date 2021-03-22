import {
  mount
} from '@vue/test-utils';
import BeforeAfterImage from '@/components/ui/BeforeAfterImage';

describe('BeforeAfterImage component', () => {
  let wrapper;
  let props = {
    baseWidth: '1000',
    baseHeight: '578.47',
    beforeImage: 'Cases/godee/png/application-before.png',
    afterImage: 'Cases/godee/png/application-after.png',
    alt: 'GoDee Public Transportation App at 2018 and now.'
  };

  beforeEach(() => {
    wrapper = mount(BeforeAfterImage, {
      propsData: props
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // --------------------- //
  test('should pass correct props', () => {
    expect(wrapper.props()).toEqual(props);
  });

  test('afterImage should render correctly', () => {
    const afterImage = wrapper.find('.comparsion-image_after');
    expect(afterImage.attributes('alt')).toMatch(props.alt);
    expect(afterImage.attributes('width')).toMatch(props.baseWidth);
    expect(afterImage.attributes('height')).toMatch(props.baseHeight);
  });
});