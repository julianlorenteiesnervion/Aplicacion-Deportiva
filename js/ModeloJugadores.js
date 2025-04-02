class ModeloJugadores {

    constructor() {
    }

    // Obtener todos los jugadores de la lista
    obtenerJugadores() {
        return this.listaJugadores;
    }

    // Agregar un jugador a la lista
    agregarJugador(jugador) {
        localStorage.setItem('jugadores', localStorage.getItem('jugadores') + JSON.stringify(jugador));
    }

    // Eliminar un jugador de la lista mediante su id
    eliminarJugador(id) {
        this.listaJugadores = this.listaJugadores.filter(jugador => jugador.getId() !== id);
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

}