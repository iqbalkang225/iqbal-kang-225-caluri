export const formatTitle = (title) => {
  const deletedDashtitle =  title.replace('-', ' ')
  return deletedDashtitle.slice(0, 1).toUpperCase() + deletedDashtitle.slice(1)
}