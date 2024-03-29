---
title: 去除 Excel 宏保存提示
comments: true
date: 2021-08-29 10:57:38
tags:
    - Excel
categories:
    - 计算机
    - 其他
---


有时候你会遇到保存 Excel 时弹出一个宏保存提示的情况（显示“无法在未启用宏的工作簿中保存以下功能...”）：

<!-- more -->

![image-20210829104846124](res/去除-Excel-宏保存提示/image-20210829104846124.png)

一个可能是该文件的宏编辑器中有代码，而该文档未启用宏，所以会出现安全提示。

先按 Alt+F11 或从开发工具中进入宏编辑器：

![image-20210829104135781](res/去除-Excel-宏保存提示/image-20210829104135781.png)

进入编辑器后可以看到文件中的宏内容：

![image-20210829105318962](res/去除-Excel-宏保存提示/image-20210829105318962.png)

把这些代码删除就不会有提示了：

![image-20210829105412764](res/去除-Excel-宏保存提示/image-20210829105412764.png)
