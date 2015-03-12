---
layout: post
title: Stackoverflow上那些超赞的问题
version: 0.0.4
postId: 1425309887634
---

Stackoverflow.com是目前最流行的最专业的编程问答社区。其以高质量的问题和答案为目标，用严格的奖惩机制激励用户向这一目标靠近。


本文旨在收集那些编程方面votes人数最多，关注度最高的问题。

## [What and where are the stack and heap?](http://stackoverflow.com/questions/79923/what-and-where-are-the-stack-and-heap)

你说堆栈？那什么是堆什么是栈？他们在哪儿？他们多大？为啥还分成俩东西？那一个东西到底是存在堆里还是存在栈里？看看这个Q你就明白了。


## [How do JavaScript closures work?](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

闭包是个很重要的概念，当然也很有用。但是你真的理解闭包吗？那如果不用闭包，你还会写程序吗？

另外[一定要用闭包吗？](http://blog.jsstack.com/%E4%B8%80%E5%AE%9A%E8%A6%81%E7%94%A8%E9%97%AD%E5%8C%85%E5%90%97%EF%BC%9F/)


## [“Thinking in AngularJS” if I have a jQuery background?](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background)

我有jQuery经验，那我怎么转换成AngularJS的思维呢？


## [Placeholder in IE9](http://stackoverflow.com/questions/6366021/placeholder-in-ie9)

IE9或以下版本都没有placeholder的支持。这对于开发者来说真是个抓狂的`issue`。这个Q告诉你，有个神器叫[jquery-placeholder](https://github.com/mathiasbynens/jquery-placeholder)。其最惹人爱的的一点就是如果你没有填值，它不会把placeholder里的字符串当作值给你发送到server端。神马？你不用jQuery？没关系，下面还有个原生代码实现的例子。


## [What is the correct JSON content type?](http://stackoverflow.com/questions/477816/what-is-the-correct-json-content-type)

这么一堆的type，我该用哪个？
```
  application/json
  application/x-javascript
  text/javascript
  text/x-javascript
  text/x-json
```
  
**application/json for JSON**
**application/javascript for JSONP**
另外这个表貌似很有用 - [mime.types](https://github.com/h5bp/server-configs-nginx/blob/master/mime.types)

## [Why is processing a sorted array faster than an unsorted array?](http://stackoverflow.com/questions/11227809/why-is-processing-a-sorted-array-faster-than-an-unsorted-array)

为啥排序的数组比不排序的数组处理的快？

题主写了一段代码，大致是一个大数组，随机产生0-256的值填入每一项，然后做大于128的值的加和（程序见原文）。结果是排序过的数组比不排序的数组速度快。

博主也抱着试试看的态度写了个js版的，见[这里](http://jsfiddle.net/yhvbgryd/1/)。自我的Intelx86处理器里，运行结果如下
```
  Unsorted: 25677.000ms
  Sorted: 13499.000ms 
```
果然，如题主所说。是不是很神奇？为啥？答案就是“分支预测”（[Branch Prediction](http://en.wikipedia.org/wiki/Branch_predication)）。与之相关的是“分支预测器”（[Branch predictor](http://en.wikipedia.org/wiki/Branch_predictor)）;


## [Edit an incorrect commit message in Git](http://stackoverflow.com/questions/179123/edit-an-incorrect-commit-message-in-git)

Git编辑了错误的备注怎么办？
