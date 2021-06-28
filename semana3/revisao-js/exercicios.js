// EXERCÍCIO 01
function inverteArray(array) {

  array [0, 8, 23, 16, 10, 15, 41, 12, 13]

  array2 = []

 for(let i = array.length -1; i >= 0; i--){

    array2.push(array[i])  
 }

 return array2

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  
  array2 = []

  for(let i=0; i < array.length; i++){

     if(array[i] % 2 === 0){
      
      array2.push(array[i] **2)
      
     }
  }
  return array2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  array2 = []

  for(let i=0; i < array.length; i++){

     if(array[i] % 2 === 0){
      
      array2.push(array[i])
      
     }
  }
  return array2
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let maiorNumero = 0

  for(const i of array) {

    if(i > maiorNumero){
      maiorNumero = i
    }
  }
  return maiorNumero
}



// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {


 return array.length

  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3

  const letraA = booleano1 && booleano2 && !booleano4
  const LetraB = (booleano1 && booleano2) || !booleano3
  const letraC = (booleano2 || booleano3) && (booleano4 || booleano1)
  const letraD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const letraE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  const respostas = [letraA, LetraB, letraC, letraD, letraE]

  return respostas

}

 

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  const numberN = []

  let numberX = 0
  let i = 0
  while(i <i){

    i++
    numberN.push(numberX)
    numberX += 2
  }
  return numberN


}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
