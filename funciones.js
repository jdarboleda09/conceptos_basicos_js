function suma(a,b){
    return a + b
}
console.log(suma(1,2))

function texto(){
    console.log("Soy Juan")
}
texto()

function separarPalabras(){

    let mensaje = "Hola Soy Juan David Arboleda Grisales"
    const palabra = mensaje.split(" ")
    for(let i = 0; i < palabra.length; i++){
        console.log("Palabra", i + 1, "=", palabra[i])
    }

}
separarPalabras()



