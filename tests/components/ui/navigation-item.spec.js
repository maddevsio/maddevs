import { render } from '@testing-library/vue';
import navigationItem from '@/components/ui/navigation-item.vue';

const props = {
  name: 'some name',
  link: 'http://someurl'
};

describe('navigationItem component', () => {
  test('should render correctly with slot', () => {
    const { container } = render(navigationItem, {
      props
    });

    expect(container.getElementsByTagName('nuxt-link')[0].getAttribute('name')).toBe(props.name);
    expect(container.getElementsByTagName('nuxt-link')[0].getAttribute('to')).toBe(props.link);
    expect(container).toMatchSnapshot();
  });
});
