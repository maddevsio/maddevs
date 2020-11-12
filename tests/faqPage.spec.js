import {
  mount
} from '@vue/test-utils';
import FAQ from '@/pages/faq';

describe('FAQ page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FAQ);
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs: Frequently Asked Questions');
    expect(wrapper.vm.$data.description).toEqual('FAQs. Have a question? Find answers on our Frequently asked questions page. Discover more about Mad Devs\' team, expertise, pricing, and more.');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/faq');
  });
});
