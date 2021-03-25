import {render, fireEvent, screen} from '@testing-library/vue';
import UIButtonModalTrigger from '@/components/ui/UIButtonModalTrigger';

const props = {
  buttonInnerText: 'Some button name',
  isRed: true
};

describe('UIButton Modal Trigger component', () => {
  test('should render correctly with slot', () => {
    const {container} = render(UIButtonModalTrigger, {
      props
    });

    expect(screen.getByText(props.buttonInnerText)).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('should correctly handle click', async () => {
    const {emitted, getByText} = render(UIButtonModalTrigger, {
      props
    });

    const btn = getByText(props.buttonInnerText);
    await fireEvent.click(btn);
    expect(emitted().onClick.length).toBe(1);
  });

  test('should correctly render colour', async () => {
    const { getByText} = render(UIButtonModalTrigger, {
      props
    });

    const btn = getByText(props.buttonInnerText);
    console.log(btn.className);
    expect(btn.className).toContain('ui-button-modal-trigger--red');
  });
});
