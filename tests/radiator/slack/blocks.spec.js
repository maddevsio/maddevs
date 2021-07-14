import {
  header, divider, section, list, listItem, countryListItem, performanceListItem,
} from '../../../server/radiator/slack/blocks'

describe('Radiator > slack > blocks', () => {
  it('header block', () => {
    const text = 'Some text'

    const result = header(text)

    expect(result).toEqual({
      type: 'header',
      text: {
        type: 'plain_text',
        emoji: true,
        text,
      },
    })
  })

  it('divider block', () => {
    const result = divider()

    expect(result).toEqual({ type: 'divider' })
  })

  it('section block', () => {
    const text = 'Text'
    const type = 'mrkdwn'

    const result = section(text, type)

    expect(result).toEqual({
      type: 'section',
      text: {
        type,
        text: `${text}\n\n`,
      },
    })
  })

  it('list block', () => {
    const items = ['item', 'item2', 'item3']

    const result = list(...items)

    expect(result).toEqual(items.join('\n\n'))
  })

  it('listItem block', () => {
    const entity = {
      rate: 'good',
      difference: 25,
      value: 15,
    }
    const title = 'Title'
    const smile = 'custom_smile'
    const parensKey = 'difference'
    const valueType = ''
    const parensType = '%'

    const result = listItem(entity, title, smile, parensKey, valueType, parensType)

    expect(result).toBe(':partying_face: :x: Title: *15* (25%)')
  })

  it('countryListItem block', () => {
    const entity = {
      title: 'India',
      percentage: 25,
    }

    const result = countryListItem(entity)

    expect(result).toBe(':flag-in: India: *25%* от всех посетителей сайта')
  })

  it('countryListItem block with unexpected country', () => {
    const entity = {
      title: 'Unnamed',
      percentage: 20,
    }

    const result = countryListItem(entity)

    expect(result).toBe(':flags: Unnamed: *20%* от всех посетителей сайта')
  })

  it('performanceListItem block', () => {
    const entity = {
      rate: 'good',
      title: 'SEO',
      value: 95,
    }

    const smile = 'good'

    const result = performanceListItem(entity, smile)

    expect(result).toBe(':partying_face: :x: SEO: *95%*')
  })
})
