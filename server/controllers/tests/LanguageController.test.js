import * as controller from '../LanguageController';

describe('LanguageController', () => {
  const req = {};
  const res = {
    redirect: jest.fn()
  };

  test('switchLanguage should redirect to main page', () => {
    controller.switchLanguage(req, res);
    expect(res.redirect).toBeCalledWith(301, 'https://maddevs.io/');
  });
});
