/*
* index_event.js
*/
$(function(){
    $(".header_li").on("click",function(){
        location.href="#"+$(this).text();
    });
});