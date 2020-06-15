import {
  mount
} from '@vue/test-utils';
import buttonTrigger from '@/components/ui/button-trigger';

describe('Form checkboxes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(buttonTrigger, {
      propsData: {
        buttonInnerText: 'Some button name',
        modalWindowName: 'Some modal window name'
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

  test('correctly props data', () => {
    expect(wrapper.props().buttonInnerText).toBe('Some button name');
    expect(wrapper.props().modalWindowName).toBe('Some modal window name');
  });

  test('sets the correctly button name', () => {
    let button = wrapper.find('.button-default');
    expect(button.text()).toBe('Some button name');
  });
});
