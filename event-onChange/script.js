const input =  document.getElementById('int')
const checkBox = document.querySelectorAll('.checks')
const checkBoxMain = document.querySelector('.checkAll')
const box = document.querySelector('.box')
input.addEventListener('change',() =>{
    input.value = input.value.toUpperCase()
})

// let bool = true
// checkBoxMain.addEventListener('click',e => {
//    if(bool) {
//     bool = false
//        checkBox.forEach((val) => {
//            val.checked = true
          
//        })
//     }
//     else{
//         bool = true
//         checkBox.forEach((val) => {
//             val.checked = false
           
//         })
//    }
// })

checkBoxMain.addEventListener('change',() =>{
    if(box.classList.contains('show')){
        box.classList.replace('show','hide')
    }else{
        box.classList.replace('hide','show')
    }
   
})