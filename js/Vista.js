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
              <span class="info">Equipo: ${controller.obtenerNombreEquipo(jugador.getEquipo())}</span>
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
        const equipos = controller.obtenerEquiposParaSelect();
    
        document.title = "FutManager - Jugadores";
    
        /* Crear un select para las posiciones */
        let selectPosicion = '<select id="nombre_posicion" class="form-select" required><option value="">Seleccione posición</option>';
    
        controller.obtenerPosiciones().forEach(pos => {
            selectPosicion += `<option value="${pos}">${pos}</option>`;
        });
    
        selectPosicion += '</select>';
    
        /* Crear un select para los equipos */
        let selectEquipos = '<select id="id_equipo" class="form-select" required><option value="">Seleccione un equipo</option>';
        
        equipos.forEach(equipo => {
            selectEquipos += `<option value="${equipo.id}">${equipo.nombre}</option>`;
        });
        
        selectEquipos += '</select>';
    
        menu.innerHTML = `
            <div class="form-container">
                <h2 class="form-title">Agregar Nuevo Jugador</h2>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="nombre_jugador">Nombre del Jugador</label>
                        <input type="text" id="nombre_jugador" class="form-input" placeholder="Lionel Messi" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="nombre_posicion">Posición</label>
                        ${selectPosicion}
                    </div>
                    
                    <div class="form-group">
                        <label for="anno_nacimiento">Año de Nacimiento</label>
                        <input type="number" id="anno_nacimiento" class="form-input" placeholder="1987" min="1900" max="${new Date().getFullYear()}" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="id_equipo">Equipo</label>
                        ${selectEquipos}
                    </div>
                </div>
                
                <button class="form-submit" onclick="controller.agregarJugador(
                    document.getElementById('nombre_jugador').value,
                    document.getElementById('nombre_posicion').value,
                    document.getElementById('anno_nacimiento').value,
                    document.getElementById('id_equipo').value
                )">
                    <i class="icon-plus"></i> Agregar Jugador
                </button>
            </div>
            
            <div class="list-header">
                <h3>Listado de Jugadores</h3>
                <div class="filter-buttons">
                    <button class="filter-btn" onclick="controller.abrirModalFiltro()">
                        <i class="icon-filter"></i> Filtrar
                    </button>
                    <button id="btn-limpiar-filtros" class="filter-btn secondary" onclick="controller.limpiarFiltros()" style="display: none;">
                        <i class="icon-clear"></i> Limpiar
                    </button>
                </div>
            </div>
            <ul id="lista"></ul>`;
    }
}