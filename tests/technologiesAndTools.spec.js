import {
  mount
} from '@vue/test-utils';
import TechnologiesAndTools from '@/components/About/TechnologiesAndTools.vue';

describe('TechnologiesAndTools', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TechnologiesAndTools, {
      stubs: ['fragment']
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
