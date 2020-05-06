import {
  mount
} from '@vue/test-utils';
import CaseStudies from '@/components/About/CaseStudies';

describe('CaseStudies component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CaseStudies);
  });

  test('is Vue\'s instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
