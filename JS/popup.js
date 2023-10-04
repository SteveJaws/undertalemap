function popup(img){
    if(img == "img1"){
        s1beamimg.style.scale = "1.6"
        s1beamimg.style.transform = "rotate(360deg)";
        setTimeout(function(){
            s1beamimg.style.transform = "none";
            s1beamimg.style.transition = "none";
            // add the good text
            popuptext.innerHTML = "The place where many have fallen to the underground and where you start your journey."


            // popupscreen appear
            popupbackground.src = "./CSS/background/undergroundholehighres.png"
            popupshow();
        },1000)
        setTimeout(function(){
            s1beamimg.style.transition = "all 0.5s ease-in-out";
            s1beamimg.style.scale = "1"
        },1100)
    }
    else if(img == "img2"){
        console.log("hoi")
        s1beam2img.style.scale = "1.6"
        s1beam2img.style.transform = "rotate(360deg)"
        setTimeout(function(){
            s1beam2img.style.transform = "none"
            s1beam2img.style.transition = "none"
            // add the good text

            popuptext.innerHTML = "this is the house of toriel where also the gate to the rest of the underground is"
            // popupscreen appear
            popupbackground.src = "./CSS/background/torielhouse.jpg"
            popupshow();
        },1000)
        setTimeout(function(){
            s1beam2img.style.transition = "all 0.5s ease-in-out";
            s1beam2img.style.scale = "1"
        },1100)
    }
    else if(img == "img3"){
        s2beam1img.style.scale = 1.6
        s2beam1img.style.transform = "rotate(360deg)"
        // add the good text
        popuptext.innerHTML = "Snowdin Forest is the second region the protagonist encounters in the underground. It is seen after the main character defeats Toriel <br> and receives judgment from Flowey in the Ruins."

        setTimeout(function(){
            s2beam1img.style.transform = "none"
            s2beam1img.style.transition = "none"
        },1000)
        setTimeout(function(){
            s2beam1img.style.transition = "all 0.5s ease-in-out"
            s2beam1img.style.scale = 1
        },1100)
        // popupscreen appear
        popupshow();
        popupbackground.src = "./CSS/background/snowdinforest.png"
    }
    else if(img == "img4"){
        s2beam2img.style.scale = 1.6
        s2beam2img.style.transform = "rotate(360deg)"
        // add the good text
        popuptext.innerHTML = "Snowdin is a town that the main character encounters after leaving the ruins and traveling through the Snowdin Forest. Leaving the city takes the protagonist on foot to the Waterfall or, by hitching a ride with the River Person, to the Waterfall or Hotland."

        setTimeout(function(){
            s2beam2img.style.transform = "none"
            s2beam2img.style.transition = "none"
        },1000)
        setTimeout(function(){
            s2beam2img.style.transition = "all 0.5s ease-in-out"
            s2beam2img.style.scale = 1
        },1100)
        // popupscreen appear
        popupshow();
        popupbackground.src = "./CSS/background/snowdin.jpg"
    }
    else if(img == "img5"){
        s3beam1img.style.scale = 1.6
        s3beam1img.style.transform = "rotate(360deg)"
        // add the good text
        popuptext.innerHTML = "Undyne's house is the house where of course undyne lives and before that you also encounter her cause she wants to murder you cause she thinks your evil."

        setTimeout(function(){
            s3beam1img.style.transform = "none"
            s3beam1img.style.transition = "none"
        },1000)
        setTimeout(function(){
            s3beam1img.style.transition = "all 0.5s ease-in-out"
            s3beam1img.style.scale = 1
        },1100)
        // popupscreen appear
        popupshow();
        popupbackground.src = "./CSS/background/undyne.jpg"
    }
    else if(img == "img6"){
        s3beam2img.style.scale = 1.6
        s3beam2img.style.transform = "rotate(360deg)"
        // add the good text
        popuptext.innerHTML = "Waterfall is the third area the protagonist encounters in the Underground. The area is accessible after the protagonist defeats Papyrus in a fight. The area follows Snowdin Forest and Snowdin Town, and precedes Hotland."

        setTimeout(function(){
            s3beam2img.style.transform = "none"
            s3beam2img.style.transition = "none"
        },1000)
        setTimeout(function(){
            s3beam2img.style.transition = "all 0.5s ease-in-out"
            s3beam2img.style.scale = 1
        },1100)
        // popupscreen appear
        popupshow();
        popupbackground.src = "./CSS/background/waterfall.jpg"
    }
    else if(img == "img7"){
        s4beam1img.style.scale = 1.6
        s4beam1img.style.transform = "rotate(360deg)"
        // add the good text
        popuptext.innerHTML = "Hotland is the fourth region the protagonist encounters in Undertale, following Waterfall. It contains locations such as Alphys's Lab, True Lab, the MTT Resort, and the CORE."

        setTimeout(function(){
            s4beam1img.style.transform = "none"
            s4beam1img.style.transition = "none"
        },1000)
        setTimeout(function(){
            s4beam1img.style.transition = "all 0.5s ease-in-out"
            s4beam1img.style.scale = 1
        },1100)
        // popupscreen appear
        popupshow();
        popupbackground.src = "./CSS/background/hotlands.jpg"
    }
    else if(img == "img8"){
        s4beam2img.style.scale = 1.6
        s4beam2img.style.transform = "rotate(360deg)"
        // add the good text
        popuptext.innerHTML = "The CORE is a sub section of Hotland, accessible from the MTT Resort. It is a technologically advanced facility that provides magical electricity to the Underground. There is an elevator to New Home in the center of the CORE. The entire structure is designed so that the rooms inside can change positions and the layout can be altered."

        setTimeout(function(){
            s4beam2img.style.transform = "none"
            s3beam2img.style.transition = "none"
        },1000)
        setTimeout(function(){
            s4beam2img.style.transition = "all 0.5s ease-in-out"
            s4beam2img.style.scale = 1
        },1100)
        // popupscreen appear
        popupshow();
        popupbackground.src = "./CSS/background/core.jpg"
    }
    else if(img == "img9"){
        s5beam1img.style.scale = 1.6
        s5beam1img.style.transform = "rotate(360deg)"
        // add the good text
        popuptext.innerHTML = "New Home is the new capital of the Underground, ruled by Asgore Dreemurr, and the final location in the game before the protagonist reaches the barrier."

        setTimeout(function(){
            s5beam1img.style.transform = "none"
            s5beam1img.style.transition = "none"
        },1000)
        setTimeout(function(){
            s5beam1img.style.transition = "all 0.5s ease-in-out"
            s5beam1img.style.scale = 1
        },1100)
        // popupscreen appear
        popupshow();
        popupbackground.src = "./CSS/background/newhome.jpg"
    }
    
}