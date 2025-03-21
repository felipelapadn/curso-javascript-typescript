function teste() {
    console.log("Meu teste...");
}

class Controle {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    aumentarVolume() {
        this.volume += 10;
    }

    dimVolume() {
        this.volume -= 10;
    }

    static trocaPilha() {
        console.log("Ok, trocando...");
    }
}

const c1 = new Controle("LG");
Controle.trocaPilha();
