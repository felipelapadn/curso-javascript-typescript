// função construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}!`);
};

// com classe
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome}!`)
    }

    comer() {
        console.log(`${this.nome} está comendo...`)
    }

    get nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(" ");
        this.nome = valor.shift() // o shift retorna e remove o primeiro elemento do array
        this.sobrenome = valor.join(" ");
    }
}

const p1 = new Pessoa("Felipe", "Lapa");
console.log(p1.nomeCompleto);
p1.nomeCompleto = "Felipe Lapa do Nascimento"
console.log(p1.nomeCompleto);

const p2 = new Pessoa2("Felipe", "Lapa");
console.log(p2);