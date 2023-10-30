// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
//   transpileDependencies: true,

//   devServer: {
//     proxy: 'https://openapi.naver.com',
//   },
// });

module.exports = {
  devServer: {
    client: {
      overlay: false
    },
    proxy: {
      '/translator': {
        target: 'http://52.79.60.180:8080',
        changeOrigin: true,
      },
    },
  },
};
