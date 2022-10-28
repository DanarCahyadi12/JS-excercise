// const Display = param => {
//     console.log(param)
// }

// const Calc = (num1,num2,callBack) => {
//     let result = num1 + num2
//     callBack(result)
//     return
    
// }


// Calc(10,10,Display)

// const Calc = (num1,num2,callBack) => {
//     let result = num1 + num2
//     callBack(result)

// }

// Calc(10,14,(args) => {
//     console.log(args)
// })

// let int = prompt("Input your name")

// const UserName = (callBackSolv,callBackFail) => {
//     if(int !== null) {
//         callBackSolv("Your name is "+int)
//     }else{
//         callBackFail("You canceled")
//     }
// }

// UserName((massage) => {
//     console.log("Your name is "+massage)
// },(massage) => {
//     console.log(massage)
// })

// let firstUserName = prompt("Input your first name :")
// let endUserName = prompt("Input your end name :")

// const MyCallBackFunction = (firstName,endName,callBack) => {
//     let ans = "hellow anjay"
//     callBack(`Your fullname is ${firstName} ${endName}`,ans)
// }

// MyCallBackFunction(firstUserName,endUserName,(value,value2) => {
//     console.log(value,value2)
// })


// class data{
//     constructor(name,age) {
//         this.name =name
//         this.age = age

//     }
// }

// let isLeaveOrNot = false
// const Data1 = new data("danar",17)


// const CheckUser = (UserJoin,UserLeave) => {
//     isLeaveOrNot ? UserJoin(Data1) : UserLeave("User was leave :(")
// }

// setTimeout(() => {
//     CheckUser((massage) => {
//         console.log(`User join\nName :${massage.name}\nAge : ${massage.age}`)
//     },(massage) => {
//         console.log(massage)
//     })
// }, 2000);


// const Data = [
//     {
//         nama:"Danar"

//     },
//     {
//         nama:"Yoga"

//     }
// ]

// let index = 0
// let isJoinOrLeft = false
// const MyFunction = (user,userJoin,userLeft) => {
//    if(isJoinOrLeft){
//     user(Data[index].nama)
//     userJoin("User join")
//    }
//    else{
//     userLeft(`${Data[index].nama} was left`)
//    }

// }

// MyFunction((massage) => {
//     console.log('Hello '+massage)
// },(massage) => {
//     console.log("User "+massage)
// },(massage) => {
//     console.log(massage)
// })



// const namaUser = [
//     {
//         nama : "Danar"
//     },
//     {
//         nama : "Agus"
//     }
// ]


// const display = param => {
//     console.log(param)
// }
// const MyCallback = (sendParam) =>{
//     sendParam(2,10)
// }

// MyCallback((param1,param2) => {
//     let hasil = param1  + param2
//     display(hasil)
// })



//splited each word

let txt = "hello world"
let arr = txt.split(' ')
let eachWord = arr[0].split('').reverse().join('') + arr[1].split('').reverse().join('')

console.log()


