const getAnalytics = require('./getAnalytics')

const LEADS_GOALS = [1, 2, 3, 4, 5, 6, 7, 8]
const CAREER_GOALS = [9]
const CONTACT_GOALS = [10, 11, 12, 13, 14, 15]

const leadsMetrics = LEADS_GOALS.map(id => ({
  expression: `ga:goal${id}Completions`,
}))

const careerMetrics = CAREER_GOALS.map(id => ({
  expression: `ga:goal${id}Completions`,
}))

const contactMetrics = CONTACT_GOALS.map(id => ({
  expression: `ga:goal${id}Completions`,
}))

function prettify({ rawLeads, rawCareers, rawContacts }) {
  const goals = {
    leads: {
      value: rawLeads.reports[0].data.totals[0].values.reduce((acc, curr) => acc + Number(curr), 0),
      previous: rawLeads.reports[0].data.totals[1].values.reduce((acc, curr) => acc + Number(curr), 0),
    },
    career: {
      value: rawCareers.reports[0].data.totals[0].values.reduce((acc, curr) => acc + Number(curr), 0),
      previous: rawCareers.reports[0].data.totals[1].values.reduce((acc, curr) => acc + Number(curr), 0),
    },
    contacts: {
      value: rawContacts.reports[0].data.totals[0].values.reduce((acc, curr) => acc + Number(curr), 0),
      previous: rawContacts.reports[0].data.totals[1].values.reduce((acc, curr) => acc + Number(curr), 0),
    },
  }

  goals.leads.rate = goals.leads.value > goals.leads.previous ? 'good' : 'bad'
  goals.career.rate = goals.career.value > goals.career.previous ? 'good' : 'bad'
  goals.contacts.rate = goals.contacts.value > goals.contacts.previous ? 'good' : 'bad'

  return goals
}

async function main() {
  const rawLeads = await getAnalytics({ metrics: leadsMetrics })
  const rawCareers = await getAnalytics({ metrics: careerMetrics })
  const rawContacts = await getAnalytics({ metrics: contactMetrics })
  return prettify({ rawLeads, rawCareers, rawContacts })
}

module.exports = main
