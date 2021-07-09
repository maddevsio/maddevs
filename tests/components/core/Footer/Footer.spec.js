import 'regenerator-runtime'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Footer from '@/components/core/Footer/Footer'
import Vuelidate from 'vuelidate'
import { render, screen } from '@testing-library/vue'

const localVue = createLocalVue()

localVue.use(Vuelidate)

const ROUTE = {
  name: '/home',
  path: '/home',
}

const TEST_ID = 'test-footer'
const updateClassName = jest.fn()

describe('Footer component', () => {
  global.$nuxt = {
    $route: ROUTE,
  }

  it('should render correctly', () => {
    const { container } = render(Footer, {
      localVue,
      $nuxt: {
        $route: ROUTE,
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('correctly sets the route when mounted', async () => {
    await render(Footer, {
      localVue,
    })

    const element = await screen.getByTestId('test-footer')
    expect(element.className).toBe(`footer ${ROUTE.name}`)
  })

  it('correctly call update class function from watcher', () => {
    const wrapper = shallowMount(Footer, {
      localVue,
    })

    wrapper.vm.$options.watch.$route.call({
      updateClassName,
    })

    expect(updateClassName).toHaveBeenCalledTimes(1)
  })

  it('should correctly with empty route', async () => {
    global.$nuxt = {
      $route: {
      },
    }
    await render(Footer, {
      localVue,
    })

    const element = await screen.getByTestId(TEST_ID)
    expect(element.className).toBe('footer ')
  })
})
