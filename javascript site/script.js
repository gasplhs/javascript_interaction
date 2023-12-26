"use strict";

document.addEventListener("DOMContentLoaded", function () {
    //obtient les references de licone du menu burger et du menu de navigation
    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.getElementById("menu");

    //ajoute un ecouteur devenement ai clic sur licone du menu burger
    burgerIcon.addEventListener("click", function () {
    //bascule la clsse 'active' pour affiche/masquer le menu de navigation
    menu.classList.toggle("active");
    });
});

let pseudo=document.querySelector("#pseudo");
console.log(pseudo);
let bt=document.querySelector("#bt")
function check(e){
    e.preventdefault();
    let pseudoValue=pseudo.value;
    console.log(pseudoValue);
}

function validatePassword(){

    let passwordError = document.getElementById('mdp');
    // Expression régulière pour vérifier la présence d'au moins une majuscule, une minuscule et un caractère spécial
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

    if (passwordRegex.test(passwordInput.value) && passwordInput.value.lenght >= 8) {
        passwordError.textContent=''; // Le mot de passe est valide
    } else {
        passwordError.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial'
    }   
}


let lightModeButton = document.querySelector('button');
    let bodyContainer = document.querySelector('body');
    let menu = document.querySelector('.menu.active');

    lightModeButton.addEventListener('click', function () {
        bodyContainer.classList.toggle('light-mode');
})

