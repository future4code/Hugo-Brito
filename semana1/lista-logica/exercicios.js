// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A

// function soma(num1, num2) {
//   const resultado = num1 + num2
//   return num1 + num2
// }

// console.log(soma(1, 2))

// // EXERCÍCIO 0B

// function imprimeMensagem() {
  
//   const mensagem = prompt('Digite uma mensagem')
//   console.log(mensagem)
// }

// imprimeMensagem()

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

// function calculaAreaRetangulo() {
  
//   const altura = Number(prompt('altura'))
  
//   const largura = Number(prompt('largura'))
  
//   console.log(altura * largura)
// }

// calculaAreaRetangulo()


// EXERCÍCIO 02

// function imprimeIdade() {
  
//   const anoAtual = Number(prompt('Digite o ano atual: '))
//   const anoDeNascimento = Number(prompt('Digite o ano do seu nascimento: '))
  
//   console.log(anoAtual - anoDeNascimento)

//  }

// imprimeIdade()

// EXERCÍCIO 03

// function calculaIMC(peso, altura) {
  
//   return peso / (altura * altura)
  
//   // IMC = Peso ÷ (Altura × Altura)

// }
// console.log(calculaIMC(85, 1.8))

// EXERCÍCIO 04

// function imprimeInformacoesUsuario() {

//   const nome = prompt('Digite seu nome :')
//   const idade = Number(prompt('Digite sua idade :'))
//   const email = prompt('Digite seu e-mail :')

//   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

//   // implemente sua lógica aqui
//   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

// }
// imprimeInformacoesUsuario()

// EXERCÍCIO 05

// function imprimeTresCoresFavoritas() {
  
//   const cor1 = prompt('Digite uma cor :')
//   const cor2 = prompt('Digite outra cor :')
//   const cor3 = prompt('Digite mais uma cor :')
  
//   const listaDeCores = [cor1, cor2, cor3]
//   console.log(listaDeCores)
  
  
  
  // implemente sua lógica aqui

// }

// imprimeTresCoresFavoritas()

// EXERCÍCIO 06

// function retornaStringEmMaiuscula(string) {


//   return string.toUpperCase()
  
  
  
  
//   // implemente sua lógica aqui

// }



// EXERCÍCIO 07

// function calculaIngressosEspetaculo(custo, valorIngresso) {
  

//   return custo / valorIngresso
  
  
  
  
//   // implemente sua lógica aqui

// }


// EXERCÍCIO 08

// function checaStringsMesmoTamanho(string1, string2) {
  
  

//   return (string1.length === string2.length)



  
  
//   // implemente sua lógica aqui

// }


// EXERCÍCIO 09

// function retornaPrimeiroElemento(array) {
  
  

//   return array[0]
  
  
  
//   // implemente sua lógica aqui

// }

// EXERCÍCIO 10


// function retornaUltimoElemento(array) {
  
//   return array[array.length - 1]


  
//   // implemente sua lógica aqui
//}

// EXERCÍCIO 11

// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui

//   const lista = array[0]
//   array[0] = array[array.length -1]
//   array[array.length -1] = lista

//   return array
// }

// EXERCÍCIO 12

// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//   // implemente sua lógica aqui

//   return string1.toUpperCase() === string2.toUpperCase()

// }

// EXERCÍCIO 13

// function checaRenovacaoRG() {
  // implemente sua lógica aqui

//   const anoAtual = Number(prompt('Digite o ano atual :'))
//   const anoDeNascimento = Number(prompt('Digite o ano do seu nascimento :'))
//   const anoDeEmissaoDaCarteira = Number(prompt('Digite o ano de emissão de sua carteira de identidade :'))

//   const pessoas1 = anoAtual - anoDeNascimento
//   const pessoas2 =  anoAtual - anoDeEmissaoDaCarteira
  
  

//   const resultFinal = (pessoas1 <= 20 && pessoas2 >= 5) || (pessoas1 > 20 && pessoas1 <= 50 && pessoas2 >= 10) || (pessoas1 > 50 && pessoas2 >= 15)

//   console.log(resultFinal)

// }
// checaRenovacaoRG()

// EXERCÍCIO 14

// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

//   const anoBi = ano % 400 === 0
//   const anoBi2 = ano % 4 === 0 && ! (ano % 100 === 0 && ! anoBi)

//   return anoBi2
  

// }

// EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   // implemente sua lógica aqui

// const pergunta1 = prompt('Você tem mais de 18 anos ?')
// const pergunta2 = prompt('Você possui ensino médio completo ?')
// const pergunta3 = prompt('Você possui disponibilidade exclusiva durante os horários do curso ?')

// const apto = (pergunta1.includes('sim') && pergunta2.includes('sim') && pergunta3.includes('sim'))
// console.log(apto)


// }