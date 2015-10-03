var holidaysList = require('./holidays.json');
var namedaysList = require('./namedays.json');


function Holidays() {
  this.tmpEasterMonday = {};
}


Holidays.prototype = {

  getIndexFromDate_: function (date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;

    return (d > 9 ? '' : '0') + d + (m > 9 ? '' : '0') + m;
  },

  getEasterMonday_: function (year) {
    var a = year % 19;
    var b = year % 4;
    var c = year % 7;
    var d = (a * 19 + 24) % 30;
    var e = (5 + 2 * b + 4 * c + 6 * d) % 7;

    var date = new Date(year, 2, 22 + d + e + 1, 0, 0, 0, 0);

    if (date.getMonth() == 3 && date.getDate() == 27) {
      date.setDate(20);
    } else if (date.getMonth() == 3 && date.getDate() == 26 && d == 28 && a > 10) {
      date.setDate(19);
    }

    return date;
  },

  isSameDay_: function (date1, date2) {
    return date1.getFullYear() == date2.getFullYear()
      && date1.getMonth() == date2.getMonth()
      && date1.getDate() == date2.getDate();
  },

  getHolidays: function (date) {
    date = date || new Date();

    var index = this.getIndexFromDate_(date);
    var holidays = (holidaysList[index] || []).slice();

    // Easter Monday
    var year = date.getFullYear();
    if (!this.tmpEasterMonday[year]) {
      this.tmpEasterMonday[year] = this.getEasterMonday_(year);
    }
    if (this.isSameDay_(this.tmpEasterMonday[year], date)) {
      holidays.push('Velikonoční pondělí');
    }

    return holidays;
  },

  getNamedays: function (date) {
    date = date || new Date();

    var index = this.getIndexFromDate_(date);
    var namedays = (namedaysList[index] || []).slice();

    return namedays;
  },

  getAll: function (date) {
    return {
      holidays: this.getHolidays(date),
      namedays: this.getNamedays(date)
    };
  }

};


module.exports = new Holidays();
