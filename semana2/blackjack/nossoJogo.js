/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Boas vindas ao jogo BlackJack')

if (confirm('Deseja iniciar uma nova rodada ?')) {

   let cardUser = [comprarCarta(), comprarCarta()]

   if (cardUser[0].valor && cardUser[1].valor === 11) {
      cardUser = [comprarCarta(), comprarCarta()]


   }
   let sumCardUser = cardUser[0].valor + cardUser[1].valor

   let cardPC = [comprarCarta(), comprarCarta()]

   if (cardPC[0].valor && cardPC[1].valor === 11) {
      cardPc = [comprarCarta(), comprarCarta()]

   }
   let sumCardPC = cardPC[0].valor + cardPC[1].valor

   console.log(`Usuaário - cartas: ${cardUser[0].texto} ${cardUser[1].valor} - pontuação ${sumCardUser}`)

   console.log(`Usuaário - cartas: ${cardPC[0].texto} ${cardPC[1].valor} - pontuação ${sumCardPC}`)

   if (sumCardUser > sumCardPC) {

      console.log('Usuário ganha')

   } else if (sumCardUser < sumCardPC) {

      console.log('Computador ganha')

   } else if (sumCardUser === sumCardPC) {

      console.log('Empate')

   } else {

      console.log('O jogo acabou')
   }
}