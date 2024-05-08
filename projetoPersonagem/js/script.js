// functions do protagonista
// *********************************************************************************
// funções gerais
function listarEstatisticas(){
    let main = document.querySelector("main");

    // let listaPersonagens = personagens.map();
    personagens.forEach((element) =>{
        main.innerHTML += `
        <div class="personagensInfo">
            <img src=${element.imgSrc} id=${element.nome} alt="">
            <div class="personagens">
                <p>🙂 Nome : ${element.nome}</p>
                <p>❤️ Vida : ${element.vida} / ${element.vidaMax}</p>
                <p>⚔️ Dano : ${element.dano}</p>
                <p>🎒 Items : ${element.items}</p>
                <p>🌟 Nivel : ${element.nivel}</p>
                <p>💫 Nivel : ${element.xp}</p>
                <button id="atacar" onclick="atacar(${element.dano})">💣ATACAR</button>
                <button id="curar" onclick="curar(${element.id},1)">🩹CURAR</button>
                <button id="ganharXp" onclick="upar(${element.id},1)">🌟Ganhar XP</button>
                <button id="tomarDano" onclick="tomarDano(${element.id},1)">🩸Tomar dano</button>
            </div>
        </div>`
    });

    
}

// remove a classe de animação

function removerClasse(tempoDeRemocao){
    let personagem = document.querySelector("#imagemProtagonista");

    setTimeout( function(){
        personagem.removeAttribute("class");
    } , tempoDeRemocao);
}

// aplica uma animacao e remove class

function animar(animacao,tempoDeRemocao){
    let personagem = document.querySelector("#imagemProtagonista");

    personagem.setAttribute("class","animate__animated "+animacao);

    removerClasse(tempoDeRemocao);
}

// troca o personagem de sprite com animação
function trocarDeEstado(animacao,sprite,tempoDeRemocao){
    let personagem = document.querySelector("#imagemProtagonista");

    animar(animacao,tempoDeRemocao);
    personagem.setAttribute("src",sprite);
}

function avançarNivel(nivel,dano,vidaMax){
    link.nivel = nivel
    link.dano += dano
    link.vidaMax += vidaMax
    link.vida = link.vidaMax
}


// *************************************************************************************
// ações personagem
function upar(id,xp){
    personagens[id].xp += xp;
    console.log(personagens[id])

    if(link.xp == 20){
        avançarNivel(1,2,3);
    }else if(link.xp == 40){
        avançarNivel(2,4,6);
    }else if(link.xp == 70){
        avançarNivel(3,5,4)
    }
    listarEstatisticas();
}

function tomarDano(dano){
    link.vida -= dano;

    if(link.vida <= 0){
        link.vida = 0;
        // troca sprite
        trocarDeEstado("animate__shakeY","images/dead.svg",800)
        listarEstatisticas(); 
    }else{
        trocarDeEstado("animate__shakeY","images/dano.svg",800)
        setTimeout(function(){
            document.querySelector("#imagemProtagonista").setAttribute("src","images/normal.svg")
        },850)
        listarEstatisticas();
    }

}

function ressucitar(){
    trocarDeEstado("animate__heartBeat","images/normal.svg",600)
    link.vida = 1;
    listarEstatisticas();
}

function curar(cura){
    if(link.vida == 0){
        ressucitar();
    }else if(link.vida < link.vidaMax){
        link.vida += cura;
        animar("animate__pulse",800);
        listarEstatisticas();
    }

}

function atacar(dano){
    alert(`Você causou ${dano} de dano`);
}

// executar na pagina
listarEstatisticas();