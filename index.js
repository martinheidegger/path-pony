try {
  module.exports = require('path')
} catch (err) {
  module.exports = require('path-browserify')
}
