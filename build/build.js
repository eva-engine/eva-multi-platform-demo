const util = require('util')
const exec = util.promisify(require('child_process').exec)
const fs = require('fs')
const { resolve } = require('path')

const baseDir = resolve(__dirname, '..')
const projectDir = resolve(baseDir, './minigame_project')

const evaFileDir = resolve(baseDir, 'minigame_project/eva/')
console.log(evaFileDir)


const pkgs = JSON.parse(fs.readFileSync(resolve(baseDir, 'package.json'))).dependencies
const evaPkgs = Object.keys(pkgs)
  .filter((pkg) => pkg.indexOf('@eva/') === 0).map(pkg => pkg.substring(5))

const raIndex = evaPkgs.indexOf('renderer-adapter')
evaPkgs.splice(raIndex, 1)

evaPkgs.splice(1, 0, 'renderer-adapter')

const filenames = evaPkgs.map(pkg => {
  let fileName
  if (pkg === 'eva.js') {
    fileName = 'EVA'
  } else if (pkg.indexOf('plugin') === 0) {
    let name = pkg.substring(7, pkg.length);
    // name = name[0] + name.substring(1);
    name = name.replace('-', '.')
    const [a, b] = name.split('-')
    if (b) {
      name = a + b[0].toUpperCase() + b.substring(1)
    }
    if (name === 'evax') {
      name = 'EVAX'
    }
    if (name === 'matterjs') {
      name = 'renderer.matterjs'
    }
    fileName = `EVA.plugin.${name}`
  } else if (pkg === 'renderer-adapter') {
    fileName = `EVA.rendererAdapter`
  }
  return { pkg, fileName }
}).filter(x => !!x.fileName)

start()
async function start() {

  await initProject(filenames)
  await downloadEvaFile(filenames)
  fs.writeFileSync(resolve(baseDir, './node_modules/.evaTempFile'), JSON.stringify(filenames))
}

async function initProject(filenames) {
  const mini = resolve(baseDir, '.mini')
  const gameFile = resolve(projectDir, 'game.js')

  await exec(`rm -rf ${projectDir}`)
  await exec(`mkdir ${projectDir}`)
  await exec(`mkdir -p ${evaFileDir}`)
  await exec(`cp -rf ${mini}/* ${projectDir}`)


  const importFileStr = filenames.map(({ fileName }) => `import './eva/${fileName}'`).join('\n') + `\nimport './main.js'`
  console.log(importFileStr)
  fs.appendFileSync(gameFile, importFileStr)
}

async function downloadEvaFile(filename) {

  const urls = filenames.map(({ pkg, fileName }) => {
    let base = `https://unpkg.com/@eva/${pkg}@1.2.4/dist/${fileName}`
    return {
      debug: {
        url: `${base}.js`,
        name: `${fileName}.js`
      },
      release: {
        url: `${base}.min.js`,
        name: `${fileName}.min.js`
      }
    }
  })
  let errors = []
  const promises = urls.map(async ({ debug, release }) => {
    if (!await download(debug)) {
      errors.push(debug.url)
    }

    // if (!await download(release)) {
    //   errors.push(release.url)
    // }
    return Promise.resolve()
  })
  await Promise.all(promises)
  console.log('错误的文件: ', errors)

}

async function download({ url, name }) {
  console.log('正在下载 Eva.js 文件', name)
  const content = await exec(`curl ${url}`)
  if (content.stdout.indexOf(`Cannot find`) === 0) {
    return false
  }
  fs.writeFileSync(resolve(evaFileDir, name), content.stdout, () => { })
  return true
}