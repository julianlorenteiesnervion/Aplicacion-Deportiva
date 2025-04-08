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
}