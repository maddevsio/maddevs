import debounce from '@/helpers/debounce'

// Tell Jest to mock all timeout functions
jest.useFakeTimers()

describe('debounce', () => {
  let func
  let debouncedFunc

  beforeEach(() => {
    func = jest.fn()
    debouncedFunc = debounce(func, 1000)
  })

  it('execute just once', () => {
    for (let i = 0; i < 100; i += 1) {
      debouncedFunc()
    }

    // Fast-forward time
    jest.runAllTimers()

    expect(func).toHaveBeenCalledTimes(1)
  })
})
