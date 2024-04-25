function ifElse() {
    // se (condicao) faca ... fimse, senao...
    if (true) {
        console.log("Estou no if");
    }else{
        console.log("Estou no Else");
    }

    // VERIFICA IDADE 
    //INPUT - idade
    //OUTPUT - resposta
    // Verifica a idade do usuário se é maior de idade
    alert("Seja bem vindo(a)");
    let idade = Number(prompt("Insira a sua idade"));

    if (idade >= 18) {
        alert("Aproveite nosso sistema!");
        let resposta = document.querySelector("#resposta");
        resposta.innerHTML = `<h3 style="color : red;"> ${idade} </h3>` ;
    }else{
        alert("Idade inválida");
        location.href = "https://www.google.com.br"
    }
}

function switchCase(){
    alert("Lojinha Brasileiras");
    let opcao = prompt("Escolha a sua opção: A)pen drive.  B)Bola. C)Chocolate");

    switch(opcao){
        case "A":
            alert("Você comprou um Pen Drive");
            break
        case "B":
            alert("Você comprou uma Bola");
            break
        case "C":
            alert("Você comprou um Chocolate");
            break
        default:
            alert("Invalido");
    }
}

function atividade(){

}

GABRIELY
DAVID
LAURA