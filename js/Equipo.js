class Equipo {

    // Constructor de la clase Equipo que inicializa los atributos del equipo
    constructor(id, nombre, ciudad, estadio, eliminado = false) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.estadio = estadio;
        this.eliminado = eliminado; // Indica si el equipo ha sido eliminado
    }

    // Devuelve el id del equipo
    getId() {
        return this.id;
    }

    // Devuelve el nombre del equipo
    getNombre() {
        return this.nombre;
    }

    // Devuelve la ciudad del equipo
    getCiudad() {
        return this.ciudad;
    }

    // Devuelve el estadio del equipo
    getEstadio() {
        return this.estadio;
    }

    // Devuelve si el equipo ha sido eliminado
    getEliminado() {
        return this.eliminado;
    }

    // Establece el estado de eliminado del equipo
    setEliminado(eliminado) {
        this.eliminado = eliminado;
    }

}