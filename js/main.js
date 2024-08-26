function obtenerEleccionComputadora() {
    const opcionesMaquina = ["piedra", "papel", "tijeras"];
    const eleccionAleatoria = Math.floor(Math.random() * 3);
    return opcionesMaquina[eleccionAleatoria];
}


const eleccionComputadora = obtenerEleccionComputadora();

function determinarGanador(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        return "Es un empate!";
    } else if (
        (eleccionUsuario === "tijeras" && eleccionComputadora === "papel") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras")
    ) {
        return "¡Ganaste! :)";
    } else {
        return "Perdiste :(";
    }
}

function jugarPiedraPapelTijeras() {
    
    const eleccionUsuario = prompt("Elegi entre: piedra, papel o tijeras").toLowerCase();

    
    if (eleccionUsuario !== "piedra" && eleccionUsuario !== "papel" && eleccionUsuario !== "tijeras") {
        alert("Opcion invalida. Tenes que elegir entre piedra, papel o tijeras.");
        return jugarPiedraPapelTijeras();
    }

    
    const eleccionComputadora = obtenerEleccionComputadora();

    const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);
    alert("Elegiste: " + eleccionUsuario + "\nLa computadora eligio: " + eleccionComputadora + "\n" + resultado);
    
    let queresjugar = confirm("¿Queres jugar de nuevo?")
    if(queresjugar === true){
    jugarPiedraPapelTijeras();
}

}


jugarPiedraPapelTijeras();


