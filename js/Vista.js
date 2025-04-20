class Vista {

    mostrarMenuInicio() {
        const menu = document.getElementById('menu_drch');

        document.title = "FutManager - Inicio";

        menu.innerHTML = `<h1>Bienvenido,</h1>
            <h3>aquí tienes algunas estadísticas</h3>`;
    }

    mostrarMenuEquipos() {
        const menu = document.getElementById('menu_drch');

        document.title = "FutManager - Equipos";

        menu.innerHTML = `
            <div class="form-container">
                <h2 class="form-title">Agregar Nuevo Equipo</h2>
                <div class="form-grid">
                    <div class="form-group">
                        <label for="nombre_equipo">Nombre del Equipo</label>
                        <input type="text" id="nombre_equipo" class="form-input" placeholder="Real Betis" required>
                    </div>
                    <div class="form-group">
                        <label for="nombre_ciudad">Ciudad</label>
                        <input type="text" id="nombre_ciudad" class="form-input" placeholder="Sevilla" required>
                    </div>
                    <div class="form-group">
                        <label for="nombre_estadio">Estadio</label>
                        <input type="text" id="nombre_estadio" class="form-input" placeholder="Benito Villamarín" required>
                    </div>
                </div>
                <button class="form-submit" onclick="controller.agregarEquipo(
                    document.getElementById('nombre_equipo').value,
                    document.getElementById('nombre_ciudad').value,
                    document.getElementById('nombre_estadio').value
                )">
                    <i class="icon-plus"></i> Agregar Equipo
                </button>
            </div>
            <div class="list-header">
                <h3>Listado de Equipos</h3>
            </div>
            <ul id="lista"></ul>`;
    }

    mostrarEquipos(equipos, jugadores) {
        const lista = document.getElementById('lista');
        lista.innerHTML = "";
    
        equipos.forEach(equipo => {
            // Contar jugadores del equipo actual
            const cantidad = jugadores.filter(j => Number(j.getEquipo()) === equipo.getId()).length;
    
            lista.innerHTML += `
                <li>
                    <span class="nombre">${equipo.getNombre()}</span><br>
                    <span class="info">Ciudad: ${equipo.getCiudad()}</span><br>
                    <span class="info">Estadio: ${equipo.getEstadio()}</span><br>
                    <span class="info"><strong>Cantidad de jugadores:</strong> ${cantidad}</span>
                    <div class="button-group">
                        <button onclick="controller.eliminarEquipo(${equipo.getId()})" class="eliminar">Eliminar</button>
                    </div>
                </li>`;
        });
    }    

    mostrarJugadores(jugadores) {
        const lista = document.getElementById('lista');
        lista.innerHTML = "";

        jugadores.forEach(jugador => {
            lista.innerHTML += `
                <li>
                    <span class="nombre">${jugador.getNombre()}</span><br>
                    <span class="info">Posición: ${jugador.getPosicion()}</span><br>
                    <span class="info">Año de nacimiento: ${jugador.getAnnoNacimiento()}</span><br>
                    <span class="info">Equipo: ${controller.obtenerNombreEquipo(jugador.getEquipo())}</span>
                    <div class="button-group">
                        <button onclick="controller.modificarJugador(${jugador.getId()})" class="modificar">Modificar</button>
                        <button onclick="controller.eliminarJugador(${jugador.getId()})" class="eliminar">Eliminar</button>
                    </div>
                </li>`;
        });
    }

    mostrarMenuJugadores() {
        const menu = document.getElementById('menu_drch');
        const equipos = controller.obtenerEquiposParaSelect();

        document.title = "FutManager - Jugadores";

        let selectPosicion = '<select id="nombre_posicion" class="form-select" required><option value="">Seleccione posición</option>';
        controller.obtenerPosiciones().forEach(pos => {
            selectPosicion += `<option value="${pos}">${pos}</option>`;
        });
        selectPosicion += '</select>';

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
