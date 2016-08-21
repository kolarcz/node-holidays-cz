export function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() === date2.getDate();
}

export function getIndexFromDate(date) {
  const d = date.getDate();
  const m = date.getMonth() + 1;

  return (d > 9 ? '' : '0') + d + (m > 9 ? '' : '0') + m;
}
