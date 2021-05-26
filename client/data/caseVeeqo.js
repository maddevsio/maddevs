import { cardAnimationY20, cardAnimationY40 } from '@/data/animationConfigs'

export const inventoryAndShipping = [
  {
    title: 'FOUNDED',
    number: '2013',
    description: 'by experienced ecommerce retailer',
  },
  {
    title: 'OVER',
    number: '1.5bn',
    description: 'inventory updates processed in Veeqo every year',
  },
  {
    title: 'OVER',
    number: '31m',
    description: 'items picked, packed and shipped through annually',
  },
]

export const techSolutions = [
  {
    icon: 'cloud',
    description: 'Collecting host metrics (CloudWatch and okmeter showed consequences, not causes).',
  },
  {
    icon: 'danger',
    description: 'Analyzing the true RAM use and identifying 1,200-1,500 worker connections taking up about 40 GB of RAM.',
  },
  {
    icon: 'gear',
    description: 'Adding PgBouncers to reduce the load on the database.',
  },
  {
    icon: 'speed',
    description: 'Stabilizing connection pooling by applying ELB and thus distributing traffic more evenly to decrease the number of SPOFs.',
  },
]

export const elasticsearchResults = [
  {
    icon: 'speed-card',
    title: '~250-300 ms',
    description: 'Search time went down to under 5 seconds (now: ~250-300 ms)',
    animationSettings: {
      disabled: true,
    },
  },
  {
    icon: 'message-card',
    title: 'Feedback',
    description: 'We received massive positive feedback as Veeqo users were contacting customer',
    animationSettings: cardAnimationY20,
  },
  {
    icon: 'gears-card',
    title: 'Elasticsearch',
    description: 'Elasticsearch became more efficient and reliable without costing the customer more',
    animationSettings: cardAnimationY40,
  },
]

export const infrastructureAsCodeResult = [
  {
    icon: 'circle',
    cardName: 'PostgreSQL',
    title: '40GB of RAM',
    description: '40 GB of RAM freed up. ReadIOPS halved. Number of TPS increased by 50%',
    animationSettings: {
      disabled: true,
    },
  },
  {
    icon: 'chart',
    cardName: 'Infrastructure costs',
    title: 'Reduced by 35%',
    description: 'without losses in performance and security',
    animationSettings: cardAnimationY20,
  },
  {
    icon: 'speed-card',
    cardName: 'Elasticsearch',
    title: '~250-300ms',
    description: 'More secure data access Search time decreased initially to under 5 seconds and by now to ~250-300ms',
    animationSettings: cardAnimationY40,
  },
]

export const technologies = [
  {
    name: 'ruby',
    alt: 'Ruby',
  },
  {
    name: 'node',
    alt: 'NodeJS',
  },
  {
    name: 'elastic',
    alt: 'Elasticsearch',
  },
  {
    name: 'postgresql',
    alt: 'PostgreSQL',
  },
  {
    name: 'rebbit-mq',
    alt: 'RebbitMQ',
  },
  {
    name: 'redis',
    alt: 'Redis',
  },
  {
    name: 'memcached',
    alt: 'Memcached',
  },
  {
    name: 'cloud-watch',
    alt: 'Cloudwatch',
  },
  {
    name: 'prometheus',
    alt: 'Prometheus',
  },
  {
    name: 'grafana',
    alt: 'Grafana',
  },
  {
    name: 'sentry-black',
    alt: 'Sentry',
  },
  {
    name: 'heroku',
    alt: 'Heroku',
  },
  {
    name: 'aws',
    alt: 'AWS',
  },
  {
    name: 'kubernetes',
    alt: 'Kubernetes',
  },
  {
    name: 'terraform',
    alt: 'Terraform',
  },
  {
    name: 'travis-ci',
    alt: 'Travis CI',
  },
  {
    name: 'jenkins',
    alt: 'Jenkins',
  },
  {
    name: 'docker',
    alt: 'Docker',
  },
  {
    name: 'helm',
    alt: 'Helm',
  },
]

export const team = [
  {
    name: 'Maxim Glotov',
    position: 'Senior DevOps engineer',
    image: {
      file: 'maxim-glotov',
    },
  },
  {
    name: 'Andrew Sapozhnikov',
    position: 'Head of DevOps',
    image: {
      file: 'andrew-sapozhnikov',
    },
  },
]
