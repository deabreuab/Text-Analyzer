import analyzer from "./analyzer.js";
console.log(analyzer.getAverageWordLength("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const userInput = document.querySelector('textarea[name="user-input"]');
const resetButton = document.getElementById("reset-button");
console.log(resetButton);

userInput.addEventListener("input", function () {
  const cantidadDePalabras = analyzer.getWordCount(userInput.value)
  document.querySelector('li[data-testid="word-count"]').innerHTML = "Cantidad de palabras: " + cantidadDePalabras

  const cantidadDeCaracteres = analyzer.getCharacterCount(userInput.value)
  document.querySelector('li[data-testid="character-count"]').innerHTML = "Cantidad de letras: " + cantidadDeCaracteres

  const cantidadDeNumeros = analyzer.getNumberCount(userInput.value)
  document.querySelector('li[data-testid="number-count"]').innerHTML = "Cantidad de números: " + cantidadDeNumeros

  const sumaDeNumeros = analyzer.getNumberSum(userInput.value)
  document.querySelector('li[data-testid="number-sum"]').innerHTML = "Suma total de los números: " + sumaDeNumeros

  const longiutdPromedio = analyzer.getAverageWordLength(userInput.value)
  document.querySelector('li[data-testid="word-length-average"]').innerHTML = "Promedio de longitud de palabras: " + longiutdPromedio

  const textoSinEspacios = analyzer.getCharacterCountExcludingSpaces(userInput.value)
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerHTML = "Cantidad de caracteres sin espacios: " + textoSinEspacios
});

function limpiar() {
  userInput.value = "";
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerHTML = "Cantidad de caracteres sin espacios: 0"
  document.querySelector('li[data-testid="word-length-average"]').innerHTML = "Promedio de longitud de palabras: 0"
  document.querySelector('li[data-testid="number-sum"]').innerHTML = "Suma total de los números: 0"
  document.querySelector('li[data-testid="number-count"]').innerHTML = "Cantidad de números: 0"
  document.querySelector('li[data-testid="character-count"]').innerHTML = "Cantidad de letras: 0"
  document.querySelector('li[data-testid="word-count"]').innerHTML = "Cantidad de palabras: 0"
}

resetButton.addEventListener("click", limpiar);
