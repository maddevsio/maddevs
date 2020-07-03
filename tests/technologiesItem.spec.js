import { mount } from '@vue/test-utils';
import TechnologiesItem from '@/components/About/TechnologiesItem.vue';

describe('TechnologiesItem component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TechnologiesItem, {
      propsData: {
        title: 'Title',
        paragraph: 'Paragraph'
      }
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('correctly passed props data', () => {
    expect(wrapper.props().title).toBe('Title');
    expect(wrapper.props().paragraph).toBe('Paragraph');
  });
});
