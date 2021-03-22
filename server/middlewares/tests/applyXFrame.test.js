import applyXFrame from '../applyXFrame';

test('applyXFrame', () => {
  const req = {};

  const res = {
    set: jest.fn()
  };

  const next = jest.fn();

  applyXFrame(req, res, next);

  expect(res.set).toBeCalledWith('X-Frame-Options', 'DENY');
  expect(next).toBeCalledTimes(1);
});
