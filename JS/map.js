const section1 = document.getElementById("section1dis");
const section2 = document.getElementById("section2dis");
const section3 = document.getElementById("section3dis");
const section4 = document.getElementById("section4dis");
const section5 = document.getElementById("section5dis");
const s1beam = document.getElementById("s1beam");
const s1beam2 = document.getElementById("s1beam2");
const s1beamimg = document.getElementById("s1beamimg");
const s1beam2img = document.getElementById("s1beam2img");
const s2beam1img = document.getElementById("s2b1img");
const s2beam2img = document.getElementById("s2b2img");
const s3beam1img = document.getElementById("s3b1img");
const s3beam2img = document.getElementById("s3b2img");
const s4beam1img = document.getElementById("s4b1img");
const s4beam2img = document.getElementById("s4b2img");
const s5beam1img = document.getElementById("s5b1img");
const popupscreen = document.getElementById("popupscreen");
const blurr = document.getElementById("blur");
const xx = document.getElementById("XX");
const popuptext = document.getElementById("popuptext");
let popupbackground = document.getElementById("popupbackground");
const name1 = document.getElementById("name1");
const hamburgermenu = document.getElementById("hamburgermenu");
const x2 = document.getElementById("x2");
const bar = document.querySelector(".bar");
// de popup function staat in het andere js bestand om deze wat overzichtelijker te houden


function appear(section){
    if(section == "section1"){
        // imagesopacity
        s2beam1img.style.opacity = 0
        s2beam2img.style.opacity = 0
        // denormaledingen
        section5.style.display = "none";
        section4.style.display = "none";
        section3.style.display = "none";
        section2.style.display = "none";
        section1.style.display = "block"
        s1beam.style.display = "block";
        s1beam2.style.display = "block";
        name1.style.display = "block";
        setTimeout(function(){
            s1beamimg.style.display = "block";
            s1beam2img.style.display = "block";
        },1000)
    }
    else if(section == "section2"){
        s2beam1img.style.opacity = 0;
        s2beam2img.style.opacity = 0;
        section1.style.display = "none";
        section2.style.display = "block";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        
        setTimeout(function(){
            s2beam1img.classList.add("imgpopup");
            s2beam2img.classList.add("imgpopup");
            s2beam1img.style.opacity = 1
            s2beam2img.style.opacity = 1
            
        },1000)

        setTimeout(function(){
            s2beam1img.classList.remove("imgpopup");
            s2beam2img.classList.remove("imgpopup");
        },4000)
        
    }
    else if(section == "section3"){
        s3beam1img.style.opacity = 0;
        s3beam2img.style.opacity = 0;
        section5.style.display = "none";
        section4.style.display = "none";
        section3.style.display = "block";
        section2.style.display = "none";
        section1.style.display = "none";

        setTimeout(function(){
            s3beam1img.classList.add("imgpopup");
            s3beam2img.classList.add("imgpopup");
            s3beam1img.style.opacity = 1
            s3beam2img.style.opacity = 1
            
        },1000)

        setTimeout(function(){
            s3beam1img.classList.remove("imgpopup");
            s3beam2img.classList.remove("imgpopup");
        },4000)
    }
    else if(section == "section4"){
        s4beam1img.style.opacity = 0;
        s4beam2img.style.opacity = 0;
        section5.style.display = "none";
        section4.style.display = "block";
        section3.style.display = "none";
        section2.style.display = "none";
        section1.style.display = "none";

        setTimeout(function(){
            s4beam1img.classList.add("imgpopup");
            s4beam2img.classList.add("imgpopup");
            s4beam1img.style.opacity = 1
            s4beam2img.style.opacity = 1
            
        },1000)

        setTimeout(function(){
            s4beam1img.classList.remove("imgpopup");
            s4beam2img.classList.remove("imgpopup");
        },4000)
    }
    else if(section == "section5"){
        s5beam1img.style.opacity = 0;
        section5.style.display = "block";
        section4.style.display = "none";
        section3.style.display = "none";
        section2.style.display = "none";
        section1.style.display = "none";

        setTimeout(function(){
            s5beam1img.classList.add("imgpopup");
            s5beam1img.style.opacity = 1;
            
        },1000)

        setTimeout(function(){
            s5beam1img.classList.remove("imgpopup");
        },4000)
    }
}

function screenclose(){
    popupweg();
}

function hoi(){
    console.log("hoi");
    section1.style.display = "none";
}

function hamburgerclick(){
    document.querySelector(".hamburgermenu").classList.remove("hamburgeranimationweg")
    document.querySelector(".hamburgermenu").classList.add("hamburgeranimation")
    hamburgermenu.style.opacity = 1
    hamburgermenu.style.zIndex = 11


}

function hamburgermenuweg(){
    document.querySelector(".hamburgermenu").classList.remove("hamburgeranimation")
    x2.style.transform = "rotate(405deg)"
    setTimeout(function(){
        document.querySelector(".hamburgermenu").classList.add("hamburgeranimationweg")
    },900)
    setTimeout(function(){
        hamburgermenu.style.opacity = 0
        hamburgermenu.style.zIndex = 0
    },1900)
    setTimeout(function(){
        x2.style.transform = "rotate(45deg)"
    },2500)
}
