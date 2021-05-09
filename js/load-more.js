let nextBtn = document.querySelector('.loadmore');
if(nextBtn) nextBtn.addEventListener('click', load_more);
function load_more (e) {
    (e || window.event).preventDefault();
    let nextBtn = this;
    let originText = nextBtn.textContent;
    nextBtn.textContent = '正在加载';
    let next = nextBtn.getAttribute('next');
    fetch(next)
    .then((response) => response.text())
    .then((html) => {
        let parser = new DOMParser();
        let Dom = parser.parseFromString(html,"text/html");
        let next = Dom.querySelector('.next');
        let targetText = Dom.querySelector('.recent_post_list').innerHTML;
        let el = document.querySelector('.recent_post_list');
        el.innerHTML= el.innerHTML + targetText;
        if(!next){
            nextBtn.remove();
        }else{
            nextBtn.setAttribute('next', next.getAttribute('next'));
            nextBtn.textContent = originText;
        }
    }).catch((error) => {
        console.warn(error);
    });
}