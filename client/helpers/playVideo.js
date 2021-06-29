export default function playVideo(entry) {
  // NOTE: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
  const playPromise = entry.target.play()
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Automatic playback started!
      // Show playing UI.
      entry.target.play()
    }).catch(() => {
      // Auto-play was prevented
      // Show paused UI.
    })
  }
}
