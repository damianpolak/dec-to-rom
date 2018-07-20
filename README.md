# dec-to-rom [![Build Status](https://travis-ci.org/damianpolak/dec-to-rom.svg?branch=master)](https://travis-ci.org/damianpolak/dec-to-rom)

> Converts decimal to Roman numerals between 1 - 100000

## Install

```
$ npm install dec-to-rom
```

## Usage

```js
const decToRom = require('dec-to-rom');

decToRom(123);
// returns 'CXXIII'
decToRom(567);
// returns 'DLXVII'
decToRom(3099);
// returns 'MMMXCIX'
decToRom(1219);
// returns 'MCCXIX'
decToRom(40215);
// returns 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMCCXV'
```

## License

MIT © Damian Polak
