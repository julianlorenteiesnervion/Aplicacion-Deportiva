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

    mostrarMenuJugadores() {
        const menu = document.getElementById('menu_drch');

        document.title = "FutManager - Jugadores";

        menu.innerHTML = `<div id="menu_añadir_jugador">
                <input type="text" id="nombre_jugador" placeholder="Jugador...">
                <input type="text" id="nombre_posicion" placeholder="Posición...">
                <input type="text" id="anno_nacimiento" placeholder="Año de nacimiento...">
                <input type="text" id="id_equipo" placeholder="ID del equipo...">
                <button onclick="controller.agregarJugador(
                    document.getElementById('nombre_jugador').value,
                    document.getElementById('nombre_posicion').value,
                    document.getElementById('anno_nacimiento').value,
                    document.getElementById('id_equipo').value
                )">Agregar</button>
            </div>
            <h3>Listado de jugadores</h3>
            <ul id="lista"></ul>`;
    }
}