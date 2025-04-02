class ModeloEquipos {

    constructor() {
    }

    // Obtener todos los equipos de la lista
    obtenerEquipos() {
        return this.listaEquipos;
    }

    // Agregar un equipo a la lista
    agregarEquipo(equipo) {
        this.listaEquipos.push(equipo);
    }

    // Eliminar un equipo de la lista mediante su id
    eliminarEquipo(id) {
        this.listaEquipos = this.listaEquipos.filter(equipo => equipo.getId() !== id);
    }

}