const Blockchain = require('./blockchain');

function imprimirCadeia(cadeia) {
    for (const bloco of cadeia) {
        console.log(`[${bloco.indice}] ${bloco.dados} | Hash ${bloco.hash.slice(0, 10)}…`);
    }
}

const registro = new Blockchain();

registro.adicionar('Entrega E-001 para Ji-Paraná: em rota');
registro.adicionar('Entrega E-002 para Porto Velho: entregue');
registro.adicionar('Entrega E-003 para Ariquemes: aguardando coleta');

imprimirCadeia(registro.cadeia);
console.log('Cadeia válida?', registro.ehValida());

try {
    registro.adicionar('AB');
} catch (erro) {
    console.log('Cadastro recusado:', erro.message);
}

registro.cadeia[1].dados = 'Entrega E-001 para Ji-Paraná: entregue';
console.log('Cadeia válida após a adulteração?', registro.ehValida());
