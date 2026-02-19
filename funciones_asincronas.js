console.log("Inicio")
setTimeout(function suma() {
    console.log(2 * 3)
}, 2000)

console.log("Fin")

function saludar(nombre, callback) {
    console.log("Hola " + nombre)
    callback(nombre)
}
saludar("Juan", function (nombre) {
    console.log("Adiós! " + nombre);
});

function suma(a, b, callback) {
    console.log(a + b)
    callback(a, b)
}
suma(2, 2, function (a, b) {
    console.log(a - b)
})

/*let nombre
nombre = "pedro"
console.log(nombre)*/

function nombre(texto) {
    console.log(texto)
}
nombre("juan")

const promesa = new Promise((resolve, reject) => {
    let exito = true;
    if (exito) {
        resolve("Operación exitosa");
    } else {
        reject("Ocurrió un error");
    }
});
promesa
    .then(res => console.log(res))
    .catch(err => console.log(err));//forma corta de ejecutar una promesa

function obtenerDatos() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Datos recibidos"), 2000);
    });
}

async function mostrarDatos() {
    try {
        const datos = await obtenerDatos();
        console.log(datos);
    } catch (error) {
        console.error(error);
    }//otra forma de ejecutar una promesa
}
mostrarDatos();