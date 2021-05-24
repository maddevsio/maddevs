import InventoryChangeLog from '@/components/Cases/veeqo/InventoryChangeLog'
import { render } from '@testing-library/vue'

const stubs = ['Picture']

describe('InventoryChangeLog component', () => {
  it('should render correctly', () => {
    const { container } = render(InventoryChangeLog, {
      stubs,
    })

    expect(container).toMatchSnapshot()
  })
})
