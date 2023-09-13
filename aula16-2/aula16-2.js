//atividade 2

//Faça um programa que verifica o turno do dia de um aluno estudantil.

//Peça para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos if/else if/else.

const aluno = prompt('qual turno você estuda digite (M matutino, V para Vespertino ou N para Noturno):')
const turno = (aluno)

if(turno === 'M'){
console.log('Bom dia!!')
}
else if (turno === 'V'){
console.log('Boa tarde!!')
}
else if (turno === 'N'){
console.log('Boa noite!!')
}