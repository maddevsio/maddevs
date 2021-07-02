import Vue from 'vue'
import { Integrations } from '@sentry/tracing'
import * as Sentry from '@sentry/vue'

if (process.env.environment !== 'development') {
  Sentry.init({
    Vue,
    dsn: process.env.sentryDsnFront,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    ignoreErrors: [
      'ResizeObserver loop limit exceeded', // https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded#comment86691361_49384120
      'ResizeObserver loop completed with undelivered notifications.', // ^
    ],
  })
}
