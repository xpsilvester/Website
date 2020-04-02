module.exports = {
    //配置链接的路径 生产环境:/test/xxxx ,开发环境:/xxxx
    //publicPath: process.env.NODE_ENV === 'production' ? '/test/' : '/',

    //配置输出文件目录，默认为dist
    //outputDir: 'output'

    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    //assetsDir:'test'

    //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    //indexPath: 'home'

    //配置代理
    devServer: {
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}