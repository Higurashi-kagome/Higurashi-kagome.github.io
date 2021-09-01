---
title: wkhtmltopdf 和 wkhtmltoimage 乱码问题
tags:
  - Python
categories:
  - 计算机
  - Python
comments: true
date: 2021-08-29 14:41:31
---


最近试了试使用 wkhtmltopdf 和 wkhtmltoimage 将 HTML 转为 PDF/image，发现转出来的 PDF 和图片显示为乱码。

<!-- more -->

原因是没有在 HTML 文件中指明编码格式，解决方法是在 HTML 中加上 `<meta charset="UTF-8" />`。

参考：[php - wkhtmltopdf - encoding issue - Stack Overflow](https://stackoverflow.com/questions/11859872/wkhtmltopdf-encoding-issue)