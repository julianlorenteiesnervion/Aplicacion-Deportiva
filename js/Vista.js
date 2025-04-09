class Vista {

    constructor() {
        
    }

    mostrarEquipos(equipos) {
        const lista = document.getElementById('listaEquipos');

        lista.innerHTML = ""; // Limpiar la lista antes de mostrar los equipos

        equipos.forEach(equipo => {
            lista.innerHTML += `<li>${equipo.getId()} - ${equipo.getNombre()} - ${equipo.getCiudad()} - ${equipo.getEstadio()}</li>`;    
        });
    }
}