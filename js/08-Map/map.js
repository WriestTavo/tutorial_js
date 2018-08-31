//Map o Mapa

var car = new Map();

car.set("marca", "Ford");
car.set("nombre", "Focus");
car.set("color", "Rojo");

console.log(car); //nos  lanza el mapa completo
console.log(car.get("marca"));      //optener algunas propiedades de forma directa
console.log(car.has("marca"));      //Esto es para ver si exite y lanzara true o false 
console.log("Se eliminara marca apartir de aqui");

car.delete("marca");                // sirve para eliminar alguna propiedad del mapa
console.log(car.has("marca")); 
console.log(car);



/*
El objeto Map almacena pares clave/valor. 
Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.
*/


//Gustavo A. Soto ( WriestTavo )