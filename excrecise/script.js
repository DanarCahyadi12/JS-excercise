// let matriksA = [
//     [1,19,22,129,2],
//     [90,21,67,12,2]
// ]
// let matriksB = [
//     [1,19,22,129,2],
//     [90,21,67,12,2]
// ]

// let penjumlahan;
// let resultMatriks = [
//     [],
//     []
// ]
// for(let i = 0; i < matriksA.length;i++){
//     for(let n = 0; n < matriksA[i].length;n++){
//         penjumlahan = matriksA[i].at(n) + matriksB[i].at(n)
//         resultMatriks[i].push(penjumlahan)
//     }
// }



// let matriksC = [
//     [12,10,2,8],
//     [100,0,3,5],
// ]

// let tranpos =  [
//     [],
//     [],
//     [],
//     []
// ]

// for(let i = 0; i < tranpos.length; i++){
//     for(let n = 0; n <= 0; n++){
//         let num = 0
//         let  res = matriksC[num].at(i)
//         num++
//         let res2 = matriksC[num].at(i)
//         tranpos[i].push(res,res2)
//     }
// }



// let output = ''
// let num = 0
// let num2 = 0
// for(let i = 1; i <= 5; i++){
//     for(let n = 1 ; n <= 5; n++){
//         if( n == 1){
//             num++
//             output+= num+' '
            
//         }else if(n == 2){
//             num2 = i + 5
//             output+=num2+' '
//         }else if(n === 3){
//             num2 = num2+ 5
//             output+=num2+' '
//         }else if(n === 4){
//             num2 = num2 + 5
//             output+=num2+' '
//         }else if(n === 5){
//             num2 = num2 + 5
//             output+=num2+' '
//         }
//     }

//     output+="\n"
// }

// // console.log(output)



// // let result = ''
// // let decNum = 5
// // for(let i = 1 ; i <= 5; i++){
// //     if(i === 3) break
// //     let nums = i * decNum
// //     decNum--

// //     result+=nums+' '

// // }

// // // console.log(result)


// let results = ''
// let col = 4
// let rows = 3
// let inc = 0
// let nums = 0
// for(let i = 1; i <= rows; i++){
//     for(let n = 1;n <= col; n++){
//         if(n === 1){
//             inc++
//             results+= inc+' '
//         }else if(n === 2){
//             nums = i + rows
//             results+=nums+' '
//         }else if(n === 3){
//             nums = nums+ rows
//             results+=nums+' '
//         }else if(n ===4){
//             nums = nums + rows
//             results+=nums+' '
//         }
//     }
//     results+='\n'
// }

// console.log(results)

// let matriksA = [
//     [1,10,21,2,12],
//     [-1,0,21,23,2]
// ]

// let tranpos = [
//     [],
//     [],
//     [],
//     [],
//     []
// ]
// let index = 0
// for(let i = tranpos.length-1 ; i >= 0;i--){
    
//     for(let n = matriksA.length-1; n <= matriksA.length-1;n++){
//         let incIndex = 0
//         let element = matriksA[incIndex].at(i)
//         incIndex++
//         let secElement = matriksA[incIndex].at(i)
//         tranpos[index].push(element,secElement)
//     }

//     index++
// }

// let output  = ''
// for(let i = 1; i <= 10; i++){
//     let result = i + (i+2)
//     output+=result+' '
// }
// console.log(output)


// let output = ''
// let num = 5
// for(let i = 1; i <= 5; i++){
//     let result = 0
//     if(i % 2 == 1){
//         result = i + num
//         output += result +' '
//         num--
//     }else{
//         result = i + (i+ 1)
//         output+=result+' '
//     }
 
 
// }

// console.log(output)
let arr = [10,2,12,23,4]
let output = ''
let lastIndex = arr.length-1
for(let i = 0 ; i<= arr.length-1; i++){
    if(i <= 1){
        output+=arr[i] + arr[lastIndex]+' '
        lastIndex--
        
    }else if(i === 2){
        output+= arr[i]+' '
        break
    }

}


let myArr = [1,2,3,1]
let myArr2 = [1,2,3,1]
let concat = myArr.concat(myArr2)




