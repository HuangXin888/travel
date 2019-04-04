module.exports = {
    publicPath: "./",
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    outputDir: 'dist/web',
    assetsDir: "assets",
    indexPath: "index.html",
    productionSourceMap: false,
    // pages:{ type:Object,Default:undfind } 
    devServer: {
        port: 8081, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    }
}
