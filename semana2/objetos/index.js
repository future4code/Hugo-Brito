// --- Exercícios de interpretação de código ---

// #1

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) 1 - Será impresso no console o nome do ator Mateus N. que é o indice [0];
//    2 - Será impresso no console o nomr da atriz Denise Fraga, com numeração de 12 com espaço ou 11 sem espaço
//    3 - Será impresso no console Globo 14h

// #2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) 1 - O nome de Juca, a idade 3 anos e a raça SRD
//    2 - O nome de Juba, a idade 3 anos e a raça SRD
//    3 - O nome de Juco, a idade 3 anos e a raça SRD

// b) Faz com que o conteúdo anterior seja replicado e utilizado pela nova constante.

// #3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) 1 - Será impresso no console false
//    2 - Será impresso no console undefined/null

// b) O valor de false foi devido ao fato da confirmação do objeto denominado backender;
//    e a altura undefined/null porque ela não existe como objeto;

// --- Exercícios de interpretação de código ---

// #1

// a)

    // const person = {
    //     name: "Rambo",
    //     nickName: ["Killer" , "Rampage" , "Slasher"]

    // }
    
    //  const funcao = (person) => {
       
    //     console.log(`Hi i am ${person.name}, but just call me: ${person.nickName[0]}, ${person.nickName[1]} or ${person.nickName[2]}`)

    // }

    // funcao(person)
//

// b)

    // const otherPerson =  {...person, nickName: ["Strong" , "Faster", "Crazy"]}

    // console.log(otherPerson)

// #2


// const info2 = {

//     Nome2: "Waldisney",
//     Idade2: "69",
//     Profissão2: "Motorista"
// }


// const funcao = (xuxa2) => {

// console.log(`${xuxa2.Nome2}, ${xuxa2.Nome2.length}, ${xuxa2.Idade2}, ${xuxa2.Profissão2}, ${xuxa2.Profissão2.length}`)

// }

// funcao(info2)


// const info1 = {

//     Nome: "João",
//     Idade: "51",
//     Profissao: 'Piloto',
// }

// const funcao = (xuxa) => {


// console.log(`${xuxa.Nome}, ${xuxa.Nome.length}, ${xuxa.Idade}, ${xuxa.Profissao}, ${xuxa.Profissao.length}`)



// }

// funcao(info1)


// #3

// const carrinho = [] 

// const objeto1 = {

//     nome: 'banana',
//     disponibilidade: true

// }

// const objeto2 = {

//     nome: 'kiwi',
//     disponibilidade: true

// }

// const objeto3 = {

//     nome: 'laranja',
//     disponibilidade: true

// }

// function carrinhoPronto(fruta) {

//     carrinho.push(fruta)

// }

// carrinhoPronto(objeto1)
// carrinhoPronto(objeto2)
// carrinhoPronto(objeto3)

// console.log(carrinho)



// Desafio

// function user1() {

//     const nome =  prompt('Digite seu nome: ')
//     const idade = Number(prompt('Digite sua idade: '))
//     const profissao = prompt('Digite sua profissão: ')
    
//     const objeto = {

//         nome: nome,
//         idade: idade,
//         profissao: profissao

//     }
    
//     console.log(objeto)
// }

// user1()

// #2

// function movies() {

//     const movie1 = {

//         anoDeLancamento: 2021,
//         nomeDoFilme: "Barbie"

//     }

//     const movie2 = {

//         anoDeLancamento: 2018,
//         nomeDoFilme: "Tarzan"

//     }

//     const comparacao = movie1.anoDeLancamento < movie2.anoDeLancamento
//     const comparacao2 = movie1.anoDeLancamento === movie2.anoDeLancamento

//     console.log(comparacao)
//     console.log(comparacao2)  
// }

// movies()

// #3

// const carrinho = [] 

// const objeto1 = {

//     nome: 'banana',
//     disponibilidade: true

// }

// const objeto2 = {

//     nome: 'kiwi',
//     disponibilidade: true

// }

// const objeto3 = {

//     nome: 'laranja',
//     disponibilidade: true

// }

// function carrinhoPronto(fruta) {

//     carrinho.push(fruta)

// }

// carrinhoPronto(objeto1)
// carrinhoPronto(objeto2)
// carrinhoPronto(objeto3)

// console.log(carrinho)


// const controleEstoque = (fruta) => {
     
//     const fruta2 = {...objeto3, disponibilidade: false}
//     console.log(fruta2)

    
// }
// controleEstoque()
    



































   
  
    
    