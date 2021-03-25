import applyXFrame from '../applyXFrame'

describe('applyXFrame', () => {
  it('simple', () => {
    const req = {}

    const res = {
      set: jest.fn(),
    }

    const next = jest.fn()

    applyXFrame(req, res, next)

    expect(res.set).toHaveBeenCalledWith('X-Frame-Options', 'DENY')
    expect(next).toHaveBeenCalledTimes(1)
  })
})
