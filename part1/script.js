let addButton=document.querySelector('.add')
console.log(addButton)


addButton.addEventListener('click', ()=>{
    
    firstNumber=document.querySelector(".number-1")
    secondNumber=document.querySelector('.number-2')
    thirdNumber=document.querySelector('.number-3')

    console.log(firstNumber.value)
    console.log(secondNumber.value)
    console.log(thirdNumber.value)
    let myNumbers=[`${firstNumber.value}`,
    `${secondNumber.value}`,`${thirdNumber.value}` ]
    console.log(typeof(myNumbers))
    console.log(myNumbers)
    let max = Math.max(...myNumbers);
    console.log("max element: ", max)
    let min = Math.min(...myNumbers);
    console.log("min element: ", min)
   let output= document.querySelector(".out")
   console.log(output)
   output.innerText=`Max number: ${max}, Min number: ${min}`
  
});
let addLetterButton=document.querySelector('.add-letter')
console.log(addLetterButton)
addLetterButton.addEventListener('click',()=>{
    let vowel=["a","e","i","o","u"]
    let letterbc=document.querySelector(".letter")
    let letterLower=letterbc.value.toLowerCase()
    console.log(letterLower)
    if (vowel.includes(letterLower)){
        document.querySelector(".out2").innerText=`${letterbc.value} is a vowl letter`
        console.log(`${letterbc.value} is a vowel`)
    }
    else{
        document.querySelector(".out2").innerText=`${letterbc.value} is  Consonant letter`
    }
})

let addNumber3= document.querySelector('.add-number-3')
console.log(addNumber3)
addNumber3.addEventListener('click',()=>{
    number3v=document.querySelector(".inputNumber3")
    console.log(number3v.value)
    mynumber=number3v.value
    let multi=[1,2,3,4,5,6,7,8,9,10,11,12]
    const multiarray=multi.map(element =>{return element*mynumber})
    console.log(multiarray)
    document.querySelector(".out3").innerText=multiarray
})

let button4=document.querySelector(".add-number-4")
console.log(button4)
addNumber4=button4.addEventListener("click",()=>{
    number4v=document.querySelector(".inputNumber4")
    console.log(number4v.value)
    intnumber=parseInt(number4v.value)
    console.log(intnumber)
    console.log(typeof(intnumber))
    let evenNumbers=[]
for(i=1;i<=intnumber;i++){
    console.log(i)
    if(i%2==0){
        evenNumbers.push(i)
    }
    document.querySelector(".out4").innerText=evenNumbers
    console.log(evenNumbers)
}


})

let addMarksButton= document.querySelector(".add-marks")
console.log(addMarksButton)
addMarksButton.addEventListener("click",()=>{
    myMarks=document.querySelector(".marks")
    console.log(myMarks.value)
    myMarksv=myMarks.value
    console.log(myMarksv)
   myMarksArray=myMarksv.split(" ").map(item=>parseInt(item))
   console.log(myMarksArray)
   total=myMarksArray.reduce(sum)
   console.log(total)
   function sum(previous,next){
    return previous+next
   }
   averageMarks=total/5
console.log(averageMarks)
percentage=(total/500)*100
console.log(`${percentage}%`)
document.querySelector(".out5").innerText=`Total marks=${total}  ,Average=${averageMarks} ,percentage=${percentage}%`
})

let addSubMarks=document.querySelector(".add-sub-marks")
console.log(addSubMarks)
addSubMarks.addEventListener("click",()=>{
    physicsMark=document.querySelector(".physics-mark").value
   let phint= parseInt(physicsMark)
    console.log(phint)
    let phgrade;
    if (phint >= 90) {
        phgrade = 'A';
    } else if (phint >= 80) {
        phgrade = 'B';
    } else if (phint >= 70) {
        phgrade = 'C';
    } else if (phint>= 60) {
        phgrade = 'D';
    } else if (phint >= 40) {
        phgrade = 'E';
    } else {
        phgrade = 'F';
    }

    chemistryMark=document.querySelector(".chemistry-mark").value
    let chint= parseInt(chemistryMark)
     console.log(chint)
     let chgrade;
     if (chint >= 90) {
        chgrade = 'A';
     } else if (chint >= 80) {
        chgrade = 'B';
     } else if (chint >= 70) {
        chgrade = 'C';
     } else if (chint>= 60) {
        chgrade = 'D';
     } else if (chint >= 40) {
        chgrade = 'E';
     } else {
        chgrade = 'F';
     }

     biologyMark=document.querySelector(".biology-mark").value
    let biint= parseInt(biologyMark)
     console.log(biint)
     let bigrade;
     if (biint >= 90) {
        bigrade = 'A';
     } else if (biint >= 80) {
        bigrade = 'B';
     } else if (biint >= 70) {
        bigrade = 'C';
     } else if (biint>= 60) {
        bigrade = 'D';
     } else if (biint >= 40) {
        bigrade = 'E';
     } else {
        bigrade = 'F';
     }


     mathematicsMark=document.querySelector(".mathematics-marks").value
     let maint= parseInt(mathematicsMark)
      console.log(maint)
      let magrade;
      if (maint >= 90) {
        magrade = 'A';
      } else if (maint >= 80) {
        magrade = 'B';
      } else if (maint >= 70) {
        magrade = 'C';
      } else if (maint>= 60) {
        magrade = 'D';
      } else if (maint >= 40) {
        magrade = 'E';
      } else {
        magrade = 'F';
      }

      computerMark=document.querySelector(".computer-mark").value
      let coint= parseInt(computerMark)
       console.log(coint)
       let cograde;
       if (coint >= 90) {
        cograde = 'A';
       } else if (coint >= 80) {
        cograde = 'B';
       } else if (coint >= 70) {
        cograde = 'C';
       } else if (coint>= 60) {
        cograde = 'D';
       } else if (coint >= 40) {
        cograde = 'E';
       } else {
        cograde = 'F';
       }

    document.querySelector(".out6").innerText=`physics grade=${phgrade}, chemistry grade=${chgrade}, biology grade=${bigrade},mathematics grade=${magrade},computer grade=${cograde} `

})