
// ----------------Variables---------------------//

//alert('JavaScript funcionando correctamente');
let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = PI * 2;
const miNombre = 'Santiago';
const miNumeroFav = 19;
let booleano3 = true;
console.log(miNombre.length);
console.log(typeof miNumeroFav);
console.log('Mi nombre es ' + miNombre + ' y mi número favorito es ' + miNumeroFav + '.');

let yo = 'Seré un crack en JavaScript al terminar el bootcamp.';
let frase = yo.toUpperCase();
console.log(frase);

let crack = 'Hola soy un crack';
let corte = crack.substring(0, 5);
console.log(corte);
//Numero a String
conv = miNumeroFav.toString();
console.log(typeof conv);
//Concatenar template literal
let template = `Tengo ${miNumeroFav} años.`
console.log(template);
//PI 2 decimales
let pi = Math.PI;
console.log(pi);
let conversion;
conversion = pi.toString();
let final = conversion.substring(0, 4);
console.log(final);

// ----------------Arrays---------------------//
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arrayNumerosPares = [0, 2, 4, 6, 8];
arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ['Hola', 'Mundo'];
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
console.log(loGuardoTodo.length);
loGuardoTodo.push('buenas');
console.log(loGuardoTodo[5]);

let reves = arrayNumeros.reverse();
console.log(reves);
//mostrar 'que' de loGuardoTodo
console.log(loGuardoTodo[1]);
//Euralio
loGuardoTodo.push("Euralio");
console.log(loGuardoTodo[6]);

// ----------------Objetos---------------------//
//coche
let coche ={
    marca: 'Ford',
    modelo: 'Fiesta',
    matricula: 'CYX4Z',
};
console.log(coche);
//casa
let casa = {
    codPostal: '46022',
    calle: 'Navegante, 13',
    portal: '22',
    piso: '8',
};
//FSD
let FullStackdeveloper = {
    array_lenguajes: ['javascript', 'css', 'html'],
    array_proyectos: ['pagina personal', 'portfolio', 'trabajos']
};

let perro = {
    nombre: 'Pepe',
    raza: 'dalmata',
    color: 'blanco y negro',
    edad: '14',
};

let noticia = {
    titular: 'Vida social de un dessarrollador',
    cuerpo: 'nula',
};

let persona = {
    nombre: 'Santiago',
    apellido: 'Guevara',
    edad: '19',
};
console.log(persona.nombre);
//sacar java de FSD
console.log(FullStackdeveloper.array_lenguajes[0]);

let portatil = {
    marca: 'lenovo',
};
console.log(portatil.marca);

let concierto = {
    grupos: ['Beatles', 'Rolling Stones', 'Queen']
};
console.log(concierto.grupos[1]);

let led = {
    RGB: ['rojo', 'verde', 'azul']
};
console.log(led.RGB[0]);

let O_Error = {
    codigo: 'js6a'
};
console.log(O_Error.codigo);

let grupo = {
    integrantes: ['cantante', 'guitarrista', 'baterista', 'corista']
};
console.log(grupo.integrantes[1]);

let impresora = {
    tinta: {
        color1: 'rojo',
        color2: 'verde',
        color3: 'azul'
    }
};
let nivelesTinta = impresora.tinta.color2;
console.log(nivelesTinta);
console.log(`80% restante de ${nivelesTinta} en la impresora.`);
//movil
let movil = {
    especificaciones: 'Samsung galaxy S8'
};
let especificaciones = movil.especificaciones;
console.log(especificaciones);
//Portatil MSI
let objeto = {
    marca: 'j'
};
//modificar el valor de una propiedad de un objeto ya existente
portatil.marca = 'MSI';
console.log(portatil.marca);
//añadir a un objeto guns n roses
concierto.grupos.push("Guns N' Roses");
console.log(concierto.grupos[3]);
//fecha en concierto
concierto.fecha = '12/13';
concierto.fecha = newdate();
console.log(concierto.fecha);
//Grupo modifica


