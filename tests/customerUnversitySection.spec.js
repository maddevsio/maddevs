import {
  mount
} from '@vue/test-utils';
import CustomerUniversitySection from '../client/components/Blog/CustomerUniversitySection';

describe('Customer University section component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CustomerUniversitySection, {
      stubs: ['prismic-image'],
      mocks: {
        $prismic: {
          asText: smth => ''
        }
      }
    });
  });

  test('Is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('Renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
