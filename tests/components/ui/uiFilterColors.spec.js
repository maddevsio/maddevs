import { render, fireEvent, screen } from '@testing-library/vue';
import UIFilterColors from '@/components/ui/UIRadioButtons';

const props = {
  radios: [{label: 'some label'}]
};

describe('ui filter colour component', () => {
  test('should render correctly', () => {
    const { container } = render(UIFilterColors, {
      props
    });

    expect(screen.getByText(props.radios[0].label)).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('should render correctly with empty array', () => {
    const { container } = render(UIFilterColors);

    expect(screen.queryByText(props.radios[0].label)).toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('should not handle click disabled', async () => {
    const { emitted } = render(UIFilterColors, {
      props
    });

    const btn = screen.getByText(props.radios[0].label);
    await fireEvent.click(btn);
    await fireEvent.click(btn);
    expect(emitted().input.length).toBe(2);
  });
});
