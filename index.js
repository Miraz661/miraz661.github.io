const navBar = document.querySelector(".navigation");



document.querySelector(".toggle").onclick=function(){
    this.classList.toggle("active");
    navBar.classList.toggle("active");
}

window.addEventListener('scroll',()=>{
    if(scrollY>50){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
})