const toggleBtn = document.querySelector(".toggle");
const menulist = document.querySelector(".menu");
const header = document.querySelector(".header");

toggleBtn.addEventListener("click",()=>{
    menulist.classList.toggle("active");
    header.classList.toggle("active");
})

menulist.addEventListener("click",()=>{
    menulist.classList.remove("active");
})


const Cart = document.querySelector(".cart");
const CartMenu = document.querySelector("#cartMenu");

Cart.addEventListener("click",()=>{
    CartMenu.classList.toggle("active");
})