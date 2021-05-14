const copyToClipboard = text => {
  if (text) {
    const tempInput = document.createElement('input')
    document.body.appendChild(tempInput)
    tempInput.value = text
    tempInput.select()
    tempInput.setSelectionRange(0, 99999) /* For mobile devices */
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    return text
  }
  return null
}

export default copyToClipboard
