/*
* index_event.js
*/


var targets = document.querySelectorAll('.header_li');
    targets.forEach(function(target) {
        target.addEventListener('click', logEvent);
    });
    function logEvent(event) {
        alert(this.text);
    }