export const LOCAL_STORAGE_KEYS = {
  ACCEPT_COOKIE: 'accept_cookie',
}

export const saveState = (state, name) => {
  try {
    const res = JSON.stringify(state)
    window.localStorage.setItem(name, res)
  } catch (e) {
    // Ignoring
  }
}
export const loadState = name => {
  try {
    const jsonState = window.localStorage.getItem(name)
    if (!jsonState) {
      return undefined
    }
    return JSON.parse(jsonState)
  } catch (e) {
    return undefined
  }
}
