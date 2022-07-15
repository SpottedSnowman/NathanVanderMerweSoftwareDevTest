﻿var collapse = document.getElementsByClassName("collapseable-filter");
var i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

const db = window.openDatabase()