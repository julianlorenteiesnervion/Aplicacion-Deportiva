class Vista {
    constructor() {
        this.lista = document.getElementById('lista');
    }

    mostrarEquipos(array) {
        let divEquipos = document.createElement('div');
        divEquipos.id = 'listadoEquipos';

        array.forEach(equipo => {
            let equipoDiv = document.createElement("div");
            equipoDiv.className = 'infoEquipo';
            equipoDiv.innerHTML += `${equipo.nombre} <br> Ciudad: ${equipo.ciudad} <br> Estadio: ${equipo.estadio} <br> Número de jugadores en el equipo: <button id="modificarEquipo">Modificar</button><button id="eliminarEquipo">Eliminar</button><button id="verJugadores">Ver Jugadores</button>`;

            divEquipos.appendChild(equipoDiv);
        });
        document.body.appendChild(divEquipos);
    }

    mostrarJugadores(array) {
        let divJugadores = document.createElement('div');
        divJugadores.id = 'listadoJugadores';

        array.forEach(jugador => {
            let jugadorDiv = document.createElement("div");
            jugadorDiv.className = 'infoJugador';
            jugadorDiv.innerHTML += `${jugador.nombre} <br> Posición: ${jugador.posicion} <br> Año de nacimiento: ${jugador.annoNacimiento} <br> Equipo: ${jugador.equipo}<button id="modificarJugador">Modificar</button><button id="eliminarJugador">Eliminar</button>`;

            divJugadores.appendChild(jugadorDiv);
        });
        document.body.appendChild(divJugadores);
    }

}