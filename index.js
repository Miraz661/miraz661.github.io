const Cart = document.querySelector(".cart");
const CartMenu = document.querySelector("#cartMenu");
const body = document.querySelector("#body");

Cart.addEventListener("click",()=>{
    CartMenu.classList.toggle("translate-x-0");
})
body.addEventListener("click",()=>{
    CartMenu.classList.remove("translate-x-0");
})


const toggleBtn = document.querySelector(".toggle");
const menulist = document.querySelector(".menu");
const bars = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-x");

toggleBtn.addEventListener("click",()=>{
    menulist.classList.toggle("h-48");
    cross.classList.toggle("hidden");
    bars.classList.toggle("hidden");
})

menulist.addEventListener("click",()=>{
    menulist.classList.toggle("h-48");
    cross.classList.toggle("hidden");
    bars.classList.toggle("hidden");
})




                    // cart section 

const cartCount = document.querySelector(".cartCount");
let cartCounter = 0;
let addItemId = 0; 

function addToCart(item){
    addItemId ++;
    cartCounter++;
    cartCount.innerHTML = cartCounter;
    let selectedItem = document.createElement("div");
    let img = document.createElement("img");
    selectedItem.classList.add("w-72","mx-auto","my-4");
    selectedItem.setAttribute("id",addItemId);
    img.setAttribute("src",item.children[0].currentSrc);
    img.classList.add("h-60","w-full","rounded");
    let itemName = document.createElement("h2");
    itemName.innerText= item.children[1].innerText;
    itemName.classList.add("text-2xl","pt-2")
    let price = document.createElement("h3");
    price.innerHTML= item.children[2].children[1].innerText;
    price.classList.add("text-sm","pb-2");
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Remove";
    delBtn.setAttribute("onclick","del("+addItemId+")");
    delBtn.classList.add("bg-red-600","text-white","text-xl","px-3","py-2","rounded","w-full","align-center","border-2","border-red-600","hover:bg-transparent","hover:text-red-600","duration-500");
    let cartItems = document.getElementById("title");
    selectedItem.appendChild(img);
    selectedItem.appendChild(itemName);
    selectedItem.appendChild(price);
    selectedItem.appendChild(delBtn);
    cartItems.append(selectedItem);
}

function del(item){
    cartCounter--;
    cartCount.innerHTML = cartCounter;
    document.getElementById(item).remove();
}
