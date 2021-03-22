import redirectToTrailingSlash from '../redirectToTrailingSlash';

describe('redirectToTrailingSlash', () => {
  const req = {
    method: 'GET',
    url: '/123',
    headers: {
      host: 'maddevs.io'
    }
  };

  const res = {
    redirect: jest.fn()
  };

  const next = jest.fn();

  test('without trailing slash', () => {
    redirectToTrailingSlash(req, res, next);
    expect(res.redirect).toBeCalledWith(`https://${req.headers.host}${req.url}/`);
  });

  test('wtih trailing slash', () => {
    req.url = `${req.url}/`;
    redirectToTrailingSlash(req, res, next);
    expect(next).toBeCalledTimes(1);
  });

  // test('secure', () => {
  //   redirectToHttps(req, res, next);
  //   expect(next).toBeCalledTimes(1);
  // });

  // test('not secure, redirect', () => {
  //   req.secure = false;
  //   redirectToHttps(req, res, next);
  //   expect(res.redirect).toBeCalledWith(`https://${req.headers.host}${req.url}`);
  // });
});
