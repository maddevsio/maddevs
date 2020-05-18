import {
  mount
} from '@vue/test-utils';
import Header from '@/components/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Header, {
      stubs: ['router-link', 'modal']
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('has a mounted hook', () => {
    expect(typeof Header.mounted).toBe('function');
  });

  it('sets the correct default data', () => {
    expect(typeof Header.data).toBe('function');
    const defaultData = Header.data();
    expect(defaultData.pageWasLoaded).toBe(false);
    expect(defaultData.modalWindowName).toBe('contact-me');
  });

  it('correctly sets value when mounted', () => {
    expect(wrapper.vm.$data.pageWasLoaded).toBe(true);
  });
});
