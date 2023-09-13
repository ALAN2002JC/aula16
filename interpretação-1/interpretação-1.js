// Leia o código

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza?
//este codigo pede ao usuario para digitar um número. Este número é armazenado no (respostaDoUsuario)
//nisso ele verifica se o número é par e divisivel por 2. Se for par e divisivel por 2 ele imprime 'passou no teste', se não imprime 'não passou no teste'



// b) Para que tipos de números ele imprime no console "Passou no teste"?
//numeros pares e que não deixa resto


// c) Para que tipos de números a mensagem é "Não passou no teste"?
//para números impares e numeros que quando dividir por dois sobra