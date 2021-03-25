import {render, fireEvent, screen} from '@testing-library/vue';
import BeforeAfterImage from '@/components/ui/BeforeAfterImage';

const GODEE_ALT = 'GoDee Public Transportation App at 2018 and now.';
const APPLICATION_IMAGE = '../../../client/assets/img/Cases/godee/png/application-before.png';
const BASE_WIDTH = '1000';
const BASE_HEIGHT = '578.47';

describe('BeforeAfterImage component', () => {
  test('should render correctly with slot', () => {
    const {container} = render(BeforeAfterImage);

    expect(container).toMatchSnapshot();
  });

  test('should correctly change opacity when handle mouse move over', async () => {
    const {getByTestId} = render(BeforeAfterImage);

    const hover = getByTestId('track-img');
    expect(getByTestId('test-comparsion-track-line').style.opacity).toBe('');
    await fireEvent.mouseMove(hover);
    expect(getByTestId('test-comparsion-track-line').style.opacity).toBe('0.25');
  });

  test('should correctly change styles after 2500ms when mouseLeave', async () => {
    const {getByTestId} = render(BeforeAfterImage);

    const hover = screen.getByTestId('track-img');
    await fireEvent.mouseLeave(hover);
    await new Promise(r => setTimeout(r, 2500));
    expect(getByTestId('test-comparsion-track-line').style.transition).toBe('0.3s ease-out left, 0.3s ease-in opacity');
    expect(getByTestId('test-comparsion-track-line').style.left).toBe('50%');
    expect(getByTestId('test-comparsion-track-line').style.opacity).toBe('1');
  });

  test('should correctly change alt by properties', async () => {
    const {getByTestId} = render(BeforeAfterImage, {
      props: {
        baseWidth: BASE_WIDTH,
        baseHeight: BASE_HEIGHT,
        beforeImage: APPLICATION_IMAGE,
        afterImage: APPLICATION_IMAGE,
        alt: GODEE_ALT
      }
    });

    const {alt, width, height} = getByTestId('test-comparsion-image_after');

    expect(alt).toBe(GODEE_ALT);
    expect(width).toBe(parseInt(BASE_WIDTH));
    expect(height).toBe(parseInt(BASE_HEIGHT));
  });
});
