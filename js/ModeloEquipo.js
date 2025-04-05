class ModeloEquipo {

    constructor() {
        this.listaEquipos = [];
    }

    // Obtener todos los equipos de la lista
    obtenerEquipos() {
        return localStorage.getItem('equipos') ? JSON.parse(localStorage.getItem('equipos')) : this.listaEquipos;
    }

    // Agregar un equipo a la lista
    agregarEquipo(equipo) {
        if (!this.listaEquipos.some(e => e.id === equipo.id)) {
            this.listaEquipos.push(equipo);
            this.agregarALocalStorage();
        }
    }

    // Eliminar un equipo de la lista mediante su id
    eliminarEquipo(id) {
        this.listaEquipos = this.listaEquipos.filter(equipo => equipo.getId() !== id);
        this.eliminarDelLocalStorage(id);
    }

    // Agrega al localStorage los equipos actuales
    agregarALocalStorage() {
        const equiposExistentes = localStorage.getItem('equipos') ? JSON.parse(localStorage.getItem('equipos')) : [];
        const equiposActualizados = equiposExistentes.concat(
            this.listaEquipos.filter(nuevoEquipo => 
            !equiposExistentes.some(equipoExistente => equipoExistente.id === nuevoEquipo.id)
            )
        );
        localStorage.setItem('equipos', JSON.stringify(equiposActualizados));
    }

    // Elimina del localStorage el equipo según su id
    eliminarDelLocalStorage(id) {
        const equiposExistentes = localStorage.getItem('equipos') ? JSON.parse(localStorage.getItem('equipos')) : [];
        const equiposActualizados = equiposExistentes.filter(equipo => equipo.id !== id);
        localStorage.setItem('equipos', JSON.stringify(equiposActualizados));
    }

}