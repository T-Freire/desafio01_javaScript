/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

alert('Insira dos números para realizar as operações')

let numberUm = Math.round(Number(prompt ('Insira o primeiro número: ')));
let numberTwo = Math.round(Number(prompt ('Insira o segundo número: ')));

alert('O resultado da soma é ' + (numberUm + numberTwo));
alert('O resultado da subtração é ' + (numberUm - numberTwo));
alert('O resultado da multiplicação é ' + (numberUm * numberTwo));
alert('O resultado da divisão é ' + (numberUm / numberTwo));
alert('O resultado do resto da divisão é ' + (numberUm % numberTwo));

let evenOrOdd = numberUm % numberTwo;


if (numberUm === numberTwo) {
    alert('Os número inseridos são iguais')
} else {
    alert ('Os número inseridos são diferentes')
}

if (evenOrOdd === 0) {
    alert ('Os números são pares')
} else {
    alert('Os número são ímpares')
}