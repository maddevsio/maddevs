const getRobots = env => {
  if (env === 'staging') {
    return {
      UserAgent: '*',
      Disallow: '/',
    }
  }
  return {
    UserAgent: '*',
  }
}

export default getRobots
