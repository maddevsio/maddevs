import {render, screen} from '@testing-library/vue';
import CaseStudies from '@/components/About/CaseStudies';


describe('UIButton component', () => {

  const $route = {
    path: '/'
  };

  global.$nuxt = {
    $route: {
    }
  };


  test('should render correctly case studies', () => {
    const {container} = render(CaseStudies, {
      mocks: {
        $route
      }
    });

    expect(screen.getByText('Convenient shuttle bus service')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });


  test('should render correctly with slot', () => {
    global.$nuxt = {
      $route: {
        name: 'project'
      }
    };
    const {container, emitted, html} = render(CaseStudies, {
      mocks: {
        $route: {
          path: '/project'
        }
      }
    });

    expect(container).toMatchSnapshot();
  });
});
