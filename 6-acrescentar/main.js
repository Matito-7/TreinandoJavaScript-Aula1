const form = document.querySelector("#cadastrar")
form.addEventListener("submit", AcrescentarValoresNaLista)

function AcrescentarValoresNaLista (e){
    e.preventDefault()
    console.log(e.target[0].value);
    criarElemento(e.target[0].value)
}

function criarElemento (nome) {
    if (nome == ""){
        alert("Escreva Algo")
    }else{
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")
    novoItem.innerHTML = nome

    const lista = document.querySelector(".Lista");
    lista.appendChild(novoItem)
    }

}
