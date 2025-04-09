class Controlador {

    constructor() {
        this.modeloEquipo = new ModeloEquipo();
        this.modeloJugador = new ModeloJugador();
        this.vista = new Vista();
    }

    agregarEquipo(nombre, ciudad, estadio) {
        let equipo = new Equipo(this.modeloEquipo.obtenerUltimaId() + 1, nombre, ciudad, estadio);
        this.modeloEquipo.agregarEquipo(equipo);
        this.vista.mostrarEquipos(this.modeloEquipo.obtenerEquipos());
    }

    mostrarMenuEquipos() {
        this.vista.mostrarMenuEquipos();
      
    eliminarEquipo(id) {
        this.modeloEquipo.eliminarEquipo(id);
        this.vista.mostrarEquipos(this.modeloEquipo.obtenerEquipos());
    }
    agregarJugador(nombre, posicion, annoNacimiento, equipo) {
        let jugador = new Jugador(this.modeloJugador.obtenerUltimaId() + 1, nombre, posicion, annoNacimiento, equipo);
        this.modeloJugador.agregarJugador(jugador);
        this.vista.mostrarJugadores(this.modeloJugador.obtenerJugadores());
    }

    eliminarJugador(id) {
        this.modeloJugador.eliminarJugador(id);
        this.vista.mostrarJugadores(this.modeloJugador.obtenerJugadores());
    }

    actualizarPosicionJugador(id, nuevaPosicion) {  
        this.modeloJugador.actualizarPosicion(id, nuevaPosicion);
        this.vista.mostrarJugadores(this.modeloJugador.obtenerJugadores());
    }
}