import {
  mount
} from '@vue/test-utils';
import Header from '@/components/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Header, {
      stubs: ['router-link', 'modal', 'perfect-scrollbar']
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

  it('has a functions', () => {
    expect(typeof wrapper.vm.mainPageHandleScroll).toBe('function');
    expect(typeof wrapper.vm.servicesPageHandleScroll).toBe('function');
    expect(typeof wrapper.vm.projectsPageHandleScroll).toBe('function');
  });

  it('sets the correct default data', () => {
    expect(typeof Header.data).toBe('function');
    const defaultData = Header.data();
    expect(defaultData.modalWindowName).toBe('contact-me-modal');
    expect(defaultData.headerIsWhite).toBe(false);
  });

  it('call function mainPageHandleScroll with different params for: getBoundingClientRect()', () => {
    global.$nuxt = {
      $route: {
        name: 'index'
      }
    };
    document.body.innerHTML =
    `<div>
      <div id="customer-testimonials"></div>
      <div id="meet-our-experts"></div>
      <div id="why-us"></div>
     </div>`;

    // if condition in functions correctly 
    Element.prototype.getBoundingClientRect = jest.fn(() => Object({top: 0, bottom: 0}));
    wrapper.vm.mainPageHandleScroll();
    expect(wrapper.vm.$data.headerIsWhite).toBe(true);

    // if condition in functions not correctly
    Element.prototype.getBoundingClientRect = jest.fn(() => Object({top: 12, bottom: 34}));
    wrapper.vm.mainPageHandleScroll();
    expect(wrapper.vm.$data.headerIsWhite).toBe(false);
  });

  it('call function servicesPageHandleScroll with different params for: getBoundingClientRect()', () => {
    global.$nuxt = {
      $route: {
        name: 'services'
      }
    };
    document.body.innerHTML =
    `<div>
      <div id="infrastructure-optimisation"></div>
      <div id="it-consulting"></div>
     </div>`;

    // if condition in functions correctly 
    Element.prototype.getBoundingClientRect = jest.fn(() => Object({top: 0, bottom: 0}));
    wrapper.vm.servicesPageHandleScroll();
    expect(wrapper.vm.$data.headerIsWhite).toBe(true);

    // if condition in functions not correctly
    Element.prototype.getBoundingClientRect = jest.fn(() => Object({top: 12, bottom: 34}));
    wrapper.vm.servicesPageHandleScroll();
    expect(wrapper.vm.$data.headerIsWhite).toBe(false);
  });

  it('call function projectsPageHandleScroll with different params for: getBoundingClientRect()', () => {
    global.$nuxt = {
      $route: {
        name: 'projects'
      }
    };
    document.body.innerHTML = '<div id="open-source"></div>';

    // if condition in functions correctly 
    Element.prototype.getBoundingClientRect = jest.fn(() => Object({top: 0, bottom: 0}));
    wrapper.vm.projectsPageHandleScroll();
    expect(wrapper.vm.$data.headerIsWhite).toBe(true);

    // if condition in functions not correctly
    Element.prototype.getBoundingClientRect = jest.fn(() => Object({top: 12, bottom: 34}));
    wrapper.vm.projectsPageHandleScroll();
    expect(wrapper.vm.$data.headerIsWhite).toBe(false);
  });

  it('headerIsWhite should equal false after call function', () => {
    wrapper.vm.$data.headerIsWhite = true;
    wrapper.vm.listenCareersLinkClick();
    expect(wrapper.vm.$data.headerIsWhite).toBe(false);
  });
});
