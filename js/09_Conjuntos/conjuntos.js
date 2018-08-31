//Set ó Conjuntos

var perros = new Set();

perros.add("Chihuahua");
perros.add("Bull-Dog");
perros.add("Bull-Terrier");

console.log(perros); //manada llamar los conjutos de datos 

console.log(perros.has("Chihuahua")); //valida que exista cierto dato 

/*
El objeto Set te permite almacenar valores únicos 
de cualquier tipo, incluso valores primitivos u objetos de referencia.
*/