//--- Exercícios de interpretação de código ---

// #1

// let array
// console.log('a. ', array)

// Irá retornar "a" undefined no console pois a variável está vazio

// array = null
// console.log('b. ', array)

// Irá retornar "b" como null no console pois agora o array está desginado em null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// Irá retornar "c" contando a quantidade de números no console que é 11

// let i = 0
// console.log('d. ', array[i])

// Irá retornar o primeiro item da lista do array

// array[i+1] = 19
// console.log('e. ', array)

// Array no indice 1 recebe novo valor que é 19

// const valor = array[i+6]
// console.log('f. ', valor)

// O array assume a posição do indice 9, recebendo o valor 12

// # 2

// const frase = prompt("Subi num ônibus em Marrocos?")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
 
// Será impressa no console a frase da seguinte forma: "SUBA NUM ÔNABUS EM MIRROCOS"
// e contar o numero de letras que será 28


// Exercícios de escrita de código

// #1

// const nome = prompt("Digite seu nome")
// const email = prompt('Digite seu e-mail')

// console.log(`email ${email} cadastrado com sucesso, Bem vindo ${nome}`)

// #2

// let array = ['hamburger', 'pizza', 'coxinha', 'torresmo', 'bacon']

// console.log(array)

// console.log(`Essas são as minhas comidas preferidas: 
// ${array[0]}
// ${array[1]}
// ${array[2]}
// ${array[3]}
// ${array[4]}`)

// let comidaUsuario = prompt('Qual a sua comida preferida?')
// console.log('comida favorita' , array[comidaUsuario-1])

// array[1] = comidaUsuario
// console.log('Lista atual de comidas favoritas' , array)

// #3

// let listaDeTarefa = []

// const tarefa1 = prompt('Qual a sua primeira tarefa de hoje?')
// const tarefa2 = prompt('Qual a sua segunda tarefa de hoje?')
// const tarefa3 = prompt('Qual a sua terceira tarefa de hoje?')

// console.log(listaDeTarefa)

// listaDeTarefa.push(tarefa1, tarefa2, tarefa3)

// console.log(listaDeTarefa)

// const tarefaRealizada = Number(prompt('Você já realizou uma delas, 1, 2 ou 3?')) -1

// listaDeTarefa.splice(tarefaRealizada, 1)

// console.log(listaDeTarefa)





// Desafio

// #1

// let frase = prompt("Diga uma frase legal:")

// let semEspaco = frase.trim().split('')

// console.log (semEspaco)

// #2

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// const alteraFrutas = frutas.indexOf('Abacaxi')

// console.log('A palavra Abacaxi está no indice', alteraFrutas , 'O Tamanho da Array é', frutas.length)


























