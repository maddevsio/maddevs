import { mount } from '@vue/test-utils';
import ItConsultingContent from '@/components/Services/ItConsultingContent.vue';

describe('ItConsultingContent component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ItConsultingContent, {
      propsData: {
        title: 'Title',
        subTitle: 'Sub title',
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

  test('correctly props data', () => {
    expect(wrapper.props().title).toBe('Title');
    expect(wrapper.props().subTitle).toBe('Sub title');
    expect(wrapper.props().paragraph).toBe('Paragraph');
  });
});
