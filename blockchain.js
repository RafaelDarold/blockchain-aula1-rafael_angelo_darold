const Bloco = require('./bloco');

class Blockchain {
    constructor() {
        this.cadeia = [new Bloco(0, 'Bloco gênese', '0')];
    }

    adicionar(dados) {
        const ultimo = this.cadeia[this.cadeia.length - 1];
        const bloco = new Bloco(this.cadeia.length, dados, ultimo.hash);
        this.cadeia.push(bloco);
    }

    ehValida() {
        const genese = this.cadeia[0];
        if (!genese || genese.indice !== 0 || genese.hashAnterior !== '0'
            || genese.hash !== genese.calcularHash()) {
            return false;
        }

        for (let indice = 1; indice < this.cadeia.length; indice++) {
            const atual = this.cadeia[indice];
            const anterior = this.cadeia[indice - 1];
            if (!atual || atual.indice !== indice
                || atual.hash !== atual.calcularHash() || atual.hashAnterior !== anterior.hash) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Blockchain;
