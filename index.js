function redirectWeb(x) {
    //window.location.href = "https://" + x;
    window.open("https://" + x, '_blank')?.focus();
}

function resizeAction() {
    if(window.outerWidth <= 1000) {
        console.log("smol");
        var m = document.getElementById("main");
    } else {
        console.log("BIG");
    }
}