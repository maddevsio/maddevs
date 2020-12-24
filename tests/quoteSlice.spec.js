import {mount} from '@vue/test-utils';
import QuoteSlice from '../client/components/Blog/slices/QuoteSlice';

describe('QuoteSlice component', () => {
  let wrapper;

  const slice = {
    primary: {
      quotation_design: 'border',
      quote: 'lorem ipsum dolor sit ame',
      name_of_the_author: 'John Doe',
      portrait_author: {
        mobile: {

        },
        url: ''
      }
    }
  };

  beforeEach(() => {
    wrapper = mount(QuoteSlice, {
      propsData: {slice},
      mocks: {
        $prismic: {
          asText: text => text,
          asHtml: html => `<p>${html}</p>`
        }
      },
      stubs: ['prismic-image']
    });
  });

  test('is a Vue component', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders text', () => {
    expect(wrapper.text()).toMatch(slice.primary.quote);
  });
});
