import CareersBanner from '@/components/Banner/CareersBanner';
import {render, screen} from '@testing-library/vue';

describe('Career banner', () => {
  global.$nuxt = {
    $route: {
      name: '/'
    }
  };

  test('is a Vue instance', () => {
    const {container} = render(CareersBanner, {
      stubs: ['nuxt-link']
    });

    expect(screen.getByText('Mad Devs\'')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});
