let mensajeM = document.getElementById("mensajeC");
let email = document.getElementById("email");
let accept = document.getElementById("continue");
let form = document.getElementById("form");

accept.addEventListener(`click`,function(){
        form.style.height = 150 + "px";
        mensajeM.classList.replace('oculto','visible');
});