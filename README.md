# holidays-cz
Returns holidays and name days on a specified date (cz)

## Instalation
`npm install holidays-cz`

## Methods

### HolidaysCz.getHolidays([*Date date*])
Get holidays on specified date.

### HolidaysCz.getNamedays([*Date date*])
Get name days on specified date.

### HolidaysCz.getAll([*Date date*])
Get holidays and name days on a specified date.

## Example
```javascript
var HolidaysCz = require('holidays-cz');
var date = new Date(2015, 11, 24);

// returns: [ 'Štědrý den' ]
console.log(HolidaysCz.getHolidays(date));

// returns: [ 'Adam', 'Eva' ]
console.log(HolidaysCz.getNamedays(date));

// returns: { holidays: [ 'Štědrý den' ], namedays: [ 'Adam', 'Eva' ] }
console.log(HolidaysCz.getAll(date));
```
