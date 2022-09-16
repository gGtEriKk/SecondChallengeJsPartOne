/*
    Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada 
    nota deve conter uma mensagem diferente.
*/

const judgeNote = 10

switch (judgeNote) {
    case 0:
        console.log('Uma aberração. Sem comentários!')
        break;
    case 1:
        console.log('Horroroso, não dou zero por pena.')
        break;
    case 2:
        console.log('Horrível, mas pelo menos não é uma aberração.')
        break;
    case 3:
        console.log('Ruim, mas deu pra ver.')
        break;
    case 4:
        console.log('Não foi bom, mas foi um pouco agradável.')
        break;
    case 5:
        console.log('Mediano, mas precisa melhorar')
        break;
    case 6:
        console.log('Bom, porém dá pra melhorar. Tem talento.')  
        break;
    case 7:
        console.log('Legal, está acima da média.')  
        break;
    case 8:
        console.log('Ótimo, muito boa a execução, parabéns!')
        break;
    case 9:
        console.log('Parabéns, maravilhosa apresentação. Por um detalhe não tira nota máxima!')   
        break;
    case 10:
        console.log('Maravilhoso, parabéns. Perfeito!!!')
}