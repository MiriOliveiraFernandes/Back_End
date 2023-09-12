//var
/*Explicação: Funciona globalmente, ou seja, eu posso declarar a variavel em qualquer parte do meu código */
// o var no escopo do js ele é global, ele pode ser colocado em qualquer local do código
//var é vunerável
/* exemplo2 = 15

console.log(exemplo2)
console.log(typeof exemplo2)

var exemplo2 */

/*--------------------------------------------------------------------------------------------------------------- */

//let
/*Explicação: As variaveis let não podem ser usadas antes de serem declaradas, pois seu escopo não permite serem elevadas ao topo */
//ESCOPO: Modelo
// let é em bloco, por isso que a variavel não pode ser declarada depois
/* let exemplo3
exemplo3 = 70

console.log(exemplo3)
console.log(typeof exemplo3)
 */

/*--------------------------------------------------------------------------------------------------------------- */

//const

//Explicação: As declarações const não podem ser retribuidas após a atribuição e dever ser inicializada na mesma linha que foi declarada
// é a mais segura
//o const vc tem que declarar e incializar na mesma linha 


const status = "Aluno Aprovado!"
const nota1 = 7
const nota2 = 4

let aprovacao 

if (status === "Aluno Aprovado!") {
    aprovacao = nota1 + nota2
    console.log('Parabéns você foi aprovado')
    
}
