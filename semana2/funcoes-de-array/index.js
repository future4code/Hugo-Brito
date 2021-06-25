// --- Exercícios de interpretação de código ---

// # 1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)

//   })
 
// a) Será impresso no console o index de cada elemento, o nome e o do apelido de cada pessoa.

// # 2

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// a) Será impresso no console somente o nome das instrutoras, ??????????????.

// # 3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  // a) Será impresso no console os nomes e apelidos das instrutoras menos o da chijo, ??????????

  // --- Exercícios de escrita de código ---


//   const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 //a) 

//  const soDoguinhos = pets.map ((item) => {

//     return item.nome

//  })
//  console.log(soDoguinhos)

// b)

// const soDogSalsicha = pets.filter ((pet) =>{

//     return pet.raca === 'Salsicha'
// })

// console.log(soDogSalsicha)

// c)

// const clientesPoodles = pets.filter((item) =>{

//     return item.raca === 'Poodle'

// }).map((item) => {

//     return "Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome
    
//     })
// console.log(clientesPoodles)

// # 2


const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
    
    // a) 

    // const nomeDeCadaItem = produtos.map ((item) => {

    //     return item.nome
    // })

    // console.log(nomeDeCadaItem)

    // b)

    // const precoObjeto = produtos.map((item,index, array) => {

    //     const valor = 5 / 100
    //     const desconto = item.preco * valor
    //     const novoObjeto = {
            
    //         nome: item.nome, preco: desconto

    //     }
    //     return novoObjeto

    // }) 

    // console.log(precoObjeto)

    // c)

    // const objetosBebidas = produtos.filter ((item) => {

    //     return item.categoria === 'Bebidas'
    // })

    // console.log(objetosBebidas)


    // d)

    // const objetosYpe = produtos.filter((item) =>{

    //     return item.nome.includes('Ypê')

    // })

    // console.log(objetosYpe)

    // // e)

    //     let nomePreco = objetosYpe.map((novo) => {


    //         console.log(`Compre ${novo.nome} por ${novo.preco}`)
    //     })
        
    
    // Desafio

    // # 1

    // const pokemons = [
    //     { nome: "Bulbasaur", tipo: "grama" },
    //     { nome: "Bellsprout", tipo: "grama" },
    //     { nome: "Charmander", tipo: "fogo" },
    //     { nome: "Vulpix", tipo: "fogo" },
    //     { nome: "Squirtle", tipo: "água" },
    //     { nome: "Psyduck", tipo: "água" },
    //  ]


     // a)

    //  const ordemAlfabetica = pokemons.map((novo) =>{

    //         return novo.nome


    //  })

    //  console.log(ordemAlfabetica.sort())
    
     // b)

     
