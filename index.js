const fs = require('fs');

const arquivo = fs.readFileSync('C:/Users/athos/OneDrive/Documentos/arquivo.txt', 'utf-8');
const linhas = arquivo.split('\n');

// const data = linhas[0].slice(143, 151);
const dia = linhas[0].slice(143, 145);
const mes = linhas[0].slice(145, 147);
const ano = linhas[0].slice(147, 151);
// const valor = linhas[4].slice(18, 28);
// const preco = linhas[4].slice(18,26);
// const centavos = linhas[4].slice(26, 28);
const preco = linhas[2].slice(86, 98);
const centavos = linhas[2].slice(98, 100);

const diaVencimento = linhas[2].slice(77, 79);
const mesVencimento = linhas[2].slice(79, 81);
const anoVencimento = linhas[2].slice(81, 85);

const nomePagador = linhas[3].slice(33, 73)

// console.log(`Data: ${data}`);
// console.log(`Valores: ${valor}`);
console.log(`${dia}/${mes}/${ano}`);
console.log(`R$ ${preco},${centavos}`)

const dados = `Nome do Pagador: ${nomePagador}\nData de Geração: ${dia}/${mes}/${ano}\nData de Vencimento: ${diaVencimento}/${mesVencimento}/${anoVencimento}\nValor: R$ ${preco},${centavos}`;

fs.writeFileSync('C:/Users/athos/OneDrive/Documentos/saida.txt', dados);