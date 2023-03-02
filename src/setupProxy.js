const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      //target : "http://localhost:8080",
      target: "http://neroat73.gonetis.com:3070",
      changeOrigin: true,
    })
  );
};