---
layout: post_with_mindmap
title: 用Markdown“画”思维导图
version: 0.0.1
postId: 1425570876518
---

> KityMinder 是一款强大的脑图可视化/编辑工具，由百度 FEX 团队开发并维护。

[这里](https://github.com/SunHuawei/kityminder-core)是我的fork修改版。以下是基于该版本的一个实例。

<div class="km-container" minder-data-type="markdown" style="height: 500px">

- 前端工程师
  - [Web服务](http://www.google.com)
    - Github
    - Stackoverflow
  - 前沿技术社区
    - YDN/YUIConf/JSConf
    - QCon/Velocity
    - D2/WebRebuild
    - NodeParty/HTML5研究小组
    - UED Teams
  - 移动终端
    - jQueryMobile/HTML5/CSS3
    
</div>

该版本中改进了markdown的支持。将原系统中用标题(`#`)的方式改为列表形式(`-`)。在编辑markdown和预览时更加美观（由于使用了html标签，markdown在html标签中不被解析，所以目前还没有实现这个目标）。

另外该版本对markdown增加了hyperlink功能。可以方便添加超链接。

点击[这里](https://github.com/SunHuawei/sunhuawei.github.io/new/master/_posts/2015-3-5-用Markdown“画”思维导图.md)查看该页面的markdown源码。
