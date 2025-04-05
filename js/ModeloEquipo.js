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
        this.obtenerDeLocalStorage();
        // Verifica si el equipo ya existe en la lista
        // Si no existe, lo agrega
        if (!this.listaEquipos.some(e => e.id === equipo.id)) {
            this.listaEquipos.push(equipo);
            this.subirALocalStorage();
        }
    }

    // Eliminar un equipo de la lista mediante su id
    eliminarEquipo(id) {
        this.obtenerDeLocalStorage();
        // Filtra la lista de equipos para eliminar el equipo con el id especificado
        this.listaEquipos = this.listaEquipos.filter(equipo => equipo.id !== id);
        this.subirALocalStorage();
    }

    // Carga en el array listaEquipos los equipos que hay en el localStorage
    // Si no hay nada en el localStorage, se carga un array vacío
    obtenerDeLocalStorage() {
        this.listaEquipos = JSON.parse(localStorage.getItem('equipos')) || [];
    }

    // Sube la lista de equipos al localStorage
    // Se utiliza después de agregar o eliminar un equipo
    subirALocalStorage() {
        localStorage.setItem('equipos', JSON.stringify(this.listaEquipos));
    }

}