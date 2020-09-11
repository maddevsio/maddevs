import {
  mount
} from '@vue/test-utils';
import NdaPage from '@/pages/_lang/nda';

describe('Nda page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NdaPage);
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
    expect(wrapper.vm.$data.title).toEqual('Mad Devs: Work Under NDA');
    expect(wrapper.vm.$data.description).toEqual('Non-Disclosure Agreement at Mad Devs');
    expect(wrapper.vm.$data.ogUrl).toEqual('https://maddevs.io/nda');
  });
});
