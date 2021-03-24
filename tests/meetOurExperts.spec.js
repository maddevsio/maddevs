import { mount } from '@vue/test-utils';
import MeetOurExperts from '@/components/About/MeetOurExperts.vue';

describe('meet Our Experts', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MeetOurExperts);
  });

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('experts must contain eight elements', () => {
    expect(wrapper.vm.$data.experts).toHaveLength(8);
  });

  it('correctly length of elements in DOM', () => {
    const contentItems = wrapper.findAll('.meet-our_experts__expert-item');
    expect(contentItems).toHaveLength(8);
  });
});
