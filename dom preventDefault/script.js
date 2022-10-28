const inputEl = document.getElementById("int-text")
const checkButton = document.querySelector('.check')
const radioEl = document.querySelectorAll(".radioEl")
const rangeEl = document.querySelector("#ranges")
// inputEl.addEventListener('keypress',e => {
//    e.preventDefault()
// })


checkButton.addEventListener('click',(e) => {
   e.preventDefault()
})

radioEl.forEach((val,i) => {
   val.addEventListener("click",e => {
      e.preventDefault()
   })
})
// setTimeout(() => {
//    inputEl.addEventListener('keypress',e => {
//       if(e.code == "a"){

//          e.preventDefault()
//       }

  
//    })

// // }, 2000);
// inputEl.addEventListener('keydown',e => {
//   if(e.code == "Space"){
//      e.preventDefault()
//      alert("Nama tidak boleh isi spasi")
   
//   }



// })
// inputEl.addEventListener("input",e => {
//    console.log(e.target.value)
 
// })

