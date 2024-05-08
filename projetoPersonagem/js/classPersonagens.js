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

var personagens = [];

personagens.push(new Personagem(1,"Link do Zelda","images/normal.svg",10,1,"Espada"));
personagens.push(new Personagem(2,"Monstro","images/inimigo.svg",10,1,"Bastão"));