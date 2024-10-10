let listaNumerosSorteados = [];
let numeroMaximo = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

};

function MensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    
}


function verificarChute(params) {
    
    let chute = document.querySelector('input').value;

if (chute == numeroSecreto) {
    exibirTexto('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
    exibirTexto('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio() {   

    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let tamanhoLista = listaNumerosSorteados.length;

    if (tamanhoLista == numeroMaximo){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
        
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    MensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
          
}

MensagemInicial();
console.log(numeroSecreto);