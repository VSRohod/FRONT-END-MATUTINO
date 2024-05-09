function listarEstatisticas(){
    let main = document.querySelector("main");
    main.innerHTML = "";

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
                <p>💫 XP : ${element.xp}</p>
                <button id="atacar" onclick="atacar(${element.id})">💣ATACAR</button>
                <button id="curar" onclick="curar(${element.id})">🩹CURAR</button>
            </div>
        </div>`
    });
}

// remove a classe de animação
// function removerClasse(tempoDeRemocao){
//     let personagem = document.querySelector("#imagemProtagonista");

//     setTimeout( function(){
//         personagem.removeAttribute("class");
//     } , tempoDeRemocao);
// }

// // aplica uma animacao e remove class

// function animar(animacao,tempoDeRemocao){
//     let personagem = document.querySelector("#imagemProtagonista");

//     personagem.setAttribute("class","animate__animated "+animacao);

//     removerClasse(tempoDeRemocao);
// }

// // troca o personagem de sprite com animação
// function trocarDeEstado(animacao,sprite,tempoDeRemocao){
//     let personagem = document.querySelector("#imagemProtagonista");

//     animar(animacao,tempoDeRemocao);
//     personagem.setAttribute("src",sprite);
// }


class Personagem {
    constructor(id,nome,imgSrc,vidaMax,dano,itemPrincipal){
        this.id = id;
        this.nome = nome;
        this.imgSrc = imgSrc;
        this.vida = vidaMax;
        this.vidaMax = vidaMax;
        this.dano = dano;
        this.nivel = 0;
        this.xp = 0;
        this.items = [itemPrincipal];

        this.morrer = function(alvo){
            this.ressucitar(alvo);
        }
        
        this.ressucitar = function(alvo){
            // trocarDeEstado("animate__heartBeat","images/normal.svg",600);
            personagens[alvo].vida = personagens[alvo].vidaMax
            listarEstatisticas();
        }

        this.atacar = function(atacante){
            if(atacante == 0){
                this.sofrerDano(this.dano, 0);
                if(personagens[1].vida <= 0){
                    this.morrer(1)
                    this.ganharXp(5);
                }
                listarEstatisticas();  
            }else{
                this.sofrerDano(this.dano, 1);
                if(personagens[0].vida <= 0){
                    this.morrer(0)
                    this.ganharXp(5);
                }
                listarEstatisticas();
            }

        }

        this.curar = function(cura){
            if(this.vida == 0){
                this.ressucitar(this.id);
            }else if(this.vida < this.vidaMax){
                this.vida += cura;
                // animar("animate__pulse",800);
                listarEstatisticas();
            }
                
        }

        this.ganharXp = function(xp){
            this.xp += xp;
            this.evoluir();
            listarEstatisticas();
        }

        this.evoluir = function(){
            if(this.xp == 10){
                this.nivel += 1;
                this.dano = 3
            }else if(this.xp == 20){
                this.nivel += 1;
                this.dano = 5
                this.items.push("Arco");
            }else if(this.xp == 50){
                this.nivel += 1;
                this.dano = 15
            }
            listarEstatisticas();
        }
        
        this.sofrerDano = function(danoSofrido,alvo){
            if(alvo == 0){
                alvo = 1;
            }else{
                alvo = 0
            }

            personagens[alvo].vida -= danoSofrido;

            if(personagens[alvo].vida <= 0){
                personagens[alvo].vida = 0;
                // troca sprite
                // trocarDeEstado("animate__shakeY","images/dead.svg",800)
                listarEstatisticas(); 
            }else{
                // trocarDeEstado("animate__shakeY","images/dano.svg",800)
                // setTimeout(function(){
                //     document.querySelector("#imagemProtagonista").setAttribute("src","images/normal.svg")
                // },850)
                listarEstatisticas();
            }
        }
    }
}

var personagens = [];

personagens.push(new Personagem(0,"Link do Zelda","images/normal.svg",10,1,"Espada"));
personagens.push(new Personagem(1,"Monstro","images/inimigo.svg",10,1,"Bastão"));

// listar personagens
listarEstatisticas();