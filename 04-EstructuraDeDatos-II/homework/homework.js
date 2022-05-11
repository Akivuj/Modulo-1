"use strict";
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this._length = 0;
  this.head = null;
  this.add = function (value) {
    var node = new Node(value);
    var current = this.head;
    if (!current) {
      this.head = node;
      this._length++;
      return node;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
  };
  this.remove = function () {
    if (!this.head) {
      return this.head;
    }
    if (!this.head.next) {
      var ultimo = this.head.value;
      this.head = null;
      return ultimo;
    }
    let previous = this.head;
    let tail = this.head.next;
    while (tail.next) {
      previous = tail;
      tail = tail.next;
    }
    previous.next = null;
    return tail.value;
  };
  this.search = function (value) {
    var current = this.head; // Initialize current
    while (current) {
      if (typeof value === "function" && true === value(current.value)) {
        return current.value;
      }
      if (current.value === value) {
        return current.value; // data found
      }
      current = current.next;
    }
    return current; // data not found
  };
}

function Node(value) {
  this.value = value;
  this.next = null;
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo.
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta.
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.hash = function (clave) {
    let suma = 0;
    for (let i = 0; i < clave.length; i++) {
      suma = suma + clave.charCodeAt(i);
    }
    return suma % 35;
  };
  this.set = function (clave, valor) {
    if (typeof clave === "string") {
      let indice = this.hash(clave);
      if (!this[indice]) {
        this[indice] = {};
      }
      this[indice][clave] = valor;
    } else {
      return TypeError.message("Keys must be strings");
    }
  };
  this.get = function (clave) {
    let indice = this.hash(clave);
    return this[indice][clave];
  };
  this.hasKey = function (clave) {
    let indice = this.hash(clave);
    if (this[indice][clave]) {
      return true;
    } else {
      return false;
    }
  };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
