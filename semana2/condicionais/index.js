//  --- Exercícios de interpretação de código ---

// # 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Ao rodar o código, imprime-se uma pergunta para o usuário testar um número, assim esse número é dividido por 2 e o resto dele se for igual a 0, o numeral passa no teste, se for diferente de zero não passa no teste.

// b) Para números que possuam o resto igual a zero

// c) Para números que possuem o resto diferente de zero.


// # 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Quando o código é rodado, pergunta-se para o usuário para escolher uma fruta e depois é mostrado a ele o valor da fruto que escolheu.

// b) O valor impresso é: "O Preço da fruta, maçã, é R$ 2,25"

// c) O valor impresso seria: "O preço da fruta, Pêra, é R$ 5"


// # 3


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) A primeira linha esta pedindo que o usuário digite um número, e esse número sera convertido para numero devido ao fato de ter "Number" antes de prompt, se não seria convertido em texto.

// b) A mensagem que aparecria no terminal seria True/Verdadeiro, e caso o usuário digita-se -10 não iria retornar nada, pois o valor condicionado só recebe os valores maiores que zero.

// c) Sim, pois o "console.log" deveria estar dentro da função para ser executado de forma correto, assim se for movido para dentro da mesma, não haverá erro no console.


// --- Exercícios de escrita de código ---

// # 1

    // a) +  b) + c) :
    
     // const idadeDoUsuario = Number(prompt('Digite sua idade: '))

    // if(idadeDoUsuario >= 18){
    //     console.log('Você pode dirigir!')

    // }else{
    //     console.log('Você não pode dirigir!')
    // }

// # 2

// const turnoDeEstudo = prompt('Digite o turno que você estuda: ')


// if(turnoDeEstudo === 'm'){
//     console.log('Bom dia')

// }else if(turnoDeEstudo === 'v'){
//     console.log('Boa tarde')

// }else if(turnoDeEstudo === 'n'){
//     console.log('Boa noite')
// }

// # 3

// const turnoDeEstudo = prompt('Digite o turno que você estuda: ')

// switch (turnoDeEstudo){
   
//     case 'm':
//         console.log('Bom Dia')
//         break
//     case 'v':
//         console.log('Boa Tarde')
//         break
//     case 'n':
//         console.log('Boa Noite')
//         break
    
// default:
//     console.log('Não compreendo o que você disse!')

// }


// # 4

// const filmeGenero = prompt('Qual gênero de filme vão assisitr ?').toLowerCase()

// const filmeValorIngresso = Number(prompt ('Qual o valor do ingresso ?'))

// if(filmeGenero === 'fantasia' && filmeValorIngresso <= 15){
    
//     console.log('Bom filme!')

// }else{
     
//     console.log('Escolha outro filme :( ')
// }


// --- Challenge ---

// # 1

// const filmeGenero = prompt('Qual gênero de filme vão assisitr ?').toLowerCase()

// const filmeValorIngresso = Number(prompt ('Qual o valor do ingresso ?'))


// if(filmeGenero === 'fantasia' && filmeValorIngresso <= 15){

//     const lanche = prompt('Qual larica você vai comer ?')
    
//     console.log(`Bom filme! E aproveite seu ${lanche}`)

// }else{
     
//     console.log('Escolha outro filme :( ')

// }

// Ou

// const filmeGenero = prompt('Qual gênero de filme vão assisitr ?').toLowerCase().includes('fantasia')

// const filmeValorIngresso = Number(prompt ('Qual o valor do ingresso ?')) < 15


// if(filmeGenero && filmeValorIngresso){

//     const lanche = prompt('Qual larica você vai comer ?')
    
//     console.log(`Bom filme! E aproveite seu ${lanche}`)

// }else{
     
//     console.log('Escolha outro filme :( ')

// }


// # 2


