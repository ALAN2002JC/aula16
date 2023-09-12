
//Faça um programa que ergunta ao usuário a sua idade e imprima no console se ela/e pode dirigir (apenas maiores de idade).

//a) Faça um promptpara receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável seja do tipo Number.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

const respostadoUsuario = Number(prompt('qual sua idade?'))
const numero = Number(respostadoUsuario)

if(numero >= 18){
    console.log('você tem permição para dirigir, agora só falta a habilitação')
}

else{
    console.log('não tem permição! aguarte ser maior de idade')
}