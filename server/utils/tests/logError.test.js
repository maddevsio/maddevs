import logError from '../logError';

global.console = {
  error: jest.fn()
};

describe('logError', () => {
  test('should correctly called console.error', () => {
    const error = 'some error';
    logError(error);
    expect(global.console.error).toBeCalledWith('', error);
  });

  test('should correctly called console.error with additional message', () => {
    const error = 'some error';
    const message = 'error message';
    logError(error, message);
    expect(global.console.error).toBeCalledWith(message, error);
  });
});
