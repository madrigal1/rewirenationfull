const logo = document.querySelector(".logo");

const t1 = new TimelineLite();
t1.to(".logo", 0.5, {
    transform: "scale(1.2) translate(-50%,-50%)",
    ease: Power4.easeOut
})
.to(logo,0.5,{
    transform: "scale(1.0) translate(-50%,-50%)",
    ease: Power4.easeOut
})
.to(logo, 0.7, {
    left: "55px",
    ease: Power4.easeOut
})
.to(".logo",0.5,{
    transform: "rotate(-90deg)",
    transformOrigin: "left",
    ease: Power4.easeOut
})
.to(logo, 0.2, {
    top: "50%",
    ease: Power4.easeOut
})
.to(".logoover",2,{
    width: "101px",
    ease: Power4.easeOut
})

