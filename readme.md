# path-pony

Small ponyfill to use node's `path` module in browsers, node or react-native.

## Usage

```javascript
const path = require('path-pony')
path.sep // separator
```

## Motivation

The node [`path`](https://nodejs.org/api/path.html) package doesn't work for browser, this is fixed by npm package [`path-browserify`](https://npmjs.com/package/path-browserify), but which in-turn doesn't work for node. This module is a ["ponyfill"](https://github.com/sindresorhus/ponyfill) for `path` that works as-is in node or the browser ... or react-native for that matter.

## License

[MIT](./LICENSE)
