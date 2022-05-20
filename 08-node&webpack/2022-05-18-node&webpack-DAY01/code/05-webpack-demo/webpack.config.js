// 项目的打包配置文件
// 导出
module.exports = {
    // 配置webpack的5大概念
    // 1. 入口
    entry: './src/index.js',
    // 2. 出口
    output: {
         filename: 'bundle.js'
    },
    // 3. 加载器
    module: {},
    // 4. 插件
    plugins: [],
    // 5. 模式
    mode: 'production'
}
