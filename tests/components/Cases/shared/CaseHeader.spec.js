import CaseHeader from '@/components/Cases/shared/CaseHeader.vue'
import { render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'

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
  window.scrollY = 400

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(window, 'addEventListener').mockImplementation(() => {})
    jest.spyOn(window, 'removeEventListener').mockImplementation(() => {})
  })

  it('should render correctly', () => {
    const { container } = render(CaseHeader, {
      props,
      mocks,
    })

    expect(container).toMatchSnapshot()
    expect(screen.queryAllByTestId('test-case_main-video')).toHaveLength(1)
    expect(window.addEventListener).toHaveBeenCalledTimes(1)
  })

  it('should render with navigation type iphone', async () => {
    await Object.defineProperty(global.navigator, 'userAgent', { value: 'iPhone' })

    await render(CaseHeader, {
      props,
      mocks,
    })

    expect(screen.queryAllByTestId('test-case_main-video')).toHaveLength(0)
    expect(window.addEventListener).toHaveBeenCalledTimes(1)
  })

  it('should correct call event listener if text opacity is truthy', async () => {
    jest.clearAllMocks()
    props.textOpacity = true
    const wrapper = shallowMount(CaseHeader, {
      propsData: props,
      mocks,
    })

    wrapper.destroy()
    expect(window.addEventListener).toHaveBeenCalledTimes(1)
    expect(window.removeEventListener).toHaveBeenCalledTimes(1)
  })

  it('should correct call event listener if text opacity is falsy', async () => {
    jest.clearAllMocks()
    props.textOpacity = false
    const wrapper = shallowMount(CaseHeader, {
      propsData: props,
      mocks,
    })

    wrapper.destroy()
    expect(window.addEventListener).toHaveBeenCalledTimes(0)
    expect(window.removeEventListener).toHaveBeenCalledTimes(0)
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

  it('should not update opacity if haven\'t reference', async () => {
    window.scrollY = 200
    const callObject = {
      opacity: 1,
      $refs: {
        // empty
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
