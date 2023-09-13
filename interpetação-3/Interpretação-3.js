// Leia o código

const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
	console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo?
// Esta pedindo para o usuario 'digitar o primeiro numero'

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//se colocar 10 aparecerá (esse numero passou no teste) se colocar -10 não vai aparecer nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//terá um erro no console pq a variavel 'mensagem' esta dentro do IF, e só funciona apenas dentro desse bloco e quando tentar acessar  
//fora do bloco, vai dar erro  porque a variavel 'mensagem' nao acessa fora do bloco do if.