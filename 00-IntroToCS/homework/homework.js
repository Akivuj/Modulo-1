"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;
  for (var i = 0; i < num.length; i++) {
    suma = suma + num[i] * Math.pow(2, num.length - 1 - i);
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var numero = "";
  while (num / 2 > 0) {
    numero = numero + (num % 2);
    num = Math.floor(num / 2);
  }
  return numero.split("").reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
