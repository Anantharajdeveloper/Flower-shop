//preloader -------------------------------------
const loader = document.getElementById('preloader');

window.onload = function () {
    loader.classList.add('lodaeranimy');
    // loader.style.display = 'none';
}

//preloader -------------------------------------
// top cart botton ---------------------------------

let myCart = document.getElementById('add-to-cart');
let cartBtn = document.getElementById("cart-btn");

cartBtn.onclick = function () {
    // alert("it's Working");
    myCart.classList.toggle('active');
}

let myCarttwo = document.getElementById('add-to-cart');
let cartBtntwo = document.getElementById("cart-btntwo");

cartBtntwo.onclick = function () {
    // alert("it's Working");
    myCarttwo.classList.toggle('active');
}


// top cart botton ---------------------------------


// top sign in botton ---------------------------------
let loginForm = document.querySelector('.header .login_form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}


let loginFormtwo = document.querySelector('.header .login_form');

document.querySelector('#login-btntwo').onclick = () => {
    loginFormtwo.classList.toggle('active');
}
// top sign in botton ---------------------------------



// back to top botton--------------------------
window.onscroll = function () {
    var backbtn = document.getElementById("BackToTop");
    var height = window.scrollY
    if (height >= 700) {
        backbtn.style.display = "flex"
    } else {
        backbtn.style.display = "none"
    }
}

let backbtn = document.getElementById("BackToTop");
backbtn.onclick = function () {
    // alert("it's Working")
    document.scrollingElement.scrollTop = "0";
}

// back to top botton--------------------------


