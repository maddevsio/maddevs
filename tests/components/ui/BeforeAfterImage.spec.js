import { render, fireEvent, screen } from '@testing-library/vue';
import BeforeAfterImage from '@/components/ui/BeforeAfterImage';

describe('BeforeAfterImage component', () => {
  test('should render correctly with slot', () => {
    const { container } = render(BeforeAfterImage);

    // expect(screen.getByText('It is a button')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('should correctly handle mouse move', async () => {
    const result = render(BeforeAfterImage);

    const hover = result.getByTestId('track-img');

    await fireEvent.mouseMove(hover);
    console.log(result);
  });

  test('should correctly handle mouse move1', async () => {
    const { emitted } = render(BeforeAfterImage);

    const hover = screen.getByTestId('track-img');

    await fireEvent.mouseLeave(hover);
  });
});
