const mainContainerSignUP = document.querySelector(".main-container");
const containerLogin = document.querySelector(".container-login");
const forgottonPass = document.querySelector(".container-forgotton-password");
const closeResetPassword = document.querySelector("#closeResetPassword");


function newAccount() {
    containerLogin.style.opacity = "0.3";
    mainContainerSignUP.style.display = 'flex';
}
function backToLoginPage() {
    containerLogin.style.opacity = "1";
    mainContainerSignUP.style.display = 'none';
}

function openForgottonSection() {
    containerLogin.style.opacity = "0.3";
    forgottonPass.style.display = 'flex';
}

closeResetPassword.addEventListener('click', ()=>{
    containerLogin.style.opacity = "1";
    forgottonPass.style.display = 'none';
})