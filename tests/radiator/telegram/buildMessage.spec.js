import buildMessage from '../../../server/radiator/telegram/buildMessage'

describe('Radiator > telegram > buildMessage', () => {
  it('should correctly build message for telegram', () => {
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
    const range = {
      text: '25/04/2021',
    }
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

    const expected = `*📆 Отчет радиатора по ключевым метрикам за 25/04/2021*
———
За отчетный период сайт https://maddevs.io посетило *10 пользователей*. Всего *20 сессий*, средняя длительность 1 сессии составляет *40s*. *30%* пользователей закрыли сайт никак с ним не провзаимодействовав.

🥳 🧑‍💻 Users: *10* (+100%)
🥳 🛗 Sessions: *20* (+100%)
🥳 🗿 Bounce Rate: *30%* (+100%)
🥳 🕐 Session Duration: *40s* (+100%)

———
Сайт просматривают на разных устройствах. Соотношение:

🥳 💻 Desktop: *130%* (125%)
😐 📱 Mobile: *60%* (100%)
😐 📟 Tablet: *10%* (25%)

———
Топ-3 страны, в которых находятся пользователи, посетившие сайт:

🇺🇸 United States: *25%* от всех посетителей сайта
🇷🇺 Russia: *15%* от всех посетителей сайта
🇫🇷 France: *5%* от всех посетителей сайта

———
Клики и конверсии произведенные пользователями:

🤬 ⚡️ Leads: *6* (7)
🤬 📞 Contacts: *6* (7)
🥳 💼 Careers: *2* (0)

———
Производительность сайта от Google PageSpeed:

😐 📈 Performance: *75%*
😐 👨‍🦽 accessibility: *75%*
😐 🤘 best-practices: *75%*
😐 🥇 seo: *75%*
😐 📱 seo: *75%*

———
`

    expect(result).toBe(expected)
  })
})
