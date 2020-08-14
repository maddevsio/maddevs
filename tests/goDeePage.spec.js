import {
  mount
} from '@vue/test-utils';
import GoDeePage from '@/pages/go-dee-case-study';

describe('GoDee page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GoDeePage);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('Sets the correctly data', () => {
    expect(wrapper.vm.$data.title).toEqual('Mad Devs: Software & Mobile App Development Company');
    expect(wrapper.vm.$data.description).toEqual('');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/godee');
  });
});
