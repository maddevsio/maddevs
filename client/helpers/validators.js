// valid simbols 0-9, +, -
export const phone = value => {
  if (!value) {
    return true
  }
  const regex = /^[0-9\s- +]*$/g
  if (value.match(regex)) {
    return true
  }
  return false
}

export const fileSizeValidation = value => {
  if (!value) {
    return true
  }
  return value.size < 5000000 // max 5md
}

export const fileExt = value => {
  if (!value) {
    return true
  }
  const re = /(\.pdf|\.doc|\.docx)$/i
  if (!re.exec(value.name)) {
    return false
  }
  return true
}
