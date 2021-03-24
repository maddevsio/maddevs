import { mount } from '@vue/test-utils';
import NdaPage from '@/pages/nda';

describe('nda page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NdaPage);
  });

  // ------ IMPORTANT ----- //
  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('sets the correctly data', () => {
    expect(wrapper.vm.$data.title).toEqual('Mad Devs: Work Under NDA');
    expect(wrapper.vm.$data.description).toEqual('Non-Disclosure Agreement at Mad Devs');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/nda/');
  });
});
