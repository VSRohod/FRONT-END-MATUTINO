const btnPesquisar = document.querySelector("#btnResposta");
const jogos = ["Resident Evil","Dota 2","Free Fire","League of Legends","Castlevania"];

btnPesquisar.addEventListener('click',pesquisar);

function pesquisar(){
    let jogoPesquisado = document.querySelector("#inputResposta").value;
    let resposta = document.querySelector("#pesquisarResposta");

    let respostaPesquisa = jogos.includes(jogoPesquisado);

    if(respostaPesquisa == true){
        resposta.innerHTML = `Jogo encontrado! Item da pesquisa: ${jogoPesquisado}`;
    }else{
        resposta.innerHTML = `Jogo ${jogoPesquisado} não foi encontrado!`;
    }
}

const btnReplace = document.querySelector("#btnReplace");
const btnReplaceAll = document.querySelector("#btnReplaceAll");

btnReplace.addEventListener("click",substituirUm);
btnReplaceAll.addEventListener("click",substituirTodos);

function substituirUm(){
    let texto = document.querySelector("#texto").value;
    let acharTermo = document.querySelector("#acharTermo").value;
    let trocarTermo = document.querySelector("#trocarTermo").value;

    let textoAtualizado = texto.replace(acharTermo,trocarTermo);
    document.querySelector("#texto").value = textoAtualizado;
}

function substituirTodos(){
    let texto = document.querySelector("#texto").value;
    let acharTermo = document.querySelector("#acharTermo").value;
    let trocarTermo = document.querySelector("#trocarTermo").value;

    let textoAtualizado = texto.replaceAll(acharTermo,trocarTermo);
    document.querySelector("#texto").value = textoAtualizado;
}