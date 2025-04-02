class Jugador {

    constructor(nombre, posicion, annoNacimiento, equipo) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.annoNacimiento = annoNacimiento;
        this.equipo = equipo;
    }

    getNombre() {
        return this.nombre;
    }

    getPosicion() {
        return this.posicion;
    }
    
    getannoNacimiento() {
        return this.annoNacimiento;
    }

    getEquipo() {
        return this.equipo;
    }

    setPosicion(posicion) {
        this.posicion = posicion;
    }

    setEquipo(equipo) {
        this.equipo = equipo;
    }

}