export function formatDate(d: Date) {
  const year = d.getUTCFullYear();
  const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
  const date = (d.getUTCDate()).toString().padStart(2, '0');
  return `${year}-${month}-${date}`;
}

export function addDaysToDate(date: Date, daysToAdd: number) {
  date.setUTCDate(date.getUTCDate() + daysToAdd);
  return date;
}