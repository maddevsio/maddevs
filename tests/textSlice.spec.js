import { mount } from '@vue/test-utils';
import TextSlice from '../client/components/Blog/slices/TextSlice';

describe('text slice component', () => {
  let wrapper;

  const slice = {
    primary: {
      text: [
        {
          type: 'heading1',
          text: 'sample text',
        },
      ],
    },
  };

  beforeEach(() => {
    wrapper = mount(TextSlice, {
      propsData: { slice },
      stubs: ['prismic-rich-text'],
    });
  });

  it('is a Vue component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
