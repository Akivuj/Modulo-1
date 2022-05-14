"use strict";
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree() {
  this.value = arguments[0];
  this.left = null;
  this.right = null;

  BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value) {
      if (this.left === null) {
        var newTree = new BinarySearchTree(value);
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        var newTree = new BinarySearchTree(value);
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    }
  };

  BinarySearchTree.prototype.contains = function (value) {
    if (this.value === null) {
      return false;
    } else if (value === this.value) {
      return true;
    } else if (value < this.value && this.left) {
      return this.left.contains(value);
    } else if (value > this.value && this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  };

  BinarySearchTree.prototype.depthFirstForEach = function (cb, texto) {
    if (!texto || texto === "in-order") {
      if (this.left) {
        this.left.depthFirstForEach(cb, texto);
      }
      cb(this.value);
      if (this.right) {
        this.right.depthFirstForEach(cb, texto);
      }
    } else if (texto === "pre-order") {
      cb(this.value);
      if (this.left) {
        this.left.depthFirstForEach(cb, texto);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb, texto);
      }
    } else if (texto === "post-order") {
      if (this.left) {
        this.left.depthFirstForEach(cb, texto);
      }
      if (this.right) {
        this.right.depthFirstForEach(cb, texto);
      }
      cb(this.value);
    }
  };

  BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
    if (!array) {
      array = [];
    }
    if (this.left) {
      array.push(this.left);
    }
    if (this.right) {
      array.push(this.right);
    }
    cb(this.value);
    if (array.length > 0) {
      array.shift().breadthFirstForEach(cb, array);
    }
  };

  BinarySearchTree.prototype.size = function () {
    if (this.value === null) {
      return 0;
    } else if (this.left === null && this.right === null) {
      return 1;
    } else if (this.left === null) {
      return 1 + this.right.size();
    } else if (this.right === null) {
      return 1 + this.left.size();
    } else {
      return 1 + this.left.size() + this.right.size();
    }
  };
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
