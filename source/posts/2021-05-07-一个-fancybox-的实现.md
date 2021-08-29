---
title: 一个 fancybox 的实现
tags:
  - JavaScript
  - jQuery
  - CSS
categories:
  - 计算机
  - 前端
comments: true
date: 2021-05-07 13:09:48
---

最近参考 [Hexo 折腾：利用 Fancybox 添加图片放大预览查看功能](https://tianma8023.github.io/post/hexo-material-intergrate-image-display-feature/)使用 [fancyapps/fancybox](https://github.com/fancyapps/fancybox) 给自己的博客加上了 fancybox。说实话，这个库对我来说太“重”了——很多功能我并不需要，另外，有不少博客都使用了这个库来实现 fancybox，看得多了总觉得乏味，于是决定自己做一个简单的 fancybox，这样不仅能够精简代码，而且也方便自定义。

<!-- more -->

可以先到[这里](https://codepen.io/liuhao326/pen/oNZgbQB)看看演示效果。

演示中的 HTML 里只是包含了几张图片，另外这个实现是需要使用 jQuery 的，所以在 HTML 中使用了`<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`来引用 jQuery。

下面分析 js 代码：

```js
// 插入 fancybox
function displayFancybox(src, alt){
    let altEl = `<div class="fancybox-img-alt-wrap">
                    <span class="fancybox-img-alt">${alt}</span>
                </div>`;
    if(!alt) altEl = '';
    $("body").append(
        `<div class="fancybox-overlay">
            <div class="fancybox-img-wrap">
                <img class="fancybox-img" src="${src}">
            </div>
            ${altEl}
        </div>`
    );
    // 点击空白关闭图片
    $(`.fancybox-overlay`).on('click', function(){
        $(this).remove();
    });
    // 点击图片及图片名位置结束冒泡，避免关闭
    $(`.fancybox-img-wrap,.fancybox-img-alt-wrap`).on('click', function(e){
        e.stopPropagation();
    });
}

// 为图片绑定点击事件
$('img').each(function() {
    let image = $(this);
    image.on('click', function(){
        const src = image.attr('src');
        const alt = image.attr('alt');
        displayFancybox(src, alt);
    });
});
```

首先，可以看到 js 代码从这里进入：

```js
$('img').each(function() {
    let image = $(this);
    image.on('click', function(){
        const src = image.attr('src');
        const alt = image.attr('alt');
        displayFancybox(src, alt);
    });
});
```

该部分代码遍历了所有 img 元素，并为每个元素绑定了点击事件，点击事件即调用`displayFancybox`函数，该函数的两个参数`src`及`alt`分别为被点击图片的地址和标题。

进入`displayFancybox`函数之后。以下部分代码实现将 fancybox 元素插入到 body 末尾：

```js
let altEl = `<div class="fancybox-img-alt-wrap">
                <span class="fancybox-img-alt">${alt}</span>
            </div>`;
if(!alt) altEl = '';
$("body").append(
        `<div class="fancybox-overlay">
            <div class="fancybox-img-wrap">
                <img class="fancybox-img" src="${src}">
            </div>
            ${altEl}
        </div>`
);
```

而如下部分则实现点击点击空白关闭 fancybox。

```js
// 点击空白关闭图片
$(`.fancybox-overlay`).on('click', function(){
    $(this).remove();
});
// 点击图片及图片名位置结束冒泡，避免将图片关闭
$(`.fancybox-img-wrap,.fancybox-img-alt-wrap`).on('click', function(e){
    e.stopPropagation();
});
```

之所以需要`$(".fancybox-img-wrap,.fancybox-img-alt-wrap").on('click',function(e){...}`是因为`$(".fancybox-overlay").on('click', function(){...});`部分使得点击`$(".fancybox-overlay")`后立刻移除 fancybox，而图片及图片标题是包含在`$(".fancybox-overlay")`中的，这使得点击图片或图片标题也会移除 fancybox，这是我们所不希望看到的，所以代码使用`stopPropagation`函数来阻止图片及图片标题的点击事件传递到`$(".fancybox-overlay")`上。

CSS 就不多讲了，可以看看演示中的注释。事实上，有相当一部分 CSS 内容都是参考 [fancyBox - Fancy jQuery Lightbox Alternative](http://fancyapps.com/fancybox/demo/) 中的演示写的，所以也可以到那里去看看。