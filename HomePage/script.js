
function showPopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'block';
}


function closePopup() {
    const loginPopup = document.getElementById('loginPopup');
    loginPopup.style.display = 'none';
}

window.onload = showPopup;

let signinbtn=document.getElementById("signinbtn")
let signupbtn=document.getElementById("signupbtn")
let title=document.getElementById("title")
let firstN=document.getElementById("firstN")
let lastN=document.getElementById("lastN")


let login=true;

// function changelogin(){
// login=!login;
// }

function setup(){
    signinbtn.addEventListener("click",()=>{login=true})
    signupbtn.addEventListener("click",()=>{login=false})
    console.log(login);
    if(login==true){

title.innerText="Sign in";
firstN.style.display='none';
lastN.style.display='none';
}
else
{
    firstN.style.display='block';
lastN.style.display='block';
    title.innerText="Sign Up"
}
// changelogin();
}


