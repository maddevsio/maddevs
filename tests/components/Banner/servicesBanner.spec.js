import ServicesBanner from '@/components/Banner/ServicesBanner';
import {render, screen} from '@testing-library/vue';

describe('Services banner', () => {
  global.$nuxt = {
    $route: {
      name: '/'
    }
  };

  test('is a Vue instance', () => {
    const {container} = render(ServicesBanner, {
      stubs: ['nuxt-link']
    });

    expect(screen.getByText('IT Partner')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});
