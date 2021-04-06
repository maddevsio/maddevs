import Vue from 'vue'
import { Integrations } from '@sentry/tracing'
import * as Sentry from '@sentry/vue'

if (process.env.environment !== 'development') {
  Sentry.init({
    Vue,
    dsn: process.env.sentryDsnFront,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    ignoreErrors: ['ResizeObserver loop limit exceeded'],
  })
}
