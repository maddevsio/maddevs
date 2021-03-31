import { render } from '@testing-library/vue'
import OrderedList from '../../../../client/components/Blog/slices/OrderedList'

describe('orderedListSlice component', () => {
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
  }

  it('is a Vue instance', () => {
    const { container } = render(OrderedList, {
      props: {
        slice,
      },
      mocks: {
        $prismic: {
          asText: text => text,
          asHtml: text => text,
        },
      },
    })

    expect(container).toMatchSnapshot()
  })
})
