const { resolve } = require('path')
const getConfig = require("./webpack");
const config = getConfig(resolve(__dirname, '../minigame_project'))
config.mode = 'production'
delete config.devtool

const { readFileSync } = require('fs');
let fileNames
try {
  fileNames = JSON.parse(readFileSync(resolve(__dirname, '../node_modules/.evaTempFile'), { encoding: 'utf-8' }))

} catch (e) {
  throw new Error('当前编译出现问题，没有找到.evaTempFile')
}
let externals = {}
for (let name of fileNames) {
  const { pkg, fileName } = name
  console.log(pkg, fileName)

  externals[`@eva/${pkg}`] = fileName.split('.')
}

config.externals = externals
module.exports = config