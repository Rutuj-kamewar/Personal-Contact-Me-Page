var menu = document.querySelector(".menu")
var band = document.querySelector(".close")
var after = document.querySelector("header")

menu.addEventListener("click" , ()=>{
    menu.style.display = "none"
    band.style.display = "block"
    after.classList.add ("active")
})
band.addEventListener("click" , ()=>{
    menu.style.display = "block"
    band.style.display = "none"
    after.classList.remove ("active")
})