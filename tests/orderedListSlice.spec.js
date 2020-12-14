import {mount} from '@vue/test-utils';
import OrderedList from '../client/components/Blog/slices/OrderedList';
import ListNumberedBox from '../client/components/Cases/ListNumberedBox';
import ListNumberedItemBox from '../client/components/Cases/ListNumberedItemBox';

describe('OrderedListSlice component', () => {
  let wrapper;

  const slice = {
    items: [
      {list_item: 'list item 1'},
      {list_item: 'list item 2'},
      {list_item: 'list item 3'},
      {list_item: 'list item 4'},
      {list_item: 'list item 5'}
    ]
  };

  beforeEach(() => {
    wrapper = mount(OrderedList, {
      mocks: {
        $prismic: {
          asText: text => text
        }
      },
      propsData: {slice}
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test('contains list box components', () => {
    expect(wrapper.findComponent(ListNumberedBox).exists()).toBeTruthy();
    expect(wrapper.findComponent(ListNumberedItemBox).exists()).toBeTruthy();
  });
});
