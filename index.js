/*
 * dec-to-rom
 * https://github.com/damianpolak/dec-to-rom
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

module.exports = decToRom = (number) => {
  'use strict';

  if(number === undefined ||
     number === null ||
     number === 0 ||
     number === '' ||
     typeof(number) !== 'number') {
       throw new TypeError('Expected correct integer value between 1 - 100000');
  }

  number = Math.floor(number);
  let decValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let romValues = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let roman = '';

  let rotate = () => {
    for(let i = decValues.length - 1; i >= 0; --i) {
      if(number >= decValues[i] && number < 100000) {
        number -= decValues[i];
        return romValues[i];
      } else if(number >= decValues[i-1] && number < decValues[i]) {
        number -= decValues[i-1];
        return romValues[i-1];
      }
    }
  }

  while(number != 0) {
     roman += rotate();
  }

  return roman;
};
