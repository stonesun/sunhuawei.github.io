---
layout: post_with_mindmap
title: 用Markdown“画”思维导图
version: 0.0.1
postId: 1425570876518
---

本文介绍一种方式，使你能方便轻松地在你的jekyll博客里加入思维导图。

## KityMinder

用到的工具有KityMinder。

> KityMinder 是一款强大的脑图可视化/编辑工具，由百度 FEX 团队开发并维护。

KityMinder是一套基于HTML5的思维导图生成工具。其支持不同格式，包括markdown。

## Demo

下面是一个思维导图的示例。

<pre class="km-container" minder-data-type="markdown" style="height: 500px">

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
    
</pre>

## 添加到你的博客

如何加入到你的jekyll博客？

1. 安装Kity及KityMinder修改版。
  1. [Kity下载地址](https://github.com/SunHuawei/sunhuawei.github.io/blob/master/kity.min.js)
  2. [KityMinder修改版下载地址](https://github.com/SunHuawei/sunhuawei.github.io/blob/master/kityminder.core.min.js)
  3. [KityMinder css下载地址](https://github.com/SunHuawei/sunhuawei.github.io/blob/master/kityminder.css)
  4. 将以上下载的文件拷贝进你的jekyll博客目录下，例如我的在根目录https://github.com/SunHuawei/sunhuawei.github.io/blob/master/下。
2. 添加新的layout[post_with_mindmap](https://github.com/SunHuawei/sunhuawei.github.io/blob/master/_layouts/post_with_mindmap.html)

测试

新建post，命名为2015-3-8-Hello-MindMap.md，内容如下
	
	---
	layout: post_with_mindmap
	title: Hello MindMap
	---
	
	<pre class="km-container" minder-data-type="markdown" style="height: 500px">
	
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
	    
	</pre>
	
也可以参照[文本源码](https://github.com/SunHuawei/sunhuawei.github.io/edit/master/_posts/2015-3-5-%E7%94%A8Markdown%E2%80%9C%E7%94%BB%E2%80%9D%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE.md)。

运行查看结果。

### 代码解析

1. 首先jekyll引擎会将可以识别的md文件翻译成html。
2. 但是被包在html标签内的文本会被忽略。
3. 页面加载KityMinder，其将会查找所有.km-container节点，将其解析成一个导图。

```
var km = window.km = new kityminder.Minder();
[].forEach.call(document.querySelectorAll(".km-container"), function(dom){
	km.setup(dom);
});
```

### minder-data-type和pre

```
<pre class="km-container" minder-data-type="markdown" style="height: 500px">
...
</pre>
```

minder-data-type声明了其内容以何种方式解析。可选项有`png`, `svg`, `text`, `json`和`markdown`。

pre可以使你在预览你的md文件的时候，其显示为一个列表。用其他标签，比如`<div>`，就会显示成一坨。

## 为什么选择markdown

相对于`png`，`svg`及`json`格式来说，`text`和`markdown`更直观，易书写。另外`markdown`相对于`text`具有更丰富的功能，比如hyperlink。

## 我都做了哪些修改

1. 原版中用标题`#`表示每一项，用`#`的数量表示层级。本版将其修改成了用`-`前缀的列表。用缩进(两个空格）表示层级。
2. 添加hyperlink支持。

[这里](https://github.com/SunHuawei/kityminder-core)是我的fork修改版。欢迎报告issue或PR。
