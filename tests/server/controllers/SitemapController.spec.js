import { getSitemap } from '../../../server/controllers/SitemapController'

describe('SitemapController function', () => {
  it('should return true and print error if config not include flag', () => {
    const res = { sendFile: jest.fn() }
    getSitemap(null, res)

    expect(res.sendFile).toHaveBeenCalledWith(`${process.cwd()}/sitemap.xml`)
  })
})
