# 视觉走查成为验收中耗时严重的一个环节, 也饱受诟病, 此插件的出现就是为了解决这个问题

## 使用说明
> 推荐在页面布局以及细节开发完成的时候启用, 进行局部微调操作
```JavaScript
npm i @xes/sketch-plugin --registry=https://npm.xesv5.com/

const SketchPlugin = require('@xes/sketch-plugin');

module.exports = {
  //...
  plugins: process.env.VUE_APP_MODE === 'local' ? [
    new SketchPlugin(),
  ] : []
  //...
}
```

## 操作说明
1. 点击toggle按钮唤起调试面板
2. 输入设计图url, 按回车进行视觉稿加载
    - 此处可以是网络在线图片(oss) || 本地ip服务重定向图片路径 || 本地nginx域名代理图片路径
    - 不能加载本地路径图片 如: file:///User/..... (有解决方案的可以尝试修改)
3. 调整视觉稿的位置, 以观察字体以及间距相关大小

## 快捷键
- 打开/关闭视觉稿 右上角(toggle按钮)/ctrl+option+x
- 微调视觉稿位置 ↑/↓ 按钮