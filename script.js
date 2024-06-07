//Escribe una función que reciba un array de números y devuelva true si el array contiene al menos un número par.
function arraypar(...array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            return`Existe un numero par ${array[i]}`
        }
    }
    return "No existe ningun numero par en el array"
  }
  
  console.log(arraypar(5,8,9,1))
  
  
  //Escribe una función que determine si un número es par o impar.
  const par = (numero) => {
      if (typeof numero !== "number")
        return console.log("Debes ingresar un numero");
    
      if (numero % 2 === 0) {
        return console.log(`El numero ${numero} es Par`);
      }
    
      if (numero % 2 !== 0) {
        return console.log(`El numero ${numero} es Impar`);
      }
    };
    par(4);
  
  //Escribe una función que determine si un año es bisiesto.
  const esBisiesto = (year) => {
      return (year % 400 === 0) ? true : 
                  (year % 100 === 0) ? false : 
                      year % 4 === 0;
    }
    console.log(esBisiesto(2000))
  
  //Escribe una función que encuentre el mayor de tres números.
  function mayor(){
      var m=[].slice.call(arguments);
      return m.sort(function(a,b){return a-b;}).pop();
  }
  console.log(mayor(9,5,12));
  
  //Escribe una función que invierta una cadena de texto.
  function invertirCadena(cad) {
      var nuevaCadena = "";
      for (var i = cad.length - 1; i >= 0; i--) {
          nuevaCadena += cad[i];
      }
      return nuevaCadena;
  }
  console.log(invertirCadena('cama'));
  
  //Escribe una función que calcule la suma de los primeros n números naturales.
  function sumadenumeros(x){
      var suma = 0
      for (var i=1; i<x; i++){
        if (i%2 == 0) {
          suma += i
        }
      }
      return suma
    }
    
  console.log(sumadenumeros(11))
  
  //Escribe una función que determine si una cadena de texto es un palíndromo.
  function palindromo(text) {
    const invertedText = text.split("").reverse().join("");
    if (text === invertedText) {
      console.log("es palindromo");
    } else {
      console.log("no es palindromo");
    };
  
  };
  
  palindromo("ama");
  
  //Escribe una función que encuentre el factorial de un número.
  function factorial(n) {
      return (n != 1) ? n * factorial(n - 1) : 1;
    }
    
    console.log( factorial(5) )
  //Escribe una función que encuentre el valor máximo en un arreglo de números.
  
  const numeros = [1, 2, 50, 30, 5, 6];
  let max = 0;
  for ( let numero of numeros ) {
    if (max < numero)
      max = numero;
  }
  console.log(max);
  
  //Escribe una función que encuentre el valor mínimo en un arreglo de números.
  const array = [5, 2, 50, 30, 5, 6];
  let min = 100;
  for ( let numero of array ) {
    if (min>numero)
      min = numero;
  }
  console.log(min);
  
  //Escribe una función que calcule la media de un arreglo de números.
  function media() {
    let total=0, res, numDatos, item;
    numDatos = arguments.length;
    for (item = 0; item < numDatos; item++)
      {
       total += arguments[item];
      }
    res = total/numDatos;
    return res;
  }
  console.log(media(2,5,8))
  
  