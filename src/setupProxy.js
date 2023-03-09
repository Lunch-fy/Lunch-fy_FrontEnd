const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api',{
      target : "http://localhost:3070",
      //target: "http://neroat73.gonetis.com:3070",
      changeOrigin: true,
    })
  );
};