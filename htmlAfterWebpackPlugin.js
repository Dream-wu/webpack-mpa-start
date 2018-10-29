// 插件
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      // 以下内容会显示在命令框中
      console.log("webpack 构建过程开始！");
      //html-webpack-plugin-before-html-processing
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(pluginName, htmlPluginData => {
        const result = htmlPluginData.assets.js;
        let _html = htmlPluginData.html;
        console.log("结果", result);
        _html = _html.replace("<!--injectjs-->", `<script src="/${result}"></script>`);
        htmlPluginData.html = _html;
      });
    });
  }
}
module.exports = ConsoleLogOnBuildWebpackPlugin;
