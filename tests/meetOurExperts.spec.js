import {
  mount
} from '@vue/test-utils';
import MeetOurExperts from '@/components/About/MeetOurExperts.vue';

describe('Meet Our Experts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MeetOurExperts);
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('experts must contain eight elements', () => {
    expect(wrapper.vm.$data.experts).toHaveLength(8);
  });

  test('correctly length of elements in DOM', () => {
    let contentItems = wrapper.findAll('.meet-our_experts__expert-item');
    expect(contentItems).toHaveLength(8);
  });
});
