import { shallowMount } from '@vue/test-utils'
import { render, screen, fireEvent } from '@testing-library/vue'

import Header from '@/components/core/Header/Header'

const mocks = {
  $nuxt: {
    $route: {
      path: '/',
      name: '',
    },
  },
}

const GODEE_MOCK = {
  $nuxt: {
    $route: {
      path: '/case-studies/godee',
      name: 'case-studies-godee',
    },
  },
}

const stubs = ['NuxtLink']

const setDefaultStateForHeader = jest.fn()

const containerToRender = document.createElement('div')
containerToRender.setAttribute('id', 'case-scroll-container')
containerToRender.setAttribute('data-testid', 'test-container')

const caseHeaderForRender = document.createElement('div')
caseHeaderForRender.setAttribute('id', 'case-header')
caseHeaderForRender.setAttribute('data-testid', 'test-case-header')
containerToRender.append(caseHeaderForRender)

const mobileScrollBar = document.createElement('div')
mobileScrollBar.setAttribute('id', 'mobile-header-scrollbar')
mobileScrollBar.setAttribute('data-testid', 'test-mobile-header-scrollbar')
containerToRender.append(mobileScrollBar)

containerToRender.append(caseHeaderForRender)
describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(window, 'removeEventListener').mockImplementation(() => {})
  })

  it('correctly call update class function from watcher', () => {
    const wrapper = shallowMount(Header, {
      mocks,
      stubs,
    })

    wrapper.vm.$options.watch.$route.call({
      setDefaultStateForHeader,
    })

    expect(setDefaultStateForHeader).toHaveBeenCalledTimes(1)
  })

  it('should render correctly', () => {
    const { container } = render(Header, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correct work navigation click', async () => {
    const SCROLL_POSITION = 100
    window.scrollTo = (x, y) => {
      document.documentElement.scrollTop = y
    }
    await render(Header, {
      mocks,
      stubs,
    })

    await fireEvent.scroll(document.documentElement, { target: { scrollTop: SCROLL_POSITION } })
    expect(document.documentElement.scrollTop).toBe(SCROLL_POSITION)

    await fireEvent.click(screen.getAllByTestId('test-navigation-link')[0])
    expect(document.body.scrollTop).toBe(0)
  })

  it('should correct work burger click handler', async () => {
    render(Header, {
      mocks,
      stubs,
    })

    const burgerButton = screen.getByTestId('test-burger')
    await fireEvent.click(burgerButton)
    await fireEvent.touchMove(document.body)

    expect(document.documentElement.classList.contains('scrollDisabled')).toBeTruthy()
    expect(screen.queryByTestId('test-burger--close')).toBeTruthy()

    await fireEvent.click(burgerButton)
    expect(document.documentElement.classList.contains('scrollDisabled')).toBeFalsy()
    expect(screen.queryByTestId('test-burger--close')).toBeFalsy()
  })

  it('should correct work scroll handler', async () => {
    render(Header, {
      mocks: GODEE_MOCK,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    await fireEvent.scroll(window, { target: { scrollTop: 50 } })

    expect(screen.queryByTestId('test-header-wrapper').className).toContain('is-transparent-bg')
  })

  it('should correct work mobile scroll bar', async () => {
    render(Header, {
      mocks: GODEE_MOCK,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    const burgerButton = screen.getByTestId('test-burger')
    expect(screen.queryAllByTestId('test-logo-text')).toHaveLength(1)
    await fireEvent.click(burgerButton)
    await fireEvent.scroll(mobileScrollBar, { target: { scrollTop: 50 } })

    expect(screen.queryAllByTestId('test-logo-text')).toHaveLength(0)
  })

  it('should correctly work disable scroll if body top is null', () => {
    document.body.style.top = null
    jest.spyOn(document.body.classList, 'remove')
    jest.spyOn(document.documentElement.classList, 'remove')
    jest.spyOn(window, 'scrollTo')

    const wrapper = shallowMount(Header, {
      mocks: GODEE_MOCK,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.enablePageScroll()

    expect(document.body.classList.remove).toHaveBeenCalledTimes(1)
    expect(document.documentElement.classList.remove).toHaveBeenCalledTimes(1)
    expect(window.scrollTo).toHaveBeenCalledWith(0, -0)
  })
})
