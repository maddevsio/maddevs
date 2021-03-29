import ProjectsBanner from '@/components/Banner/ProjectsBanner';
import {render, screen} from '@testing-library/vue';

describe('Project banner', () => {
  global.$nuxt = {
    $route: {
      name: '/'
    }
  };

  test('is a Vue instance', () => {
    const {container} = render(ProjectsBanner, {
      stubs: ['nuxt-link']
    });

    expect(screen.getByText('Check out our')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});
