function displayFancybox(src, alt){
    let altEl = `<div class="fancybox-img-alt-wrap"><span class="fancybox-img-alt">${alt}</span></div>`
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
$('article img').each(function() {
    let image = $(this);
    image.on('click', function(){
        const src = image.attr('src');
        const alt = image.attr('alt');
        console.log(src);
        displayFancybox(src, alt);
    });
});