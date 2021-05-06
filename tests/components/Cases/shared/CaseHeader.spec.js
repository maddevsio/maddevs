import CaseHeader from '@/components/Cases/shared/CaseHeader.vue'
import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'

const EVENT_LISTENER = jest.fn()
const REMOVE_LISTENER = jest.fn()
const SCROLL_POSITION = 400

const props = {
  logo: {
    width: 100,
    height: 100,
    pictureFolder: 'godee',
    file: 'godee-logo',
    alt: 'some-logo-alt',
  },
  width: 100,
  height: 100,
  pictureFolder: '',
  file: 'some-filename',
  alt: 'some-alt',
  videoName: 'video-name',
}

const mocks = {
  $getMediaFromS3: img => img,
}

describe('CaseHeader component', () => {
  window.addEventListener = EVENT_LISTENER
  window.removeEventListener = REMOVE_LISTENER
  window.scrollY = SCROLL_POSITION

  it('should render correctly', () => {
    const { container } = render(CaseHeader, {
      props,
      mocks,
    })

    expect(container).toMatchSnapshot()
    expect(screen.queryAllByTestId('test-case_main-video')).toHaveLength(1)
    expect(EVENT_LISTENER).toHaveBeenCalledTimes(0)
  })

  it('should render with navigation type iphone', async () => {
    await Object.defineProperty(global.navigator, 'userAgent', { value: 'iPhone' })

    await render(CaseHeader, {
      props,
      mocks,
    })

    expect(screen.queryAllByTestId('test-case_main-video')).toHaveLength(0)
    expect(EVENT_LISTENER).toHaveBeenCalledTimes(0)
  })

  it('should correct call event listener if text opacity is truthy', async () => {
    props.textOpacity = true
    const wrapper = shallowMount(CaseHeader, {
      propsData: props,
      mocks,
    })

    wrapper.destroy()
    expect(EVENT_LISTENER).toHaveBeenCalledTimes(1)
    expect(REMOVE_LISTENER).toHaveBeenCalledTimes(1)
  })

  it('should correct work on scroll method', async () => {
    const callObject = {
      opacity: 1,
      $refs: {
        mainVideo: {
          clientHeight: 800,
        },
      },
    }
    const wrapper = shallowMount(CaseHeader, {
      propsData: props,
      mocks,
    })

    wrapper.vm.$options.methods.onScroll.call(callObject)
    expect(callObject.opacity).toBe(0.7)
  })

  it('should not update opacity if function result less then 0', async () => {
    window.scrollY = 2800
    const callObject = {
      opacity: 1,
      $refs: {
        mainVideo: {
          clientHeight: 800,
        },
      },
    }
    const wrapper = shallowMount(CaseHeader, {
      propsData: props,
      mocks,
    })

    wrapper.vm.$options.methods.onScroll.call(callObject)
    expect(callObject.opacity).toBe(1)
  })
})
