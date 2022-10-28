//Array Copy Within 
// let arr = [1,10,12,90,'DANR']
// console.log(arr)
//     arr.copyWithin(2,0,arr.length-1)
//     console.log(arr)


//Array Entries
// let myArr = [
//     {nama:'Danar'},
//     {nama:'Ketut'},
//     {nama:'SU'},
//     {nama:'Put'},
//     {nama:'PO'}
// ]
// let n = myArr.entries()
// for (let i of n){
// console.log(i[0]+' '+i[1].nama)
// }

//Array filter 
// const intEl = document.getElementById('int')

// let myArr = [
//     {
//         nama: ['Danar','Ketut','Anjay'],
//         hoby :['Menabuh','Olgha']
//     }
    
// ]
// let bioData = myArr[0]
// let names;
// intEl.addEventListener('input', e => {
//     let value = parseInt(e.target.value)
//     names= bioData.nama.filter((val,ind,arr) => {
//         if(value === ind) {
//             return val    
//         }
//         else{
//             console.log("Not Found")
//         }
            
//     })
//     console.log(names.join(' '))
// })


//Array method find
// let myArr = [
    //     {
        //         nama : "I Ketut Danar Cahyadi",
        //         umur : 17,
        //         Hoby :["Menabuh", "Olga"]
        // },
//     {
//         nama : "I Putu Yagi Nirmana",
//         umur : 20,
//         Hoby :["Musik", "Main Game"]
// },

// ]

// let index
//     intEl.addEventListener('input' ,e => {
//         let val = parseInt(e.target.value)
//         index = myArr.find((value,ind,ar) => {
//             if(val > 17){
//                 return value
//             }else{
//                 return value
//             }
//         })

//         console.log(index)
//     })



//Array find Index
// const Arr = [1,2,0,12,8]
// const Func = (val,I) => {
//     if(val == 12) return val
// }

// let ind = Arr.findIndex(Func)


//Array indexOf
// const arr = [1,3,24,5,6,14,24]
// //Start at index 3
// let inds = arr.indexOf(24,3)


// //Array from
// const x = Array.from('ABCKOSN',(val) => {
//     console.log(val)
// })


//Array includes
// const arr = [1,10,90,7,80]
// console.log(arr.includes(80))


//Array keys
// const arr = [1,0,12,5]
// let x = arr.keys()

// for(let i of x){
//     console.log(i)
// }


//Array LAst Index 
// const arr = [1,2,6,2,45,2,1,90]
// let inds = arr.lastIndexOf(2)



// let array = [12,3,12,3,1]

// let newArr = array.map((val,i,arr) => {
//     if(i === 2){
//         val = "pop"
//     }else{
//         val = val
//     }

//     return val
    
// })

// let arr=["asu","dana","agys",2,3,1,3,7,10,100,200,1000]
// const ulElement = document.querySelector("#cont")
// arr.sort((a,b) => { return a - b}) 
// arr.sort()
// let newArr = arr.map((val,i) => {
//     let li = `<li>${val}</li>`
//     ulElement.innerHTML += li
// })


// let arr = [1,2,90,211,23]

// let newArr = arr.map((val,i) => {
//     if(i == 3){
//         val = 'daanr'
//     }

//     return val
// })