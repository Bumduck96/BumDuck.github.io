/*
* index_event.js
*/
$(function(){
    $(".header_li").on("click",function(){
        //location.href="#"+$(this).text();
        $('html, body').animate({scrollTop : $("#"+$(this).text()).offset().top}, 700);
    });
});