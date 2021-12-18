const { resolve } = require('path')
const target = resolve('../docs');
const getConfig = require("./webpack");
module.exports = getConfig(target)