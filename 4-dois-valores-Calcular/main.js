const somar = document.querySelector("#mais");
const subtrair = document.querySelector("#subtrair");
const multiplicar = document.querySelector("#multiplicar");
const divisor   = document.querySelector("#dividir")
const numero = document.querySelector("#resultado")
const um = document.querySelector(".um")
const dois = document.querySelector(".dois")

console.log(numero)


somar.addEventListener("click", mais);
subtrair.addEventListener("click", menos);
multiplicar.addEventListener("click", mult);
divisor.addEventListener("click", dividir);

function mais(){
    numero.textContent = parseInt(um.value) + parseInt(dois.value);
}

function menos(){
    numero.textContent = parseInt(um.value) - parseInt(dois.value);
}

function mult(){
    numero.textContent = parseInt(um.value) * parseInt(dois.value);
}

function dividir(){
    numero.textContent = parseInt(um.value) / parseInt(dois.value);
}