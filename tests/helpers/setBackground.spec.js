import setBackground from '@/helpers/setBackground'

describe('setBackground helper', () => {
  it('Function should set new value for entry.target.style.background', () => {
    const entry = {
      target: {
        style: {
          background: '',
        },

        dataset: {
          background: '#5A6BC3',
        },
      },
    }

    setBackground(entry)

    expect(entry.target.style.background).toBe('#5A6BC3')
  })
})
