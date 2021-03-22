import redirectToHttps from '../redirectToHttps';

describe('redirectToHttps', () => {
  const req = {
    secure: true,
    headers: {
      host: 'maddevs.io'
    },
    url: '/123'
  };

  const res = {
    redirect: jest.fn()
  };

  const next = jest.fn();

  test('secure', () => {
    redirectToHttps(req, res, next);
    expect(next).toBeCalledTimes(1);
  });

  test('not secure, redirect', () => {
    req.secure = false;
    redirectToHttps(req, res, next);
    expect(res.redirect).toBeCalledWith(`https://${req.headers.host}${req.url}`);
  });
});
