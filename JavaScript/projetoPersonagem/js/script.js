class Personagem {
    constructor(nome,vida,dano,itemPrincipal){
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
        this.nivel = 0;
        this.items = [itemPrincipal];
        this.atacar = function(){

        }
        this.curar = function(){

        }
        this.evoluir = function(){

        }
        this.causarDano = function(){

        }
    }
}

var link = new Personagem("Link do Zelda",10,1,"Espada");

function listarEstatisticas(){
    let estatisticas = document.querySelector("#estatisticas");

    estatisticas.innerHTML = `
    <p>🙂 Nome : ${link.nome}</p>
    <p>❤️ Vida : ${link.vida}</p>
    <p>⚔️ Dano : ${link.dano}</p>
    <p>🎒 Items : ${link.items}</p>
    <p>💫 Nivel : ${link.nivel}</p>
    <button id="atacar" onclick="atacar(${link.dano})">💣ATACAR</button>
    <button id="curar" onclick="curar(1)">🩹CURAR</button>
    <button id="ganharXp" onclick="upar(1)">🌟Ganhar XP</button>
    <button id="tomarDano" onclick="tomarDano(1)">🩸Tomar dano</button>
    `
}

listarEstatisticas();

function upar(nivel){
    link.nivel += nivel;

    if(link.nivel == 10){
       link.dano = 3;
       link.vida = 15;
       link.items.push("Arco"); 
    }
    listarEstatisticas();
}

function tomarDano(dano){
    link.vida -= dano;
    let personagem = document.querySelector("#personagem");

    if(link.vida <= 0){
        link.vida = 0;
        personagem.setAttribute("src","images/dead.svg");
        listarEstatisticas(); 
    }else{
        personagem.setAttribute("src","images/dano.svg");
        // timer setTimeOut(funcao,tempoDoTimer)
        setTimeout(function(){
            personagem.setAttribute("src","images/normal.svg");
        },500);
        listarEstatisticas();
    }

}

function curar(cura){
    let personagem = document.querySelector("#personagem");

    if(link.vida <= 0){
        link.vida = 1;
        personagem.setAttribute("src","images/ataque.svg");
        setTimeout(function(){
            personagem.setAttribute("src","images/normal.svg");
        },400);
        listarEstatisticas();
    }else{
        link.vida += cura;
        listarEstatisticas();
    }
}

function atacar(dano){
    alert(`Você causou ${dano} de dano`);
}
