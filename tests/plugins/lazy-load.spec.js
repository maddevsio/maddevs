import lazyLoad from '@/plugins/lazy-load'

describe('lazy load function', () => {
  it('renders correctly', () => {
    let result

    const inject = jest.fn((actionType, lazyObject) => {
      result = lazyObject
    })

    lazyLoad({}, inject)

    expect(result.init).toBeTruthy()
    expect(result.destroy).toBeTruthy()
    expect(result.reset).toBeTruthy()
  })

  it('should initial method work correctly', () => {
    const OBSERVER = jest.fn(() => {})
    window.IntersectionObserver = OBSERVER

    const inject = jest.fn((actionType, lazyObject) => {
      lazyObject.init({})
    })

    lazyLoad({}, inject)

    expect(OBSERVER).toHaveBeenCalledTimes(1)
  })
})
