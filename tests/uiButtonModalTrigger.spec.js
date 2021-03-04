import {
  mount
} from '@vue/test-utils';
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';

describe('Ui button modal trigger', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UIButtonModalTrigger, {
      propsData: {
        buttonInnerText: 'Some button name',
        modalWindowName: 'Some modal window name',
        isRed: true
      },
      mocks: {
        $modal: {
          show: jest.fn()
        },
        $nuxt: {
          $emit: jest.fn()
        }
      }
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  test('sets the correctly button name and contains new class --red', () => {
    let button = wrapper.find('.ui-button-modal-trigger');
    expect(button.text()).toBe('Some button name');
    expect(button.classes()).toContain('ui-button-modal-trigger--red');
  });
});
