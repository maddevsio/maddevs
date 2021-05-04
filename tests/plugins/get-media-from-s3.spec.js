import getS3Media from '@/plugins/get-media-from-s3.js'

const TEST_ENV = 'test-env'

describe('get-media-form-s3 function', () => {
  process.env.s3PublicUrl = TEST_ENV

  it('renders correctly without path', () => {
    let result

    const inject = jest.fn((actionType, callback) => {
      result = callback()
    })

    getS3Media({}, inject)
    expect(inject).toHaveBeenCalledTimes(1)
    expect(result).toBeNull()
  })

  it('renders correctly with path', () => {
    const PATH = '/some-path'
    let result
    const inject = jest.fn((actionType, callback) => {
      result = callback('/some-path')
    })

    getS3Media({}, inject)
    expect(result).toBe(`${TEST_ENV}${PATH}`)
    expect(inject).toHaveBeenCalledTimes(1)
  })

  it('renders correctly with path, but without slash', () => {
    const PATH = 'some-path'
    let result
    const inject = jest.fn((actionType, callback) => {
      result = callback('some-path')
    })

    getS3Media({}, inject)
    expect(result).toBe(`${TEST_ENV}/${PATH}`)
    expect(inject).toHaveBeenCalledTimes(1)
  })

  it('renders correctly if process env is null', () => {
    process.env = null
    let result
    const inject = jest.fn((actionType, callback) => {
      callback('/some-path')
    })

    try {
      getS3Media({}, inject)
    } catch (e) {
      result = e.message
    } finally {
      expect(result).toMatch('Cannot read property \'s3PublicUrl\' of null')
      expect(inject).toHaveBeenCalledTimes(1)
    }
  })
})
