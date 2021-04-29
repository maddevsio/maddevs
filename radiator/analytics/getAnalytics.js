const { google } = require('googleapis')

/**
 * Analytics object
 */
const googleAnalytics = google.analyticsreporting('v4')

/**
 * Function for getting data from analytics
 * @param {Object} requestParams
 * @returns {*}
 */
async function getAnalytics({ metrics = [], dimensions = [], range } = {}) {
  const response = await googleAnalytics.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: '230523659',
          dateRanges: [
            range.originalRange,
            range.previousRange,
          ],
          metrics,
          dimensions,
        },
      ],
    },
  })

  return response.data
}

module.exports = getAnalytics
