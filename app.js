//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector("#amigo").value;
    if(amigo == ""){
        alert("por favor insira um nome para ser sorteado!");
    }else{
        amigos.push(amigo);
        document.querySelector("#amigo").value = "";
    }
}