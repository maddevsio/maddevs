import { mount } from '@vue/test-utils';
import OrderedList from '../client/components/Blog/slices/OrderedList';
import ListNumberedBox from '../client/components/Cases/ListNumberedBox';
import ListNumberedItemBox from '../client/components/Cases/ListNumberedItemBox';

describe('orderedListSlice component', () => {
  let wrapper;

  const slice = {
    items: [
      { list_item: 'list item 1' },
      { list_item: 'list item 2' },
      { list_item: 'list item 3' },
      { list_item: 'list item 4' },
      { list_item: 'list item 5' },
    ],
    primary: {
      list_introduction: 'list introduction',
    },
  };

  beforeEach(() => {
    wrapper = mount(OrderedList, {
      mocks: {
        $prismic: {
          asText: text => text,
          asHtml: text => text,
        },
      },
      propsData: { slice },
    });
  });

  it('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('contains list box components', () => {
    expect(wrapper.findComponent(ListNumberedBox).exists()).toBeTruthy();
    expect(wrapper.findComponent(ListNumberedItemBox).exists()).toBeTruthy();
  });
});
