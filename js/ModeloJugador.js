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
        this.obtenerDeLocalStorage();
        // Verifica si el jugador ya existe en la lista
        // Si no existe, lo agrega
        if (!this.listaJugadores.some(j => j.id === jugador.id)) {
            this.listaJugadores.push(jugador);
            this.subirALocalStorage();
        }
    }

    // Eliminar un jugador de la lista mediante su id
    eliminarJugador(id) {
        this.obtenerDeLocalStorage();
        // Filtra la lista de jugadores para eliminar el jugador con el id especificado
        this.listaJugadores = this.listaJugadores.filter(jugador => jugador.id !== id);
        this.subirALocalStorage();
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

    // Carga en el array listaJugadores los jugadores que hay en el localStorage
    // Si no hay nada en el localStorage, se carga un array vacío
    obtenerDeLocalStorage() {
        this.listaJugadores = JSON.parse(localStorage.getItem('jugadores')) || [];
    }

    // Sube la lista de jugadores al localStorage
    // Se utiliza después de agregar o eliminar un jugador
    subirALocalStorage() {
        localStorage.setItem('jugadores', JSON.stringify(this.listaJugadores));
    }

}