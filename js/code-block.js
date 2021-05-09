// 代码块自动换行时行号效果
(function(){
    function countLines(el) {
        let height = el.getBoundingClientRect().height;
        let lineHeight = parseFloat(window.getComputedStyle(el).lineHeight.replace('px',''));
        let fontHeight = el.getClientRects()[0].height;
        let lineCount = Math.round((height-fontHeight+lineHeight) / lineHeight);
        return lineCount;
    }
    function countLines2(el) {
        const rects = el.getClientRects();
        let lineCount = 1;
        for(let i=1; i<rects.length; i++){
            if(Math.abs(rects[i].top-rects[i-1].top)>1){
                lineCount++;
            }
        }
        return lineCount;
    }
    let codeLines = $('td.code>pre>.line');
    let nums = $('td.gutter>pre>.line');
    nums.each(function (index) {
        let lineCount = countLines2(codeLines[index]);
        if(lineCount > 1){
            let space = Array(lineCount).join("<br>");
            $(this).after(space);
        }
    });
})();
