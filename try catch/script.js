
let us = 1

    try {
        if(!isNaN(us)) throw "This is a number"
        if(us.includes("_")) throw "No Underscore pls"
    } catch (error) {
        console.log(error)
    }finally{
        console.log("Valid")
    }
