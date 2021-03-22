import redirectToCorrectBlogUrl from '../redirectToCorrectBlogUrl';

describe('redirectToCorrectBlogUrl', () => {
  const req = {
    headers: {
      host: '123'
    },
    url: 'https://blog.maddevs.io'
  };

  const res = {
    redirect: jest.fn()
  };

  const next = jest.fn();

  test('not blog host', () => {
    redirectToCorrectBlogUrl(req, res, next);
    expect(next).toBeCalledTimes(1);
  });

  test('blog host with redirect to main page', () => {
    req.headers.host = 'blog.maddevs.io';
    redirectToCorrectBlogUrl(req, res, next);
    expect(res.redirect).toBeCalledWith(301, 'https://maddevs.io/blog');
  });

  test('blog host with redirect to specific page', () => {
    req.headers.host = 'blog.maddevs.io';
    req.url = '/projects/home';
    redirectToCorrectBlogUrl(req, res, next);
    expect(res.redirect).toBeCalledWith(301, 'https://maddevs.io/projects#case-studies');
  });
});
