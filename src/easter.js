const easterMondays = {};
const bigFridays = {};

export function getEasterMonday(year) {
  if (!easterMondays[year]) {
    const a = year % 19;
    const b = year % 4;
    const c = year % 7;
    const d = ((a * 19) + 24) % 30;
    const e = (5 + (2 * b) + (4 * c) + (6 * d)) % 7;

    const date = new Date(year, 2, 22 + d + e + 1, 0, 0, 0, 0);

    if (date.getMonth() === 3 && date.getDate() === 27) {
      date.setDate(20);
    } else if (date.getMonth() === 3 && date.getDate() === 26 && d === 28 && a > 10) {
      date.setDate(19);
    }

    easterMondays[year] = date;
  }

  return easterMondays[year];
}

export function getBigFriday(year) {
  if (!bigFridays[year]) {
    const date = getEasterMonday(year);
    date.setDate(date.getDate() - 3);
    bigFridays[year] = date;
  }

  return bigFridays[year];
}
