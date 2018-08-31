//destructiring assignment - asignacion de destructuracion

var animales = new Array("Perro", "Gato", "Raton")

//Sin destructiring

/*
var perro = animales[0];
var gato = animales[1];
var raton = animales[2];
*/

//con destructiring
var[perro, gato, raton] = animales


console .log(perro, gato, raton)

/*
destructiring sirve para estructurar el codigo de una forma mas
limpia en vez de colocar varias lineas de codigo se coloca
una sola en la que se simplifica el codigo.
*/