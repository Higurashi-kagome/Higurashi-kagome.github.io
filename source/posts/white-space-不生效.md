---
title: white-space 不生效
tags:
  - CSS
categories:
  - 计算机
  - 前端
comments: true
date: 2021-05-08 21:42:05
---

今天在尝试实现主题代码块自动换行的时候，发现 [white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space) 设为 pre-wrap，[word-break](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break) 设为 break-word 没能使代码换行，pre 元素总是有它的子元素那么宽。

<!-- more -->

后来发现是因为将 pre 元素的 width 属性设置成了 max-content：

```CSS
pre{
    width: max-content;
}
```

这使得 pre 元素的宽度总是随着子元素的宽度扩展，没有换行的机会，所以 white-space 和 word-wrap 没效果。