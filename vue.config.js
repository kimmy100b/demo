// vue.config.js
/*
module.exports = {
  outputDir: 'dist', // output.path
  // 옵션 추가
  // configureWebpack: {
  //   plugins: []
  // },
  // 옵션 체이닝
  configureWebpack: () => { }
}
*/

function buildConfig() {
  return {
    configureWebpack: () => { // config // 웹팩 파일 보기
      console.log('모드 >> ', process.env.NODE_ENV);
      if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev') {
        return require(`./config/vue.${process.env.NODE_ENV}.js`);
      } else {
        console.log('Wrong webpack mode. Please choices: dev or prod.')
      }
    }
  }
}


module.exports = buildConfig;
