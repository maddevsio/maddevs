import buildMessage from '../../../radiator/slack/buildMessage'

describe('Radiator > slack > buildMessage', () => {
  it('should correctly build message for slack', () => {
    const analytics = {
      core: {
        bounceRate: {
          difference: '+100',
          rate: 'good',
          previous: 15,
          value: 30,
        },
        duration: {
          difference: '+100',
          rate: 'good',
          previous: '20s',
          value: '40s',
        },
        sessions: {
          difference: '+100',
          rate: 'good',
          previous: 10,
          value: 20,
        },
        users: {
          difference: '+100',
          rate: 'good',
          previous: 5,
          value: 10,
        },
      },
      countries: [
        {
          rate: 'neutral',
          percentage: 25,
          title: 'United States',
          value: 50,
        },
        {
          rate: 'neutral',
          percentage: 15,
          title: 'Russia',
          value: 30,
        },
        {
          rate: 'neutral',
          percentage: 5,
          title: 'France',
          value: 10,
        },
      ],
      devices: {
        desktop: {
          rate: 'good',
          previous: 125,
          title: 'desktop',
          value: 130,
        },
        mobile: {
          rate: 'neutral',
          previous: 100,
          title: 'mobile',
          value: 60,
        },
        tablet: {
          rate: 'neutral',
          previous: 25,
          title: 'tablet',
          value: 10,
        },
      },
      goals: {
        career: {
          rate: 'good',
          previous: 0,
          value: 2,
        },
        contacts: {
          rate: 'bad',
          previous: 7,
          value: 6,
        },
        leads: {
          rate: 'bad',
          previous: 7,
          value: 6,
        },
      },
    }
    const range = '25/04/2021'
    const lighthouse = {
      performance: {
        title: 'Performance',
        value: 75,
        rate: 'neutral',
      },
      accessibility: {
        title: 'accessibility',
        value: 75,
        rate: 'neutral',
      },
      'best-practices': {
        title: 'best-practices',
        value: 75,
        rate: 'neutral',
      },
      seo: {
        title: 'seo',
        value: 75,
        rate: 'neutral',
      },
      pwa: {
        title: 'seo',
        value: 75,
        rate: 'neutral',
      },
    }

    const result = buildMessage({ analytics, range, lighthouse })

    expect(result).toEqual({
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            emoji: true,
            text: '<!here> :calendar: Отчет радиатора по ключевым метрикам за 25/04/2021',
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'За вчера сайт <https://maddevs.io|maddevs.io> посетило *10 пользователей*. Всего *20 сессий*, средняя длительность 1 сессии составляет *40s*. *30%* пользователей закрыли сайт никак с ним не провзаимодействовав.\n\n',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ':partying_face: :technologist: Users: *10* (+100%)\n\n:partying_face: :elevator: Sessions: *20* (+100%)\n\n:partying_face: :moyai: Bounce Rate: *30%* (+100%)\n\n:partying_face: :clock1: Session Duration: *40s* (+100%)\n\n',
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Сайт просматривают на разных устройствах. Вот соотношение за вчерашний день:\n\n',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ':partying_face: :computer: Desktop: *130%* (125%)\n\n:neutral_face: :iphone: Mobile: *60%* (100%)\n\n:neutral_face: :pager: Tablet: *10%* (25%)\n\n',
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Топ-3 страны, в которых находятся пользователи, посетившие сайт:\n\n',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ':flag-us: United States: *25%* от всех посетителей сайта\n\n:flag-ru: Russia: *15%* от всех посетителей сайта\n\n:flag-fr: France: *5%* от всех посетителей сайта\n\n',
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Клики и конверсии произведенные пользователями:\n\n',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ':face_with_symbols_on_mouth: :zap: Leads: *6* (7)\n\n:face_with_symbols_on_mouth: :telephone_receiver: Contacts: *6* (7)\n\n:partying_face: :briefcase: Careers: *2* (0)\n\n',
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Производительность сайта от Google PageSpeed:\n\n',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: ':neutral_face: :chart_with_upwards_trend: Performance: *75%*\n\n:neutral_face: :man_in_manual_wheelchair: accessibility: *75%*\n\n:neutral_face: :the_horns: best-practices: *75%*\n\n:neutral_face: :sports_medal: seo: *75%*\n\n:neutral_face: :iphone: seo: *75%*\n\n',
          },
        },
        {
          type: 'divider',
        },
      ],
    })
  })
})
