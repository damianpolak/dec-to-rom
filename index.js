/*
 * decToRom
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
     number === '' ||
     typeof(number) !== 'number') {
       throw new TypeError('Expected correct integer value');
  }
};
