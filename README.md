# Registro de entregas

Execute `node principal.js` na pasta do projeto. O programa usa apenas módulos nativos do Node.js.

- `bloco.js` valida os dados e calcula o hash SHA-256 de cada bloco.
- `blockchain.js` encadeia os blocos e verifica os hashes e vínculos.
- `principal.js` demonstra três cadastros, uma entrada recusada e a detecção de uma entrega alterada.

O registro fica em memória. A verificação detecta alterações que quebram a consistência da cadeia. Se alguém puder reescrever os blocos e recalcular todos os hashes, é necessária uma referência externa confiável para detectar a reescrita.
