function popupweg(){
    xx.style.transform = "rotate(405deg)";
    setTimeout(function(){
        popupscreen.classList.add("weg")
    },700)
    setTimeout(function(){
        blurr.style.filter = "none";
        popupscreen.style.zIndex = "0";
        xx.style.transform = "rotate(45deg)";
        popupscreen.style.display = "none";
        popupscreen.classList.remove("weg")
        popupbackground.src = ""
        popuptext.innerHTML = ""
    },2190)
}

function popupshow(){
    popupscreen.style.display = "block"
    blurr.style.filter = "blur(3px)"
    popupscreen.style.zIndex = 9999;
}