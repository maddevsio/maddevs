import * as controller from '../LanguageController'

describe('languageController', () => {
  const req = {}
  const res = {
    redirect: jest.fn(),
  }

  it('switchLanguage should redirect to main page', () => {
    controller.switchLanguage(req, res)
    expect(res.redirect).toHaveBeenCalledWith(301, 'https://maddevs.io/')
  })
})
