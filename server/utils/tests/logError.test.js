import logError from '../logError'

global.console = {
  error: jest.fn(),
}

describe('logError', () => {
  it('should correctly called console.error', () => {
    const error = 'some error'
    logError(error)
    expect(global.console.error).toHaveBeenCalledWith('', error)
  })

  it('should correctly called console.error with additional message', () => {
    const error = 'some error'
    const message = 'error message'
    logError(error, message)
    expect(global.console.error).toHaveBeenCalledWith(message, error)
  })
})
