image1=document.querySelector(".img-1")
console.log(image1)
image1.addEventListener("click",()=>{
    section1=document.querySelector(".scetion-1")
    section1.style.backgroundColor = "green"
    
})

image2=document.querySelector(".img-2")
console.log(image2)
image2.addEventListener("click",()=>{
    section1=document.querySelector(".scetion-1")
    section1.style.backgroundColor = "rgb(166, 162, 162)"
    
})

image3=document.querySelector(".img-3")
console.log(image3)
image3.addEventListener("click",()=>{
    section1=document.querySelector(".scetion-1")
    section1.style.backgroundColor = "blue"
    
})

image4=document.querySelector(".img-4")
console.log(image4)
image4.addEventListener("click",()=>{
    section1=document.querySelector(".scetion-1")
    section1.style.backgroundColor = "white"
    
})

image5=document.querySelector(".img-5")
console.log(image5)
image5.addEventListener("click",()=>{
    section1=document.querySelector(".scetion-1")
    section1.style.backgroundColor = "gold"
    
})

dark=document.querySelector(".dark")
dark.addEventListener("click",()=>{
    section2=document.querySelector(".section-2")
    section2.style.backgroundColor = "gray"
})

light=document.querySelector(".light")
light.addEventListener("click",()=>{
    section2=document.querySelector(".section-2")
    section2.style.backgroundColor = "white"

})



star1=document.querySelector(".star1")
star1.addEventListener("click",()=>{
    star1.style.color = "#FFD43B"
    star2.style.color = "black"
    star3.style.color = "black"
    star4.style.color = "black"
    star5.style.color = "black"

    tp=document.querySelector(".pt")
    console.log(tp)
    tp.innerText=`not good`
})

star2=document.querySelector(".star2")
star2.addEventListener("click",()=>{
    star1.style.color = "#FFD43B"
    star2.style.color = "#FFD43B"
    star3.style.color = "black"
    star4.style.color = "black"
    star5.style.color = "black"
    tp=document.querySelector(".pt")
    console.log(tp)
    tp.innerText=`not good`
})

star3=document.querySelector(".star3")
star3.addEventListener("click",()=>{
    star1.style.color = "#FFD43B"
    star2.style.color = "#FFD43B"
    star3.style.color = "#FFD43B"
    star4.style.color = "black"
    star5.style.color = "black"
    tp=document.querySelector(".pt")
    console.log(tp)
    tp.innerText=`it is good`
})

star4=document.querySelector(".star4")
star4.addEventListener("click",()=>{
    star1.style.color = "#FFD43B"
    star2.style.color = "#FFD43B"
    star3.style.color = "#FFD43B"
    star4.style.color = "#FFD43B"
    star5.style.color = "black"
    tp=document.querySelector(".pt")
    console.log(tp)
    tp.innerText=`it is good`
})

star5=document.querySelector(".star5")
star5.addEventListener("click",()=>{
    star1.style.color = "#FFD43B"
    star2.style.color = "#FFD43B"
    star3.style.color = "#FFD43B"
    star4.style.color = "#FFD43B"
    star5.style.color = "#FFD43B"
    tp=document.querySelector(".pt")
    console.log(tp)
    tp.innerText=`it is perfect `
})


