<p align="center">
  <img alt="Fluid Logo" src="https://avatars2.githubusercontent.com/t/3419353?s=280&v=4" width="128">
</p>


<h1 align="center">Fabric</h1>

<h4 align="center">一款 Material Design 风格的主题</h4>

## 快速开始

#### 1. 搭建 Hexo 博客

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。

#### 2. 获取主题最新版本

下载 [最新 release 版本](https://github.com/fluid-dev/hexo-theme-fluid/releases) 解到 themes 目录，并将解压出的文件夹重命名为 `fabric`。

#### 3. 指定主题

如下修改 Hexo 博客目录中的 `_config.yml`：

```yaml
theme: fluid  # 指定主题

language: zh-CN  # 指定语言，会影响主题显示的语言，按需修改
```

#### 4. 创建「关于页」

首次使用主题的「关于页」需要手动创建：

```bash
hexo new page about
```

创建成功后，编辑博客目录下 `/source/about/index.md`，添加 `layout` 属性。

修改后的文件示例如下：

```yaml
---
title: about
layout: about
---

这里写关于页的正文，支持 Markdown, HTML
```

## 更新主题

更新主题的方式[参照这里](https://hexo.fluid-dev.com/docs/start/#更新主题)。

## 功能特性

- [x] 无比详实的[用户文档](https://hexo.fluid-dev.com/docs/)
- [x] 页面组件懒加载
- [x] 多种代码高亮方案
- [x] 多语言配置
- [x] 内置多款评论插件
- [x] 内置网页访问统计
- [x] 内置文章本地搜索
- [x] 支持暗色模式
- [x] 支持脚注语法
- [x] 支持 LaTeX 数学公式
- [x] 支持 mermaid 流程图

## 鸣谢

<table>
  <thead>
    <tr>
      <th align="center" style="width: 240px;">
        <a href="https://www.jetbrains.com/?from=hexo-theme-fluid">
          <img src="https://raw.githubusercontent.com/fluid-dev/static/690616966f34a58d66aa15ac7b550dd7bbc03967/hexo-theme-fluid/jetbrains.svg" height="200px"><br>
          <sub>免费开发工具提供方 JetBrains</sub><br>
          <sub>专注于创建智能开发工具</sub>
        </a>
      </th>
    </tr>
  </thead>
</table>

## 贡献者

[![contributors](https://opencollective.com/hexo-theme-fluid/contributors.svg?width=890&button=false)](https://github.com/fluid-dev/hexo-theme-fluid/graphs/contributors)

英文文档翻译：[@EatRice](https://eatrice.top/) [@橙子杀手](https://ruru.eatrice.top) [@Sinetian](https://sinetian.github.io/)

其他贡献：[@zhugaoqi](https://github.com/zhugaoqi) [@julydate](https://github.com/julydate)

如你也想贡献代码，可参照[贡献指南](https://hexo.fluid-dev.com/docs/contribute/)

## 支持我们

如果你觉得这个项目有帮助，并愿意支持它的发展，可以通过以下方式支持我们的开源创作：

<table>
  <thead>
    <tr>
      <th align="center" style="width: 240px;">
        <div>
          <img src="https://github.com/fluid-dev/static/blob/master/hexo-theme-fluid/sponsor.png?s=200&v=4" height="200px" alt="微信赞赏码"><br>
          <sub>微信赞赏码</sub>
        </div>
      </th>
      <th align="center" style="width: 240px;">
        <div>
          <a href="https://etherscan.io/address/0x0021395954710be29c0BFDCB3f98f4D2fa5A1448">
            <img src="https://avatars.githubusercontent.com/u/6250754?s=200&v=4" height="200px" alt="ERC20 Token">
          </a>
          <br>
          <sub>ERC20 Token: 0x0021395954710<br>be29c0BFDCB3f98f4D2fa5A1448</sub>
        </div>
      </th>
    </tr>
  </thead>
</table>

同时我们正在**寻求商业赞助**，如果贵司想在本页显著位置展示广告位（每月 6K+ Views 定向流量曝光），或者有其他赞助形式，可将联系方式发送邮件至 zkqiang#126.com (#替换为@)。

## Star 趋势

[![Stargazers over time](https://starchart.cc/fluid-dev/hexo-theme-fluid.svg)](https://starchart.cc/fluid-dev/hexo-theme-fluid)
