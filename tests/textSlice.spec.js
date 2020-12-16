import {mount} from '@vue/test-utils';
import TextSlice from '../client/components/Blog/slices/TextSlice';

describe('Text slice component', () => {
  let wrapper;

  const slice = {
    primary: {
      text: [
        {
          type: 'heading1',
          text: 'sample text'
        }
      ]
    }
  };

  beforeEach(() => {
    wrapper = mount(TextSlice, {
      propsData: {slice},
      stubs: ['prismic-rich-text']
    });
  });

  test('is a Vue component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
