export const countries = [
  'usa',
  'australia',
  'vietnam',
  'france',
  'uk',
  'indonesia',
  'germany',
  'austria',
  'switzerland',
  'canada',
  'latvia',
  'kazakhstan',
  'sweden',
  'finland',
  'uae',
  'denmark',
  'japan',
  'norway',
  'portugal',
  'katar',
  'south_africa',
  'netherlands',
]

export const industries = [
  'Content Streaming',
  'Transportation',
  'HealthTech',
  'IoTs',
  'E-Commerce',
  'AdTech',
  'E-Learning',
  'FinTech',
  'Serverless',
  'BYOD',
  'Blockchain',
  'FoodTech',
]

export const industriesEntries = industries.reduce((acc, industry) => {
  const last = acc[acc.length - 1]
  if (!acc.length) return [[industry]]
  if (last.length === 1) return [...acc.slice(0, acc.length - 1), [...last, industry]]
  if (last.length === 2) return [...acc, [industry]]
  return acc
}, [])
