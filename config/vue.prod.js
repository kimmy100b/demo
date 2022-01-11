const { merge } = require('webpack-merge');
const common = require('./vue.common.js');

module.exports = merge(common, {
  mode: 'production'
}
);