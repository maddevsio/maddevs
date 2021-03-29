import { render, fireEvent, screen } from '@testing-library/vue';
import TechnologiesAndTools from '@/components/About/TechnologiesAndTools';


describe('Technologies and tools', () => {
  test('should render correctly with slot', () => {
    const {container} = render(TechnologiesAndTools);

    expect(screen.getByText('Ansible')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  test('should correctly detect click handler', async () => {
    const btn = screen.getAllByTestId('test-tech_legend__item');
    await fireEvent.click(btn[0]);
  });
});
