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
const removeEventListeners = jest.fn()
const caseGoDeeScrollContainer = {
  removeEventListener: jest.fn(),
}

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
      removeEventListeners,
    })

    expect(setDefaultStateForHeader).toHaveBeenCalledTimes(1)
    expect(removeEventListeners).toHaveBeenCalledTimes(1)
  })

  it('should render correctly', () => {
    const { container } = render(Header, {
      mocks,
      stubs,
    })

    expect(container).toMatchSnapshot()
  })

  it('should correctly render godee', () => {
    const { container } = render(Header, {
      mocks: GODEE_MOCK,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    const scrollBarWidth = containerToRender.offsetWidth - containerToRender.clientWidth
    expect(container.querySelector('header').style.width).toBe(`calc(100% - ${scrollBarWidth}px)`)
  })

  it('should correctly render godee with small screen', () => {
    window.innerWidth = 800

    const { container } = render(Header, {
      mocks: GODEE_MOCK,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    expect(container.querySelector('header').style.width).toBe('100%')
  })

  it('should correctly work setWidthForHeader method if haven\'t container', () => {
    const callObject = {
      $refs: {
        header: {
          style: {
            width: '88%',
          },
        },
      },
    }
    const wrapper = shallowMount(Header, {
      mocks: GODEE_MOCK,
      stubs,
    })

    wrapper.vm.$options.methods.setWidthForHeader.call(callObject)
    expect(callObject.$refs.header.style.width).toBe('88%')
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

  it('not call remove handler in path not contain godee', () => {
    const wrapper = shallowMount(Header, {
      mocks,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.removeEventListeners.call({
      caseGoDeeScrollContainer,
      ...mocks,
    })

    wrapper.vm.$options.methods.setWidthForHeader.call({
      caseGoDeeScrollContainer,
      $refs: {},
      ...GODEE_MOCK,
    })

    expect(caseGoDeeScrollContainer.removeEventListener).toHaveBeenCalledTimes(0)
  })

  it('correctly call remove handler in path include godee', () => {
    const wrapper = shallowMount(Header, {
      mocks: GODEE_MOCK,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.removeEventListeners.call({
      caseGoDeeScrollContainer,
      ...GODEE_MOCK,
    })

    expect(caseGoDeeScrollContainer.removeEventListener).toHaveBeenCalledTimes(0)
  })

  it('should correctly work removeEventListeners handler if haven\'t godee container', () => {
    const callObject = {
      ...GODEE_MOCK,
      setWidthForHeader: jest.fn(),
      isGodeePage: true,
    }
    const wrapper = shallowMount(Header, {
      mocks: GODEE_MOCK,
      stubs,
    })

    wrapper.vm.$options.methods.removeEventListeners.call(callObject)

    expect(window.removeEventListener).toHaveBeenCalledWith('resize', callObject.setWidthForHeader)
  })

  it('should correctly work removeEventListeners handler', () => {
    const callObject = {
      ...GODEE_MOCK,
      caseGoDeeScrollContainer,
      setWidthForHeader: jest.fn(),
      isGodeePage: true,
    }
    const wrapper = shallowMount(Header, {
      mocks: GODEE_MOCK,
      stubs,
      container: document.body.appendChild(containerToRender),
    })

    wrapper.vm.$options.methods.removeEventListeners.call(callObject)

    expect(caseGoDeeScrollContainer.removeEventListener).toHaveBeenCalledTimes(1)
    expect(window.removeEventListener).toHaveBeenCalledWith('resize', callObject.setWidthForHeader)
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
