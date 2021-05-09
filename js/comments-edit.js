if(document.getElementById('valinecomments')){
    try {
        // valine 版本信息
        document.querySelector('.vpower').remove();
        // valine “来发评论吧~”
        document.querySelector('.vempty').remove();
    } catch (error) {}
}

if(document.querySelector('.vssuecomments')){
    try {
        // vssue powered by
        document.querySelector('.vssue-header-powered-by').remove();
    } catch (error) {console.log(error);}
}