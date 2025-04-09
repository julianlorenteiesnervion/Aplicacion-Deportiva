class Vista {

    constructor() {
        
    }

    mostrarEquipos(equipos) {
        const lista = document.getElementById('lista');

        lista.innerHTML = ""; // Limpiar la lista antes de mostrar los equipos

        equipos.forEach(equipo => {
            lista.innerHTML += `<li>${equipo.getId()} - ${equipo.getNombre()} - ${equipo.getCiudad()} - ${equipo.getEstadio()}</li>`;    
        });
    }

    mostrarMenuEquipos() {
        const menu = document.getElementById('menu_drch');
        menu.innerHTML = `<div id="menu_añadir_equipo">
            </div>
            <h3>Listado de equipos</h3>
            <ul id="lista">
            </ul>`;
    }
}