function Prod(name,price) {
    this.name = name
    this.price= price
}

function Food(name,price){
    Prod.call(this,name,price)

}

const foo = new Food('mie',12000)


function Call(){
    return this.person+' '+this.isAlive
}

let obj = {
    person :"Danend",
    isAlive : true

}

let result = Call.call(obj)

let ar = ['damar','ari','noah']
function Caller(i){
    this.print = function(){
        console.log(ar[i])
    }
    this.print()
}
// for(let i = 0; i < ar.length; i++){

//     Caller.call(this,i)
// }

// let max = 0 
// let ars =[1,2,5,43,212,9]
// Array.prototype.LengthOfArr  = function(){
//     return this.length
// }
// let sum = ars.LengthOfArr()
let x1 = 0,v1 = 2,x2 =5,v2 = 3
let k1 = 0,k2 = 0
for(let i = 0; i <= 13;i++){
    if(i !== 12){

        let jmp = v1
        if(i % jmp == 0){
            continue
        }else{
            k1  = i
        }
        console.log("k1 "+k1)
    }else if(i === 12){
        break
    }

}
for(let i = 0; i <= 13;i++){
    let jmp = v2
    if(i !==12){

        if(i % jmp == 0){
            continue
        }else{
            k2  = i
            console.log("k2 "+k2)
        }
    }else if(i === 12){
        break
    }

}


// let matriks =  [
//     [-1,1,-7,-8],
//     [-10,-8,-5,-2],
//     [0, 9, 7, -1],
//     [4 ,4 ,-2 ,1]
// ]

// let dLeft = 0
// let dRight = 0
// let ind= 0


// for(let i = 0; i <= matriks.length-1;i++){
//     for(let n = 0; n <= matriks[i].length-1;n++){
//         if(n === ind){
//             dLeft += matriks[i][n]
//             break
//         }
//     }
//     ind++
// }
// ind = matriks[0].length-1
// for(let i = 0; i <= matriks.length-1;i++){
//     for(let n = matriks[i].length-1; n >= 0 ;n--){
//         if(n === ind){
//             dRight += matriks[i][n]
//             break
//         }
//     }
//     ind--
// }
