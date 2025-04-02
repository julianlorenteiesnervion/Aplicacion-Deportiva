class Equipo {

    constructor(nombre, ciudad, estadio) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.estadio = estadio;
    }

    getNombre() {
        return this.nombre;
    }

    getCiudad() {
        return this.ciudad;
    }

    getEstadio() {
        return this.estadio;
    }
    
}