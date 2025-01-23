//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector("#amigo").value;
    if(amigo == ""){
        alert("por favor insira um nome para ser sorteado!");
    }else{
        amigos.push(amigo);
        atualizarLista();
        document.querySelector("#amigo").value = "";
    }
}

function atualizarLista() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        
        const item = document.createElement("li");
        
        item.textContent = `${i + 1} - ${amigo}`;

        listaAmigos.appendChild(item);
    }
    
}

function sortearAmigo(){
    let resultado = document.querySelector("#resultado").value;

    let escolhido = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `O Seu amigo(a) é o(a) ${(amigos[escolhido]).toUpperCase()}!`;
        amigos.splice(escolhido, 1);
        atualizarLista();
}