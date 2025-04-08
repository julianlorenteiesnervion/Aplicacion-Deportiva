class Vista {

    mostrarEquipos() {
        let divEquipos = document.createElement('div');
        divEquipos.id = 'listadoEquipos';

        modeloEquipo.obtenerEquipos().forEach(equipo => {
            let equipoDiv = document.createElement("div");
            equipoDiv.className = 'infoEquipo';
            equipoDiv.innerHTML += `${equipo.nombre} <br> Ciudad: ${equipo.ciudad} <br> Estadio: ${equipo.estadio} <br> Número de jugadores en el equipo: `;
            equipoDiv.innerHTML += `<button id="modificarEquipo">Modificar</button>`;
            equipoDiv.innerHTML += `<button id="eliminarEquipo">Eliminar</button>`;
            equipoDiv.innerHTML += `<button id="verJugadores">Ver Jugadores</button>`;

            divEquipos.appendChild(equipoDiv);
        });
        document.body.appendChild(divEquipos);
    }

    mostrarJugadores() {
        let divJugadores = document.createElement('div');
        divJugadores.id = 'listadoJugadores';

        modeloEquipo.obtenerJugadores().forEach(equipo => {
            let jugadorDiv = document.createElement("div");
            jugadorDiv.className = 'infoJugador';
            jugadorDiv.innerHTML += `${equipo.nombre} <br> Ciudad: ${equipo.ciudad} <br> Estadio: ${equipo.estadio}`;
            jugadorDiv.innerHTML += `<button id="modificarEquipo">Modificar</button>`;
            jugadorDiv.innerHTML += `<button id="eliminarEquipo">Eliminar</button>`;

            divJugadores.appendChild(jugadorDiv);
        });
        document.body.appendChild(divJugadores);
    }

    mostrarPartidos() {
        let divPartidos = document.createElement('div');
        divPartidos.id = 'listadoPartidos';

        modeloEquipo.obtenerPartidos().forEach(partido => {
            let partidoDiv = document.createElement("div");
            partidoDiv.className = 'infoPartido';
            partidoDiv.innerHTML += `${partido.puntosEquipo1} ${partido.equipo1} vs ${partido.equipo2} ${partido.puntosEquipo2} <br> Fecha: ${partido.fecha}}`;

            divPartidos.appendChild(partidoDiv);
        });
        document.body.appendChild(divPartidos);
    }
}