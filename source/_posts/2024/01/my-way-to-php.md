---
title: 「随笔」我的PHP开发之路
copyright: BY-NC-SA
date: 2024-01-10 17:45:49
tags:
categories: 随笔
cover:
---

## 前言

新年已至，自然少不了元旦 Party，今年是我们在高中的第一个元旦派对，当然要做一些不一样的。

作为班上的网管，我做了一个在线的新年祝福页面，让同学们可以在上面填写自己的新年祝福，并在新年时随机分发到每个人的手中（账号上）。

这一套站点拥有完善的登录、鉴权和还在开发（咕）中的后台管理面板和现代化的前台。

如这篇文章的标题所示，这次开发的技术栈便是 MySQL 和 PHP。当然，我并不想在这里赘述该系统的开发过程，而是记录一下我的 PHP 开发 & 学习过程。

![新年祝福页面](1.webp)

## 初识 PHP

我的第一个 PHP 小程序至今还躺在我的 Gitee 仓库中（虽然现在已经不用 Gitee 了=V=），那是一个简单的文件上传程序。当时还是初中，作为网管（对的，我一直是网管），老师让我负责收集同学们的假期实践作业。改作业要求使用 Word 软件进行排版和上传。

当时的我，刚刚有了一台虚拟主机，出于 QQ 接收文件可能会遗漏且不好统计的想法，我从网上复制&&修改了一段上传&保存文件的 PHP 代码，并上传到了虚拟主机上，当时这个程序使我收集的工作更加便捷，当然虚拟主机的龟速也引来不少同学的友好反馈（笑）。

作为第一个 PHP 程序，大部分代码都是从网上 Copy & Paste 下来的。因为 PHP 的大部分语法和之前为 NOIP 学习的 C++十分相像，我对程序做了一点修改，添加了格式校验和提交检测功能。

这便是我的 PHP 基础。

![作业提交系统的Commit](2.webp)

## 你好, MySQL

在我早期的观念中，PHP 和数据库一定密不可分，只是当时偷懒外加没有需求，在作业收集网站后我就再也没有写过 PHP 代码了。而一个站点的出现，让我重拾 PHP 并完成了第一个大项目，那就是[机房大佬语录](https://zigzagk.top/OIerdictum/)。

受到[一言](https://hitokoto.cn/) 和 [机房大佬语录](https://zigzagk.top/OIerdictum/)的影响，我也想自己搭建一个所谓的“一句话站点”，但苦于没有找到合适的开源项目，于是我决定：

**自己写！**

于是我通过[PHP 教程 | 菜鸟教程](https://www.runoob.com/php/php-tutorial.html)照猫画虎地学习了 MySQL 创建表，插入语句，更新语句等操作，经过几个月地努力，写出了一个还算像点样地随机语句程序 『一句』 [ImJingLan/Sentence](https://github.com/ImJingLan/Sentence)

![一句 Logo](3.webp)

## 感想

学习一种新技术主要来自于你对他的需求，只有有了需求，你才有往下学的动力。多看看开源社区，多看看别人的代码，多看文档，哪怕 Copy Paste 呢？

我的 PHP 代码风格主要受到 Sakura Panle 的影响，这种模块的思路贯彻在了我的所有站点中。

## 以上