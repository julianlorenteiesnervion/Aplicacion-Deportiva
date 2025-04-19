class Vista {

    // Mostrar cada equipo con su información y cada uno tiene dos botones para modificar y eliminar
    mostrarEquipos(equipos) {
        const lista = document.getElementById('lista');

        lista.innerHTML = ""; // Limpiar la lista antes de mostrar los equipos

        equipos.forEach(equipo => {
            lista.innerHTML += `
            <li>
            <span class="id">${equipo.getId()}</span><br>
              <span class="nombre">${equipo.getNombre()}</span><br>
              <span class="info">Ciudad: ${equipo.getCiudad()}</span><br>
              <span class="info">Estadio: ${equipo.getEstadio()}</span>
              <div class="button-group"><button onclick="controller.modificarEquipo(${equipo.getId()})" class="modificar">Modificar</button>
              <button onclick="controller.eliminarEquipo(${equipo.getId()})" class="eliminar">Eliminar</button></div>
            </li>`;
        });
    }

    // Mostrar el menú de inicio dandole la bienvenida al usuario
    mostrarJugadores(jugadores) {
        const lista = document.getElementById('lista');

        lista.innerHTML = ""; // Limpiar la lista antes de mostrar los jugadores

        jugadores.forEach(jugador => {
            lista.innerHTML += `
            <li>
              <span class="id">${jugador.getId()}</span><br>
              <span class="nombre">${jugador.getNombre()}</span><br>
              <span class="info">Posición: ${jugador.getPosicion()}</span><br>
              <span class="info">Año de nacimiento: ${jugador.getAnnoNacimiento()}</span><br>
              <span class="info">Equipo: ${jugador.getEquipo()}</span>
              <div class="button-group"><button onclick="controller.modificarJugador(${jugador.getId()})" class="modificar">Modificar</button>
              <button onclick="controller.eliminarJugador(${jugador.getId()})" class="eliminar">Eliminar</button></div>
            </li>`;
        });
    }

    mostrarMenuInicio() {
        const menu = document.getElementById('menu_drch');

        document.title = "FutManager - Inicio";

        menu.innerHTML = `<h1>Bienvenido,</h1>
            <h3>aquí tienes algunas estadísticas</h3>`;
    }

    // Mostrar el menú de equipos donde se puede agregar un nuevo equipo 
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

    /// Mostrar el menú de jugadores donde se puede agregar un nuevo jugador 
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