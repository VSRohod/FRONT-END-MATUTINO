function replaceEcma() {
    // colocando frase base
    var frase = "Olá mundo, o mundo está maravilhoso, pois todo mundo está sorrindo";
    var resposta = document.querySelector('#resposta');

    resposta.innerHTML = frase;

    // replace = substitui um termo de string
    var fraseModificada = frase.replace("mundo","ryan");
    resposta.innerHTML += `<br>${fraseModificada}`;

    // replaceAll = substitui todos os termos de string
    var fraseModificada2 = frase.replaceAll("mundo","bolo");
    resposta.innerHTML += `<br>${fraseModificada2}`;
}

function pesquisar(){
    // includes apenas verifica se termo existe!
    var filmes = ["Vingadores","Pokemon","Era do gelo","Batman","Coringa"];
    var pesquisa = filmes.includes("Harry potter");
    var resposta2 = document.querySelector("#resposta2");

    if(pesquisa == true){
        resposta2.innerHTML = `Opa o termo foi encontrado!`;
    }else{
        resposta2.innerHTML = `O termo não foi encontrado!`;
    }

    // indexOf verifica se existe, também retorna indice
    var termoPesquisado = "TESTE";
    var pesquisa2 = filmes.indexOf(termoPesquisado);

    if(pesquisa2 == -1){
        resposta2.innerHTML += `<br>O elemento ${termoPesquisado} não foi encontrado!`;
    }else{
        resposta2.innerHTML += `<br>O elemento ${filmes[pesquisa2]} foi encontrado!`
    }
    
}

function pad(){
    var nome = "Alessandro";
    var sobreNome = "Menendes";
    var cartaoFinal = "9999";
    var totalCaracteres = (nome + sobreNome).length;
    var resposta3 = document.querySelector("#resposta3");

    resposta3.innerHTML = nome.padStart(totalCaracteres,sobreNome);
    resposta3.innerHTML += "<br>"+nome.padEnd(8,sobreNome);
    resposta3.innerHTML += "<br>"+cartaoFinal.padStart(16,"*");
}

// aula 7
function objectEntries(){
    const aluno = {
        matricula : 180,
        cursosFinalizados : ["Front end","UX","Banco de dados"],
        cursoAtual : "Dominó",
        nome : "Raul"
    }
    // retorna apenas atributos do objeto (matricula, cursosFinalizados)
    var alunoKey = Object.keys(aluno);
    console.log(alunoKey);

    // retornar apenas atributos e seus valores (matricula, 180 / cursosFinalizados, Array)
    var alunoEntries = Object.entries(aluno);
    console.log(alunoEntries);

    //retorna somente valor (Domino, Array)
    console.log(aluno.matricula);

    //map - faz um processo para cada elemento do nosso array
    var teste = ["Matricula","Front End"];
    var mapResultado = teste.map((elemento) => {
        console.log(elemento)
    });
    console.log(mapResultado);
}

function Promises(){   
}

// executar functions
replaceEcma();
pesquisar();
pad();
objectEntries();