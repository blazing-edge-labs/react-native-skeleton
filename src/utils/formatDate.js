// TODO: Use moment

export function formatDate (date) {
  let newDate = new Date(date)
  return newDate.toLocaleDateString().replace(/\//g, '-')
}

export function formatTime (date) {
  let newTime = new Date(date)
  return newTime.toLocaleTimeString().replace(/:\d{2}$/g, ' ')
}
