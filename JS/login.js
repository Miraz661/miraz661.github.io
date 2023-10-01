const sub = document.querySelector("#loginBtn");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const login = document.querySelector(".login");
const preloader = document.querySelector(".preloader");
const body = document.querySelector("#body");
const sEmail = document.querySelector("#sEmail");
const sPass = document.querySelector("#sPass");
const sConfPass = document.querySelector("#sConfPass");
const signUp = document.querySelector("#signUp");



setInterval(loadPage,3000);

function loadPage(){
    body.classList.add("body");
}
sub.addEventListener("click",()=>{
    if((email.value == localStorage.getItem("userName") && pass.value == localStorage.getItem("password"))){
        localStorage.setItem("isLogin",true);
        login.action = "../index.html";
    }
});

signUp.addEventListener("click",()=>{
    if(sPass.value == sConfPass.value){
        localStorage.setItem("userName",sEmail.value);
        localStorage.setItem("password",sPass.value);
    }
})