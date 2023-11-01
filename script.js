// var elem1 = document.querySelector ("#elem1")
// var elem1image = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove",function(dets){
//     elem1image.style.left = dets.x+"px"
//     elem1image.style.top = dets.y+"px"
// })

// elem1.addEventListener("mouseenter",function(dets){
//     elem1image.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave",function(){
//     elem1image.style.opacity = 0
// })





// isme joh val hai uska means ki joh .ele hai uska naam hai elem and forEach ka use karke usme val name ka ek object add kiya means and fir val pr addEventListener ka use karke program kraa.






var elem = document.querySelectorAll (".ele")

elem.forEach(function(val){
   
    val.addEventListener("mouseenter", function (){
        val.childNodes[3].style.opacity = 1
    })

    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    })

    val.addEventListener ("mousemove", function (dets){
        val.childNodes[3].style.left = dets.x+"px"
        // val.childNodes[3].style.top = dets.y+"px"
    })

});