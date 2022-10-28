const btn = document.querySelector('.btn')
let windows
let bool = true
btn.addEventListener('click',() =>{
    if(bool){
        windows = window.open("https://pornhub.com","width=300px","height=200px")
        bool = false
    }else{
        windows.close()
        bool = true
    }
     

})






window.scrollBy(20,20)
window.addEventListener('scroll', ()=> {
    console.log(window.pageYOffset)
})