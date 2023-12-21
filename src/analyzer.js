const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const textoLimpio = text.trim();
    const textoSeparado = textoLimpio.split(" ");
    const contarTexto = textoSeparado.length;
    return contarTexto;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const textoLimpio = text.trim();
    const contarCaracteres = textoLimpio.length;
    return contarCaracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    //1. Buscar como eliminar todos los espacios en blanco 2. Buscar como eliminar los signos de puntuación y 3. contar mis caracteres totales
    //const textoSinEspacios = text.replace(/\s+/g,'')

    /*Explicación de la expresión regular [^\w\s]:
      [^\w\s] significa "cualquier carácter que no sea una letra, número o espacio en blanco". 
      La función replace se utiliza para reemplazar esos caracteres con una cadena vacía, logrando así eliminarlos.*/

    const textoLimpio = text.trim();
    const textoSinCaracteresEspeciales = textoLimpio.replace(/[^\w\s]/gi, "");
    const textoSinEspacios = textoSinCaracteresEspeciales.replace(/\s+/g, "");
    const contarCaracteres = textoSinEspacios.length;
    console.log(textoSinEspacios);
    return contarCaracteres;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    //Separar las palabras, , obtener su longitud y sumarlas, dividirla por la cantidad de palabras existentes

    //1.
    const textoLimpio = text.trim();
    const textoSeparado = textoLimpio.split(" ");
    const cantidadDePalabras = textoSeparado.length;

    //2.
    let longitudPalabras = 0;

    for (let i = 0; i < cantidadDePalabras; i++) {
      longitudPalabras += textoSeparado[i].length;
    }

    //3.
    //Aquí se calcula el promedio
    const promedioLongitud = longitudPalabras / cantidadDePalabras;
    // console.log(promedioLongitud);

    //.toFixed es un metodo con el que puedo indicar cuantos decimales quiero mostrar
    const promedioLongitudDecimal = promedioLongitud.toFixed(2);
    typeof promedioLongitudDecimal;
    return parseFloat(promedioLongitudDecimal);
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let contarNumeros = 0;
    const textoLimpio = text.trim();
    const encontrarNumeros = textoLimpio.match(/\b\d+(\.\d+)?\b/g);
    if (encontrarNumeros) {
      contarNumeros = encontrarNumeros.length;
    }
    // console.log(contarNumeros);
    return contarNumeros;
    //Alternativas
    // const contarNumeros = encontrarNumeros.length || 0
    //const contarNumeros = (encontrarNumeros) ? (SE PREGUNTA SI ESTA ?) encontrarNumeros.length : (Los : hacen referencia a sino :) 0 *OPERADORES TERNARIOS*
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sumarNumeros = 0;
    const textoLimpio = text.trim();
    const encontrarNumeros = textoLimpio.match(/\b\d+(\.\d+)?\b/g);
    // console.log(encontrarNumeros);
    if (encontrarNumeros) {
      //for es un bucle, aquí abajo le estoy diciendo que recorra número a número que encuentre y que le de + 1 valor a cada uno
      for (let i = 0; i < encontrarNumeros.length; i++) {
        sumarNumeros += parseFloat(encontrarNumeros[i]);
        //parseInt es para transformar un string a un número entero
      }
      console.log(sumarNumeros);
    }
    return sumarNumeros;
  },
};

export default analyzer;
