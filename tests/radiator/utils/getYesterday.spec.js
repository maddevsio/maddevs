import getYesterday from '../../../radiator/utils/parseRange'

class MockedDate {
  constructor() {
    this.setDate = date => date
    this.getDate = () => 2
    this.toLocaleDateString = () => '4/25/2021'
  }
}

describe('parseRange utility', () => {
  it('should correctly return yesterday in the correct format', () => {
    global.Date = MockedDate
    expect(getYesterday()).toBe('25/4/2021')
  })
})
