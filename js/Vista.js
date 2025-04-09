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

    mostrarMenuInicio() {
        const menu = document.getElementById('menu_drch');

        document.title = "FutManager - Inicio";

        menu.innerHTML = `<h1>Bienvenido,</h1>
            <h3>aquí tienes algunas estadísticas</h3>`;
    }

    mostrarMenuEquipos() {
        const menu = document.getElementById('menu_drch');

        document.title = "FutManager - Equipos";

        menu.innerHTML = `<div id="menu_añadir_equipo">
                <input type="text" id="nombre_equipo" placeholder="Equipo...">
                <input type="text" id="nombre_ciudad" placeholder="Ciudad...">
                <input type="text" id="nombre_estadio" placeholder="Estadio...">
                <button onclick="controller.agregarEquipo(
                    document.getElementById('nombre_equipo').value,
                    document.getElementById('nombre_ciudad').value,
                    document.getElementById('nombre_estadio').value
                )">Agregar</button>
            </div>
            <h3>Listado de equipos</h3>
            <ul id="lista"></ul>`;
    }
}