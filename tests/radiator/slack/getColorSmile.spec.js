import getColorSmile from '../../../radiator/slack/getColorSmile'

describe('getColorSmile utility', () => {
  it('should correctly return neutral smile if there are no argument', () => {
    expect(getColorSmile()).toBe(':neutral_face:')
  })

  it('should correctly return neutral smile if rate=neutral', () => {
    expect(getColorSmile('neutral')).toBe(':neutral_face:')
  })

  it('should correctly return bad smile if rate=bad', () => {
    expect(getColorSmile('bad')).toBe(':face_with_symbols_on_mouth:')
  })

  it('should correctly return good smile if rate=good', () => {
    expect(getColorSmile('good')).toBe(':partying_face:')
  })
})
