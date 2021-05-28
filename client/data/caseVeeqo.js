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
    alt: 'CloudWatch Logo.',
  },
  {
    icon: 'danger',
    description: 'Analyzing the true RAM use and identifying 1,200-1,500 worker connections taking up about 40 GB of RAM.',
    alt: 'RAM Icon.',
  },
  {
    icon: 'gear',
    description: 'Adding PgBouncers to reduce the load on the database.',
    alt: 'PgBouncers Icon.',
  },
  {
    icon: 'speed',
    description: 'Stabilizing connection pooling by applying ELB and thus distributing traffic more evenly to decrease the number of SPOFs.',
    alt: 'Speed Icon.',
  },
]

export const elasticsearchResults = [
  {
    icon: 'speed-card',
    title: '~250-300 ms',
    description: 'Search time went down to under 5 seconds (now: ~250-300 ms)',
    alt: 'Search Time Went Down to Under 5 Seconds – Now: 250–300 Ms.',
    animationSettings: {
      disabled: true,
    },
  },
  {
    icon: 'message-card',
    title: 'Feedback',
    description: 'We received massive positive feedback as Veeqo users were contacting customer',
    alt: 'We Received Massive Positive Feedback As Veeqo Users Were Contacting the Customer.',
    animationSettings: cardAnimationY20,
  },
  {
    icon: 'gears-card',
    title: 'Elasticsearch',
    description: 'Elasticsearch became more efficient and reliable without costing the customer more',
    alt: 'Elasticsearch Became More Efficient and Reliable Without Costing the Customer More.',
    animationSettings: cardAnimationY40,
  },
]

export const infrastructureAsCodeResult = [
  {
    icon: 'circle',
    cardName: 'PostgreSQL',
    title: '40GB of RAM',
    description: '40 GB of RAM freed up. ReadIOPS halved. Number of TPS increased by 50%',
    alt: '40 GB of RAM Freed Up. ReadIOPS Halved. The Number of TPS Increased by 50%.',
    animationSettings: {
      disabled: true,
    },
  },
  {
    icon: 'chart',
    cardName: 'Infrastructure costs',
    title: 'Reduced by 35%',
    description: 'without losses in performance and security',
    alt: 'Infrastructure Costs Redused by 35% Without Losses in Performance and Security.',
    animationSettings: cardAnimationY20,
  },
  {
    icon: 'speed-card',
    cardName: 'Elasticsearch',
    title: '~250-300ms',
    description: 'More secure data access Search time decreased initially to under 5 seconds and by now to ~250-300ms',
    alt: 'Elasticsearch – More Secure Data Access Search Time Decreased Initially to Under 5 Seconds and by Now to ~250–300ms.',
    animationSettings: cardAnimationY40,
  },
]

export const technologies = [
  {
    name: 'ruby',
    alt: 'Ruby',
    imgAlt: 'Ruby Programming Language Logo.',
  },
  {
    name: 'node',
    alt: 'NodeJS',
    imgAlt: 'NodeJS Logo',
  },
  {
    name: 'elastic',
    alt: 'Elasticsearch',
    imgAlt: 'Elasticsearch Logo.',
  },
  {
    name: 'postgresql',
    alt: 'PostgreSQL',
    imgAlt: 'PostgreSQL Database Management System Logo.',
  },
  {
    name: 'rebbit-mq',
    alt: 'RebbitMQ',
    imgAlt: 'RebbitMQ Message Broker Software Logo.',
  },
  {
    name: 'redis',
    alt: 'Redis',
    imgAlt: 'Redis Data Structure Store Logo.',
  },
  {
    name: 'memcached',
    alt: 'Memcached',
    imgAlt: 'Memcached Memory Caching System Logo.',
  },
  {
    name: 'cloud-watch',
    alt: 'Cloudwatch',
    imgAlt: 'Cloudwatch Logo.',
  },
  {
    name: 'prometheus',
    alt: 'Prometheus',
    imgAlt: 'Prometheus Logo.',
  },
  {
    name: 'grafana',
    alt: 'Grafana',
    imgAlt: 'Grafana Software Application Logo.',
  },
  {
    name: 'sentry-black',
    alt: 'Sentry',
    imgAlt: 'Sentry Error Tracking System Logo.',
  },
  {
    name: 'heroku',
    alt: 'Heroku',
    imgAlt: 'Heroku Cloud Platform Logo.',
  },
  {
    name: 'aws',
    alt: 'AWS',
    imgAlt: 'AWS Cloud Computing Platforms Logo.',
  },
  {
    name: 'kubernetes',
    alt: 'Kubernetes',
    imgAlt: 'Kubernetes Container Orchestration System Logo.',
  },
  {
    name: 'terraform',
    alt: 'Terraform',
    imgAlt: 'Terraform Infrastructure as Code Software Tool Logo.',
  },
  {
    name: 'travis-ci',
    alt: 'Travis CI',
    imgAlt: 'Travis CI Logo.',
  },
  {
    name: 'jenkins',
    alt: 'Jenkins',
    imgAlt: 'Jenkins Logo.',
  },
  {
    name: 'docker',
    alt: 'Docker',
    imgAlt: 'Docker Logo.',
  },
  {
    name: 'helm',
    alt: 'Helm',
    imgAlt: 'Helm Logo.',
  },
]

export const team = [
  {
    name: 'Maxim Glotov',
    position: 'DevOps engineer',
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
