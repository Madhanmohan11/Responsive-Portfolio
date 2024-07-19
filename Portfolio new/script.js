
//***********menu-bar***********

var sidemenu = document.getElementById("sidemenu");
var burgi = document.getElementById("burg");
var crosi = document.getElementById("cross");

// function openmenu(){
//     sidemenu.style.left = "350px";
// }
// function closemenu(){
//     sidemenu.style.left = "-550px";
// }
// sidemenu.style.display = "none";
// function res(){
//     sidemenu.style.display = "none";
// }
 if(window.matchMedia("(max-width:800px)")){
   // sidemenu.style.display = "none";
 }

function closemenu(){
    sidemenu.style.display = "none";
    burgi.style.display ="block";
    }

    function openmenu(){
    sidemenu.style.display = "block";
    burgi.style.display="none";
    }


//************animation*************

var typed = new Typed(".text1",{
strings:["Fronted Developer","Web Developer","Fullstack Developer","Software Developer"],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop:true
});


 