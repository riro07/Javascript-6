//////////////////////////////////------------ Symbols -------------////////////////////////////////////////

// Dato Primitivo
/*
let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id, id2);
console.log(typeof(id), typeof id2);

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
    [NOMBRE]: "Gabi",
    edad: 35
};
console.log(persona);

persona.NOMBRE = "Gabriel Mendoza";
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function (){
    console.log("Hola");
}

console.log(persona);
persona[SALUDAR]();

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}

console.log(Object.getOwnPropertySymbols(persona));
*/

//////////////////////////////////////----------- Sets ------------/////////////////////////////////////////
// Guarda en un array especial datos, y si se repiten los elimina, los ignora(parece array, pero no es).
// Valor complejo

/*
const set = new Set([1,2,3,3,4,5,true,false,false,"HOla","hola",{},{}]);

console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Recorriendo set");
for (item of set){
    console.log(item);
}

console.log("Recorriendo set2");
set2.forEach(item=>console.log(item));

console.log(set[0]);

// Convirtiendo el set a un arreglo

let newSet = Array.from(set);
console.log(newSet[0]);
console.log(newSet[7]);

// Elimina si esta ese dato
set.delete("hola");
console.log(set);

//comprueba si existe ese dato
console.log(set.has("HOla"))

set2.clear();
console.log(set2)
*/
////////////////////////////////////////--------- Maps ----------///////////////////////////////////////
// parece un objeto, pero no lo es.
// valor complejo

/*
const mapa = new Map();
mapa.set("nombre", "Gabi");
mapa.set("apellido", "Mendoza");
mapa.set("edad", 24);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Gabriel Mendoza");
console.log(mapa.get("nombre"));
mapa.delete("apellido");
console.log(mapa);

mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});
console.log(mapa);

for(let[key, value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
    ["nombre", "Titan"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"]
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
*/

////////////////////////////-------------- WeakSets & WeakMaps ---------------///////////////////////////






