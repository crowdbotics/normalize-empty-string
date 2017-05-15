# normalize-empty-string [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> String type attributes must have lengths greater than zero while some of the properties from the 3rd API response may contain an empty string. This function will convert those empty string values to 'NULL'.

## Installation

```sh
$ npm install --save normalize-empty-string
```

## Usage

```js
const normalizeEmptyString = require('normalize-empty-string');

normalizeEmptyString({
  hello: ''
});
```
## License

MIT © [Crowdbotics](crowdbotics.com)


[npm-image]: https://badge.fury.io/js/normalize-empty-string.svg
[npm-url]: https://npmjs.org/package/normalize-empty-string
[travis-image]: https://travis-ci.org/crowdbotics/normalize-empty-string.svg?branch=master
[travis-url]: https://travis-ci.org/crowdbotics/normalize-empty-string
[daviddm-image]: https://david-dm.org/crowdbotics/normalize-empty-string.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/crowdbotics/normalize-empty-string
