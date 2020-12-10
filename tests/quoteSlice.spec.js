import {mount} from '@vue/test-utils';
import QuoteSlice from '../client/components/Blog/slices/QuoteSlice';

describe('QuoteSlice component', () => {
  let wrapper;

  const slice = {
    primary: {
      quotation_design: 'border',
      quote: 'lorem ipsum dolor sit ame'
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
      }
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
