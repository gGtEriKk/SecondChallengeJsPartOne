/*
    Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
*/

/*const maxNumber = Math.max(1, 12, 35)
const minNumber = Math.min(41, 12, 6)

console.log(`O maior número é: ${maxNumber} e o menor número é: ${minNumber}`)*/

// Outra forma:

const firstNumber = 0
const secondNumber = 51
const thirdNumber = 7

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log(`${firstNumber} é o maior número`)
} else if(secondNumber > thirdNumber){
    console.log(`${secondNumber} é o maior número`)
} else{
    console.log(`${thirdNumber} é o maior número`)
}

if(firstNumber < secondNumber && firstNumber < thirdNumber){
    console.log(`${firstNumber} é o menor número`)
} else if(secondNumber < thirdNumber){
    console.log(`${secondNumber} é o menor número`)
} else{
    console.log(`${thirdNumber} é o menor número`)
}