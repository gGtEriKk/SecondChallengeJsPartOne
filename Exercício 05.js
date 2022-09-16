/*
    Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve
    imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/

const firstCandidate = {
    name: 'Rafael Silva',
    age: 17,
    genre: 'Male',
    profession: 'Estudante e Jovem Aprendiz',
    nationality: 'Brasileira'
}

const secondCandidate = {
    name: 'Juan Pablo',
    age: 35,
    genre: 'Male',
    profession: 'Engenheiro',
    nationality: 'Argentina'
}

const thirdCandidate = {
    name: 'Mayara Santos',
    age: 18,
    genre: 'Female',
    profession: 'Estudante',
    nationality: 'Brasileira'
}

const fourthCandidate = {
    name: 'Sabrina Gonzáles',
    age: 16,
    genre: 'Female',
    profession: 'Estudante',
    nationality: 'Espanhola'
}

const fifthCandidate = {
    name: 'João Almeida',
    age: 28,
    genre: 'Male',
    profession: 'Técnico em Manutenção',
    nationality: 'Brasileira'
}

if(fifthCandidate.age >= 18 && fifthCandidate.nationality === 'Brasileira'){
    console.log('Você passou!')
}

else {
    console.log('Você não passou.')
}