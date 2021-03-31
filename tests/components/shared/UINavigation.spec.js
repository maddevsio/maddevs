import { render, screen } from '@testing-library/vue'
import UINavigation from '@/components/shared/UINavigation'

describe('UINavigation', () => {
  global.$nuxt = {
    $route: {
      name: '/',
    },
  }

  const props = {
    navigation: [
      {
        title: 'title',
        link: 'url',
      },
    ],
  }

  it('should render correctly', () => {
    const { container } = render(UINavigation, {
      props,
      stubs: ['NuxtLink'],
    })

    expect(screen.getByText(props.navigation[0].title)).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without props', () => {
    const { container } = render(UINavigation, {
      stubs: ['NuxtLink'],
    })

    expect(screen.queryByText(props.navigation[0].title)).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
