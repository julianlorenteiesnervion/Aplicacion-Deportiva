class Controlador {

    constructor() {
        this.modeloEquipo = new ModeloEquipo();
        this.modeloJugador = new ModeloJugador();
        this.vista = new Vista();
    }

    /* Funciones para mostrar los menús */
    mostrarMenuInicio() {
        this.vista.mostrarMenuInicio();
    }

    mostrarMenuEquipos() {
        this.vista.mostrarMenuEquipos();
        this.mostrarEquipos();
    }

    mostrarMenuJugadores() {
        this.vista.mostrarMenuJugadores();
        this.mostrarJugadores();
    }

    /* Funciones para manejar los equipos */
    agregarEquipo(nombre, ciudad, estadio) {
        let equipo = new Equipo(Number(this.modeloEquipo.obtenerUltimaId()) + 1, nombre, ciudad, estadio);
        this.modeloEquipo.agregarEquipo(equipo);
        this.mostrarEquipos();
    }
      
    eliminarEquipo(id) {
        this.modeloEquipo.eliminarEquipo(id);
        this.mostrarEquipos();
    }

    mostrarEquipos() {
        this.vista.mostrarEquipos(this.modeloEquipo.obtenerEquipos());
    }
    
    /* Funciones para manejar los jugadores */
    mostrarJugadores() {
        this.vista.mostrarJugadores(this.modeloJugador.obtenerJugadores());
    }

    agregarJugador(nombre, posicion, annoNacimiento, equipo) {
        let jugador = new Jugador(Number(this.modeloJugador.obtenerUltimaId()) + 1, nombre, posicion, annoNacimiento, equipo);
        this.modeloJugador.agregarJugador(jugador);
        this.mostrarJugadores();
    }

    eliminarJugador(id) {
        this.modeloJugador.eliminarJugador(id);
        this.mostrarJugadores();
    }

    actualizarPosicionJugador(id, nuevaPosicion) {  
        this.modeloJugador.actualizarPosicion(id, nuevaPosicion);
        this.mostrarJugadores();
    }

    /* Filtrado de datos */
    aplicarFiltros() {
        const idEquipo = document.getElementById('filtroEquipo').value;
        const posicion = document.getElementById('filtroPosicion').value.trim();
    
        let jugadoresFiltrados = this.modeloJugador.obtenerJugadores(); // Empezamos con todos
    
        if (idEquipo !== "") {
            jugadoresFiltrados = this.modeloJugador.obtenerJugadoresPorEquipo(Number(idEquipo));
        }
    
        if (posicion !== "") {
            jugadoresFiltrados = jugadoresFiltrados.filter(jugador => jugador.getPosicion() === posicion);
        }
    
        this.vista.mostrarJugadores(jugadoresFiltrados);
        cerrarModalFiltro();
    }
}