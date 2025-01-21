var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(moove){
    crsr.style.left = moove.x+"px"
    console.log("moove")
    // Adding "px" converts the numeric coordinates into a valid CSS unit (pixels).
     crsr.style.top = moove.y+"px"
})
//we did this bcoz hum fake cursor bna ske or usse original ke sath move kr ske

document.addEventListener("mousemove",function(moove){
    blur.style.left = moove.x-150+"px"
    console.log("moove")
    // Adding "px" converts the numeric coordinates into a valid CSS unit (pixels).
     blur.style.top = moove.y-150+"px"
     // -150 bcoz ye original crsor ko follow nhi kr paa rha tha
})


gsap.to("#nav",{
    backgroundColor : "#000",
    duration : 0.5,
    height : " 110px",
    scrollTrigger :{
        trigger : "#nav",
        scroller : "body",
        markers : true ,
        // -10 prcnt means start screen se 10 prcnt upr se chlna shuru hoga to jb hm usse scroll down krenge to 10% hone ke baad vo show hoga
        start : " top -10%",
        // end : " top 11%" ,
        scrub : 1 
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})