//Você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso custar menos de 15 reais.
  
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
 
 // Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(".

 const filme = prompt('qual o gênero de filme que vocês querem assistir?')
 const ingresso = Number(prompt('qual é o preço do ingresso'))

 if (filme === 'fantasia' && ingresso < 15){
    console.log('Bom filme!')

 }
 else{
    console.log('escolhe outro filme')
 }