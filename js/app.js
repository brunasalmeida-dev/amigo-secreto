let amigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value;

    if (nome === "") {
    alert('Campo vazio, tente digitar algo.');
    return;
    }

    if (amigos.includes(nome)){
        alert ('Nome já adicionado!');
        return;
    }

    amigos.push(nome);
    document.getElementById('lista-amigos').innerHTML = amigos;
    document.getElementById('nome-amigo').value = "";

} 

function sortear(){
    if (amigos.length === 0) {
    alert('Preencha o campo abaixo antes de sortearmos.');
    return;
}

    let sorteio = Math.floor(Math.random() * amigos.length);

    document.getElementById('lista-sorteio').innerHTML = amigos[sorteio];
}

function reiniciar(){
    amigos = [];

    document.getElementById('lista-amigos').innerHTML = "";
    document.getElementById('lista-sorteio').innerHTML = "";
    document.getElementById('nome-amigo').value = "";
}