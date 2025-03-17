class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado!`);
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado!`);
        }

        this.ligado = false;
    }
}

class Telefone extends Dispositivo {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const d1 = new Telefone("Iphone", "Rosé");
d1.ligar();
d1.ligar();
d1.desligar();
console.log(d1);