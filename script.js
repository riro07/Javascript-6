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

// const ws = new WeakSet([1,2,3,3,4,5,true,false,false,"HOla","hola",{},{}])
/*
const ws = new WeakSet();

let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};

ws.add(valor1);
ws.add(valor2);

console.log(ws)

console.log(ws.has(valor1));
console.log(ws.has(valor2));

ws.add(valor3);
console.log(ws);


ws.delete(valor2);
console.log(ws);

ws.add(valor2);
console.log(ws);

setInterval(()=>console.log(ws),1000);

setTimeout(()=>{
    valor1 = null;
    valor2 = null;
    valor3 = null;
},3000);
*/
/*
const wm = new WeakMap([
    ["nombre", "Titan"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"]
]);
*/
/*
const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3));

console.log(wm.get(llave1));
console.log(wm.get(llave2));
console.log(wm.get(llave3));

wm.delete(llave2)
console.log(wm);

wm.set(llave2, 2);
wm.set(llave3, 3);
console.log(wm);

setInterval(()=>console.log(wm), 1000);

setTimeout(()=>{
    llave1=null;
    llave2=null;
    llave3=null;
}, 3000);
*/

//////////////////////////---------------- Iterables & Iterators ---------------////////////////////////

/*
const iterable = [1,2,3,4,5];
// const iterable = "Hola mundo";
// const iterable = new Set([1,2,3,4,5]);
// const iterable = new Map([["nombre","Gabi"], ["edad", 24]]);

// Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();
}
*/

//////////////////////////////--------------- Generators ---------------///////////////////////////////

/*
function* iterable(){
    yield "hola";
    console.log("Hola consola");
    yield "hola2";
    console.log("Seguimos con más instrucciones de nuestro código");
    yield "hola3";
    yield "hola4";
};

let iterador = iterable();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for(let y of iterador){
    console.log(y);
}

console.log("----------------------")
let arr = [...iterable()];
console.log(arr);


console.log("----------------------")
function cuadrado(valor){
    setTimeout(()=>{
    return console.log({valor, resultado:valor*valor})
    }, Math.random()*1000);
}

function* generador(){
    console.log("Inicia Generador");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generador");
}

let gen = generador();

for(let y of gen){
    console.log(y);
}
*/

//////////////////////////////////------------ Proxies ------------/////////////////////////////////
/*
const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set(obj, prop, valor){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad "${prop}" no existe en el objeto persona.`);
        }

        if(
            (prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        ){
            return console.error(`La propiedad "${prop}" sólo hacepta letras y espacios en blanco`);
        }

        obj[prop] = valor;
    }
}

const gabi = new Proxy(persona, manejador);

gabi.nombre = "Gabriel";
gabi.apellido = "Mendoza";
gabi.edad = 24;
gabi.instagram = "gabidev07"
console.log(gabi);

console.log(persona);
*/

///////////////////-------------  Propiedades Dinámicas de los Objetos ----------///////////////////
// Sirve para recibir grandes cantidades de datos
/*
const numeroAleatorio = Math.round(Math.random()*100 + 5);

// Propiedades dinamicas
const objUsuarios = {
    propiedad: "Valor",
    [`id_${numeroAleatorio}`]:"Usuario Aleatorio"
};
console.log(objUsuarios);

const usuarios = ["Gabriel", "Roberto", "Analia", "Jorge", "Antonio", "Marcos", "Maria"];

                                            // Propiedad dinamica
usuarios.forEach((usuario, index)=>objUsuarios[`id_${index}`] = usuario);
console.log(objUsuarios);
*/

////////////////////////////////--------------- this ---------------//////////////////////////////////

console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";
console.log(this.nombre);
console.log(window.nombre);
console.log(nombre);

function imprimir(){
    console.log(this.nombre);
}
imprimir();

const obj = {
    nombre: "Contexto Objeto",
    imprimir: function (){
        console.log(this.nombre);
    }
};
obj.imprimir();

// Aca se puede ver como imprime la funcion declarada en el ambito global en el obj2. Este utiliza 
// la funcion pero toma el ambito(this) del obj2. 
const obj2 = {
    nombre: "Contexto Objeto 2",
    imprimir
};
obj2.imprimir();

// Aca se puede apreciar como el this es referenciado al contexto global al usar una arrow function
const obj3 = {
    nombre: "Contexto Objeto 3",
    imprimir: () => {
        console.log(this.nombre);
    }
};
obj3.imprimir();


// Caso 1: Da como return el this de la funcion prototipica Persona
// function Persona(nombre){
//     this.nombre = nombre;
// 
//     return console.log(this.nombre);
// }
// let gabi = new Persona("Gabriel");

// Caso 2: Da como return el this del contexto global
function Persona(nombre){
    this.nombre = nombre;

    // return console.log(this.nombre);
    return function(){
        console.log(this.nombre);
    };
};

let gabi = new Persona("Gabriel");
gabi();
