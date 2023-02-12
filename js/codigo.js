function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
let jugador = 0
let numero = aleatorio(1, 100)
alert("Encuentra el numero del 1 al 100")
while (numero != jugador) {
    jugador = prompt("Elije un numero: ")
    if(jugador < numero) {
        alert("Elije un numero mas alto")
    } else if(jugador > numero) {
        alert("Elije un numero mas bajo")
    } else {
        alert("Ganaste, Felicidades")
    }
}
