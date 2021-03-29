import { render, screen } from '@testing-library/vue'
import UIItemSubTitle from '@/components/ui/Services/UIItemSubTitle'

const props = {
  itemSubTitle: 'some title',
}

describe('uIButton component', () => {
  it('should render correctly with slot', () => {
    const { container } = render(UIItemSubTitle, {
      props,
    })

    expect(screen.getByText(props.itemSubTitle)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })
})
