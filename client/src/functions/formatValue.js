export const dateChange = (date) => {
  const beforeDate = date
  const formatted = `${beforeDate.getFullYear()}-${beforeDate.getMonth() + 1}-${beforeDate.getDate()}`
  .replace(/\n|\r/g, '');
  return formatted
};