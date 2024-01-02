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

    const textoLimpio = text.trim();
    const textoSinCaracteresEspeciales = textoLimpio.replace(/[^\w\s]/gi, "");
    const textoSinEspacios = textoSinCaracteresEspeciales.replace(/\s+/g, "");
    const contarCaracteres = textoSinEspacios.length;
    return contarCaracteres;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

    const textoLimpio = text.trim();
    const textoSeparado = textoLimpio.split(" ");
    const cantidadDePalabras = textoSeparado.length;

    let longitudPalabras = 0;

    for (let i = 0; i < cantidadDePalabras; i++) {
      longitudPalabras += textoSeparado[i].length;
    }

    const promedioLongitud = longitudPalabras / cantidadDePalabras;

    const promedioLongitudDecimal = promedioLongitud.toFixed(2);
    typeof promedioLongitudDecimal;
    return parseFloat(promedioLongitudDecimal);
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let contarNumeros = 0;
    const textoLimpio = text.trim();
    const textoSeparado = textoLimpio.split(" ");
    for (let i = 0; i < textoSeparado.length; i++) {
      if (Number(textoSeparado[i])) {
        contarNumeros++;
      }
    }
    return contarNumeros;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sumarNumeros = 0;
    const textoLimpio = text.trim();
    const encontrarNumeros = textoLimpio.match(/\b\d+(\.\d+)?\b/g);
    if (encontrarNumeros) {
      for (let i = 0; i < encontrarNumeros.length; i++) {
        sumarNumeros += parseFloat(encontrarNumeros[i]);
      }
    }
    sumarNumeros = parseFloat(sumarNumeros.toFixed(2));
    return sumarNumeros;
  },
};

export default analyzer;
