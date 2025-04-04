class Vista {
    constructor() {
        this.listaEquipos = document.getElementById("listadoEquipos");
        this.listaJugadores = document.getElementById("listadoJugadores");
    }

    mostrarEquipos() {
        listaEquipos.innerHTML = ""; 
        modeloEquipo.obtenerEquipos().forEach(equipo => {
            let equipoDiv = document.createElement("div");
            equipoDiv.innerHTML += `<p>Nombre: ${equipo.nombre} <br> Ciudad: ${equipo.ciudad} <br> Estadio: ${equipo.estadio}</p>`;
            equipoDiv.innerHTML += `<label for="nombreJugador">Nombre: </label>
                <input type="text" id="nombreJugador">
                <label for="posicion">Posición: </label>
                <input type="text" id="posicion">
                <label for="añoNacimiento">Año de nacimiento: </label>
                <input type="number" id="añoNacimiento">
                <button id="botonJugador">Añadir jugador</button>`;
            listaEquipos.appendChild(equipoDiv);
        });
    }

    mostrarJugadores() {
        listaJugadores.innerHTML = "";
        modeloJugador.obtenerJugadores().forEach(jugador => {
            let jugadorDiv = document.createElement("div");
            jugadorDiv.innerHTML += `Nombre del jugador: ${jugador.nombre} <br> Posición: ${jugador.posicion} <button id="modificarPosicion">Modificar</button> <br> Año de nacimiento: ${jugador.añoNacimiento}`;
            jugadorDiv.innerHTML += `<button id="modificarEquipo">Añadir equipo</button>`
            jugadorDiv.innerHTML += `<button id="eliminarJugador">Eliminar jugador</button>`;

            listaJugadores.appendChild(jugadorDiv);
        });
    }

    mostrarPartidos() {
        
    }
}