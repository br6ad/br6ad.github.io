document.addEventListener('contextmenu',e=>e.preventDefault());document.onkeydown=e=>{if(event.keyCode==123)return!1;if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0))return!1;if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0))return!1;if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0))return!1}

document.addEventListener('contextmenu',e=>e.preventDefault());document.onkeydown=e=>{if(event.keyCode==123)return!1;if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0))return!1;if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0))return!1;if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0))return!1}


if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 800);

}

var x = 0;

var titleText = [ "'T'", "'Th'", "'The'", "'The G'", "'The Ga'", "'The Gal'", "'The Gall'", "'The Galle'", "'The Galler'", "'The Gallery'"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}