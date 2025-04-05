class ModeloJugador {

    constructor() {
        this.listaJugadores = [];
    }

    // Obtener todos los jugadores de la lista
    obtenerJugadores() {
        return localStorage.getItem('jugadores') ? JSON.parse(localStorage.getItem('jugadores')) : this.listaJugadores;
    }

    // Agregar un jugador a la lista
    agregarJugador(jugador) {
        if (!this.listaJugadores.some(j => j.getId() === jugador.getId())) {
            this.listaJugadores.push(jugador);
            this.agregarALocalStorage();
        }
    }

    // Eliminar un jugador de la lista mediante su id
    eliminarJugador(id) {
        this.listaJugadores = this.listaJugadores.filter(jugador => jugador.getId() !== id);
        this.eliminarDelLocalStorage(id);
    }

    // Actualiza la posición de un jugador mediante su id
    actualizarPosicionJugador(id, nuevaPosicion) {
        const jugador = this.listaJugadores.find(jugador => jugador.getId() === id);
        if (jugador) {
            jugador.setPosicion(nuevaPosicion);
        }
    }

    // Actualiza el equipo de un jugador mediante su id
    actualizarEquipoJugador(id, nuevoEquipo) {
        const jugador = this.listaJugadores.find(jugador => jugador.getId() === id);
        if (jugador) {
            jugador.setEquipo(nuevoEquipo);
        }
    }

    // Obtener los jugadores que pertenecen a X equipo
    obtenerJugadoresPorEquipo(equipo) {
        return this.listaJugadores.filter(jugador => jugador.getEquipo() === equipo);
    }

    // Obtener los jugadores que pertenecen a X posición
    obtenerJugadoresPorPosicion(posicion) {
        return this.listaJugadores.filter(jugador => jugador.getPosicion() === posicion);
    }

    // Agregar al localStorage los jugadores actuales
    agregarALocalStorage() {
        const jugadoresExistentes = localStorage.getItem('jugadores') ? JSON.parse(localStorage.getItem('jugadores')) : [];
        const jugadoresActualizados = jugadoresExistentes.concat(
            this.listaJugadores.filter(nuevoJugador => 
            !jugadoresExistentes.some(jugadorExistente => jugadorExistente.id === nuevoJugador.id)
            )
        );
        localStorage.setItem('jugadores', JSON.stringify(jugadoresActualizados));
    }

    // Elimina del localStorage el jugador según su id
    eliminarDelLocalStorage(id) {
        const jugadoresExistentes = localStorage.getItem('jugadores') ? JSON.parse(localStorage.getItem('jugadores')) : [];
        const jugadoresActualizados = jugadoresExistentes.filter(jugador => jugador.id !== id);
        localStorage.setItem('jugadores', JSON.stringify(jugadoresActualizados));
    }

}