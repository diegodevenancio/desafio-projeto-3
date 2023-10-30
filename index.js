// Escrevendo as classes de um Jogo

//classe hero
class Hero {

    //propriedads da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    //método atacar
    atacar() {
        if (this.tipo === "Mago") {
            return "magia";
        } else if (this.tipo === "Guerreiro") {
            return "espada";
        } else if (this.tipo === "Monge") {
            return "artes marciais";
        } else {
            return "Shuriken";
        }
    }

    //método para imprimir a mensagem final atribuindo o tipo e qual o ataque realizado
    mensagem() {
        console.log("O " + this.tipo + " atacou usando " + this.atacar());
    }
}

//atribuindo a classe em uma variável
let hero1 = new Hero(" ", 30, "Mago");

//chamada da função
hero1.mensagem();


