const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '..', 'src/'), // 상위 경로의 위치라서 중간에 '..' 을 추가한다.
            'images': path.join(__dirname, '..', 'src/assets/img/'), // 상위 경로의 위치라서 중간에 '..' 을 추가한다.
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
}