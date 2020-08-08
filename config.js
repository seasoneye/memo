const hostName = 'http://192.168.1.4'
const apiPrefix = 'http://192.168.1.4'

const dev_hostName = 'http://localhost:8080'
const dev_apiPrefix = 'https://www.fastmock.site/mock/d378d45309cdf7e4fa81b901646d90e5/mock'

module.exports = {
	hostName,
	apiPrefix,
	dev_hostName,
	dev_apiPrefix
}

// /**
//  * 多页面跳转
//  */
// function setPages () {
//   let pages = {}
//   glob.sync(PAGES_PATH).forEach(filepath => {
//     let fileList = filepath.split('/')
//     let fileName = fileList[fileList.length - 2]

//     pages[fileName] = {
//       entry: filepath,
//       template:`public/${fileName}.html` , // 'public/index.html'
//       filename: `${fileName}.html`,
//       // title:
//       chunks: ['chunk-vendors', 'chunk-common', fileName]
//     }
//   })
//   return pages
// }
