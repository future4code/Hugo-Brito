````

let n = 0
 for(i = 0; i < arrayDeNumeros.length; i++){
	if(arrayDeNumeros[i] === numeroEscolhido){n++}
} 
if(n>0)
	return "O número " + numeroEscolhido + " aparece " + n + "x"
else
	return "Número não encontrado"

```