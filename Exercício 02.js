/*
    Faça um programa que verifica se uma pessoa é brasileira ou não. OBS.: DEVE SER UM OBJETO
*/

const firstPerson = {
    name: 'Manoel Gomes Caneta Azul',
    age: 45,
    genre: 'Male',
    birthDate: '10/05/1977',
    nationality: 'Brasileira'
}

const secondPerson = {
    name: 'Naruto Uzumaki',
    age: 20,
    genre: 'Male',
    birthDate: '14/07/2002',
    nationality:'Japonesa'
}

if(firstPerson.nationality === 'Brasileira'){
    console.log('É brasileira')
}   else{
        console.log('É estrangeira')
}