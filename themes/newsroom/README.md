<p align="center">
  <img alt="Fluid Logo" src="https://raw.githubusercontent.com/ImJingLan/hexo-theme-newsroom/main/source/img/logo.jpg" width="128">
</p>

<p align="center">一款扁平风格的主题</p>
<p align="center">An Flat Design theme for Hexo</p>

![ScreenShot](https://raw.githubusercontent.com/ImJingLan/hexo-theme-newsroom/main/source/img/screenshot.jpg)

<p align="center">
  <a title="Hexo Version" target="_blank" href="https://hexo.io/zh-cn/"><img alt="Hexo Version" src="https://img.shields.io/badge/Hexo-%3E%3D%207.0-orange?style=flat"></a>
  <a title="Node Version" target="_blank" href="https://nodejs.org/zh-cn/"><img alt="Node Version" src="https://img.shields.io/badge/Node-%3E%3D%2010.13.0-yellowgreen?style=flat"></a>
  <a title="License" target="_blank" href="https://github.com/fluid-dev/hexo-theme-fluid/blob/master/LICENSE"><img alt="License" src="https://img.shields.io/github/license/fluid-dev/hexo-theme-fluid.svg?style=flat"></a>

</p>

<p align="center">中文简体

<p align="center">
  <span>文档：</span>代写
</p>

<p align="center">
  <span>预览：</span>
  <a href="https://yurik.cafe/">Yurik's blog</a>
</p>

## 快速开始

#### 1. 搭建 Hexo 博客

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。

#### 2. 获取主题最新版本

下载 [最新 release 版本](https://github.com/ImJingLan/hexo-theme-newsroom/releases) 解压到 themes 目录，并将解压出的文件夹重命名为 `newsroom`。

然后在博客目录下创建 `_config.newsroom.yml`，将主题的 [\_config.yml](https://github.com/ImJingLan/hexo-theme-newsroom/blob/master/_config.yml) 内容复制进去。

#### 3. 指定主题

如下修改 Hexo 博客目录中的 `_config.yml`：

```yaml
theme: newsroom # 指定主题

language: zh-CN # 指定语言，会影响主题显示的语言，按需修改
```

#### 4. 创建「友情链接」

首次使用主题的「友情链接」需要手动创建：

```bash
hexo new page links
```

创建成功后，编辑博客目录下 `/source/about/index.md`，添加 `layout` 属性。

修改后的文件示例如下：

```yaml
---
title: 友情链接
layout: links
---
这里写友链页的正文，支持 Markdown, HTML
```

在博客目录`/source/_data/`下创建`links.yml`文件并

并按照下列格式编辑

```yaml
items:
  - {
      title: "Friends 1",
      intro: "Description 1",
      link: "https://example.com/",
      avatar: "https://example.com/avatar.jpg",
    }
  - {
      title: "Friends 2",
      intro: "Description 2",
      link: "https://example.com/",
      avatar: "https://example.com/avatar.jpg",
    }

onerror_avatar: /img/avatar.png # 头像错误时加载默认头像

more_content: True # 是否启用更多信息 , 如友链添加指南等
```

<p style="color:#dc3545">警告：<b>Newsroom「新闻中心」</b>仍处于早期开发阶段，<b>文档尚未编写</b>，<b>代码未经过完整测试</b>，无法保证其在生产环境中的安全与稳定！<b>我们不对使用当前版本主题造成的损失负责，请谨慎下载。</b></p>
