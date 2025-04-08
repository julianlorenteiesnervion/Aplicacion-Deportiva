class Controlador{
    constructor(modeloJugador, modeloEquipo, vistaJugador, vistaEquipo, entidadJugador, entidadEquipo){
        this.modeloJugador = modeloJugador;
        this.modeloEquipo = modeloEquipo;
        this.vistaJugador = vistaJugador;
        this.vistaEquipo = vistaEquipo;
        this.entidadJugador = new Jugador();
        this.entidadEquipo = new Equipo();
    }

    inicializar(){
        this.vistaJugador.formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            this.añadirJugador();
        });

        this.vistaJugador.listaJugadores.addEventListener("click", (e) => {
            if (e.target.classList.contains("botonEliminar")) {
                const jugadorID = parseInt(e.target.getAttribute("data-id"));
                this.eliminarJugador(jugadorID);
            }
        });

        this.vistaEquipo.formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            this.añadirEquipo();
        });

        this.vistaEquipo.listaEquipos.addEventListener("click", (e) => {
            if (e.target.classList.contains("botonEliminar")) {
                const equipoID = parseInt(e.target.getAttribute("data-id"));
                this.eliminarEquipo(equipoID);
            }
        });
    }

    añadirJugador(){
        const jugador = this.vistaJugador.obtenerDatosJugador();
        if (jugador) {
            this.modeloJugador.agregarJugador(jugador.nombre, jugador.posicion, jugador.equipo);
            this.vistaJugador.limpiarCampos();
            this.actualizarVistaJugadores();
        }
    }

    añadirEquipo(){
        const equipo = this.vistaEquipo.obtenerDatosEquipo();
        if (equipo) {
            this.modeloEquipo.agregarEquipo(equipo.nombre, equipo.jugadores);
            this.vistaEquipo.limpiarCampos();
            this.actualizarVistaEquipos();
        }
    }

    eliminarJugador(id){
        this.modeloJugador.eliminarJugador(id);
        this.actualizarVistaJugadores();
    }

    eliminarEquipo(id){
        this.modeloEquipo.eliminarEquipo(id);
        this.actualizarVistaEquipos();
    }

    actualizarJugador(id){
        this.modeloJugador.actualizarJugador(id);
        this.actualizarVistaJugadores();
    }

    actualizarEquipo(id){
        this.modeloEquipo.actualizarEquipo(id);
        this.actualizarVistaEquipos();
    }

    actualizarVistaJugadores(){
        const jugadores = this.modeloJugador.obtenerJugadores();
        this.vistaJugador.cargarJugadores(jugadores);
    }
    actualizarVistaEquipos(){
        const equipos = this.modeloEquipo.obtenerEquipos();
        this.vistaEquipo.cargarEquipos(equipos);
    }
}

const modeloJugador = new ModeloJugador();
const modeloEquipo = new ModeloEquipo();
const vistaJugador = new VistaJugador();
const vistaEquipo = new VistaEquipo();
const entidadJugador = new Jugador();
const entidadEquipo = new Equipo();
const controlador = new Controlador(modeloJugador, modeloEquipo, vistaJugador, vistaEquipo, entidadJugador, entidadEquipo);