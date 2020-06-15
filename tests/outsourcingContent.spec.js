import {
  mount
} from '@vue/test-utils';
import OutsourcingContent from '@/components/Services/OutsourcingContent.vue';

describe('Outsourcing content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(OutsourcingContent, {
      propsData: {
        title: 'Title',
        subTitle: 'Sub title',
        paragraph: 'Paragraph',
        buttonInnerText: 'Button inner text',
        modalWindowName: 'Modal window name'
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
    expect(wrapper.props().title).toBe('Title');
    expect(wrapper.props().subTitle).toBe('Sub title');
    expect(wrapper.props().paragraph).toBe('Paragraph');
    expect(wrapper.props().buttonInnerText).toBe('Button inner text');
    expect(wrapper.props().modalWindowName).toBe('Modal window name');
  });
});
