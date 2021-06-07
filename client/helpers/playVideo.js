export default function playVideo(entry) {
  try {
    entry.target.play()
  } catch (err) {
    // prevent play
  }
}
