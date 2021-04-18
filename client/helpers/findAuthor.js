// Helper, that gets the current author from the array by id
export default (authorId, allAuthors) => {
  if (!(allAuthors && allAuthors.length)) return null
  return allAuthors.find(a => a.id === authorId)
}
