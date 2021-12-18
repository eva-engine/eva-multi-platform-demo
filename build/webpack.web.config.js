const { resolve } = require('path')
const getConfig = require("./webpack");
const config = getConfig(resolve(__dirname, '../docs'))

config.mode = 'production'
delete config.devtool

module.exports = config