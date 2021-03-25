import { render, screen } from '@testing-library/vue';
import UIItemTitle from '@/components/ui/Services/UIItemTitle';

const props = {
  itemTitle: 'some title'
};

describe('UIItemTitle component', () => {
  test('should render correctly with slot', () => {
    const { container } = render(UIItemTitle, {
      props
    });

    expect(screen.getByText(props.itemTitle)).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});
