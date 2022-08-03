export function formatDate (d: Date) {
  const year = d.getUTCFullYear();
  const month = (d.getUTCMonth() + 1).toString().padStart(2, '0');
  const date = (d.getUTCDate()).toString().padStart(2, '0');
  return `${year}-${month}-${date}`;
}

export function addDaysToDate (date: Date, daysToAdd: number) {
  date.setUTCDate(date.getUTCDate() + daysToAdd);
  return date;
}

export function getDifferenceInDays (date1: string, date2: string) {
  const dayDurationInMs = 86400_000;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.ceil((d1.getTime() - d2.getTime()) / dayDurationInMs);
}
