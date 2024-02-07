import Controlador from "../controlador/controlador_admin.js"
import General from "../../general/general.js"

const Vista = {

    llenarCuadroVentasTotales(cant_venta_totales, titulo) {
        const datos = document.getElementById("contenedorDatos")
        const contenidoDatos = document.createElement('div')

        contenidoDatos.classList.add("estadistica")
        contenidoDatos.innerHTML = `
        <div class="titulo">
            <p>${titulo}</p>
        </div>
         
        <div class="valor">
           <p>${cant_venta_totales}</p>
        </div>

        <div class="icono">
           <i class="fa-solid fa-money-check-dollar"></i>
        </div>
    `
        datos.append(contenidoDatos)
    },

    datosEstadisticos(ventas_miguel, ventas_ray, ventas_davina, ventas_laureano) {
        //console.log(ventas_miguel.data)
        const cant_ventas_miguel = ventas_miguel.data['cant_ventas_realizadas']

        //console.log(cant_ventas_miguel)

    },

    datosAgente(res) {

        const menuNombreAgente = document.getElementById('menuNombreAgente')
        const menuRolUsuario = document.getElementById('menuRolUsuario')

        const parrafoNombreAgente = document.createElement('p')
        const textoNombreAgente = document.createTextNode(res.data.nombre)

        parrafoNombreAgente.appendChild(textoNombreAgente)


        const parrafoRolAgente = document.createElement('p')
        const textoRolAgente = document.createTextNode(res.data.rol)

        parrafoRolAgente.appendChild(textoRolAgente)


        menuNombreAgente.appendChild(parrafoNombreAgente)
        menuRolUsuario.appendChild(parrafoRolAgente)

    },

    opcionesMenu() {
        if (localStorage.getItem("access_token")) {
            const contenidoPerfil = document.getElementById("contenidoPerfil");
            if (localStorage.getItem("rol") == "team leader") {
                contenidoPerfil.innerHTML = `
                    <div class="enlaces">
                        <div class="enlace">
                            <div class="icono">
                                <i class="fa-solid fa-house"></i>
                            </div>

                            <div class="texto">
                                <button><a href= "../home.html">Inicio</a></button>
                            </div>
                        </div>

                        <div class="enlace">
                            <div class="icono">
                                <i class="fa-solid fa-user"></i>
                            </div>
                    
                            <div class="texto">
                                <button><a href= "../pages/perfil.html">Mi perfil</a></button>
                            </div>
                        </div>

                        <div class="enlace">
                            <div class="icono">
                                <i class="fa-solid fa-user"></i>
                            </div>
                    
                            <div class="texto">
                                <button><a href= "../pages/team_leader/inicio_team_leader.html">Mi equipo</a></button>
                            </div>
                        </div>

                        
                        <div class="enlace">
                        <div class="icono">
                            <i class="fa-solid fa-user"></i>
                        </div>
            
                        <div class="texto">
                            <button><a href= "../pages/formulario_ventas.html">Añadir Venta</a></button>
                        </div>
                    </div>
                        </div>
                    </div>
                
                    <div class="pie-menu">
                
                        <div class="enlace">
                            <div class="icono">
                                <i class="fa-solid fa-gear"></i>
                            </div>
                
                            <div class="texto">
                                <button>Configurar</button>
                            </div>
                        </div>
                
                        <div class="enlace">
                            <div class="icono">
                                <i class="fa-solid fa-right-from-bracket"></i>
                            </div>
                
                            <div class="texto">
                                <button id = "cerrarSesion">Cerrar sesión</button>
                            </div>
                        </div>
                    </div>      
                `;
            }

            if (localStorage.getItem("rol") == "agente") {
                contenidoPerfil.innerHTML = `
          <div class="enlaces">
            <div class="enlace">
                <div class="icono">
                    <i class="fa-solid fa-house"></i>
                </div>

                <div class="texto">
                    <button><a href= "../home.html">Inicio</a></button>
                </div>
            </div>

            <div class="enlace">
              <div class="icono">
                  <i class="fa-solid fa-user"></i>
              </div>
    
              <div class="texto">
                <button><a href= "../pages/perfil.html">Mi perfil</a></button>
              </div>
            </div>

            <div class="enlace">
            <div class="icono">
                <i class="fa-solid fa-user"></i>
            </div>
  
            <div class="texto">
                <button><a href= "../pages/formulario_ventas.html">Añadir Venta</a></button>
            </div>
          </div>
            </div>
        </div>
        <div class="enlace">
            <div class="icono">
            <i class="fa-solid fa-location-crosshairs"></i>
            </div>
  
            <div class="texto">
                <button><a href= "../pages/codigos_postales.html">Codigos postales</a></button>
            </div>
          </div>
            </div>
        </div>
    
        <div class="pie-menu">
    
            <div class="enlace">
                <div class="icono">
                    <i class="fa-solid fa-gear"></i>
                </div>
    
                <div class="texto">
                    <button>Configurar</button>
                </div>
            </div>
    
            <div class="enlace">
                <div class="icono">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>
    
                <div class="texto">
                    <button id = "cerrarSesion">Cerrar sesión</button>
                </div>
            </div>
        </div>      
                `;
            }

            if (localStorage.getItem("rol") == "admin") {
                contenidoPerfil.innerHTML = `
        <div class="enlaces">
        <div class="enlace">
        <div class="icono">
            <i class="fa-solid fa-house"></i>
        </div>

        <div class="texto">
            <button><a href= "../pages/admin.html">Inicio</a></button>
        </div>
    </div>
            <div class="enlace">
            <div class="icono">
                <i class="fa-solid fa-user"></i>
            </div>

            <div class="texto">
                <button><a href= "../pages/perfil.html">Mi perfil</a></button>
            </div>
            </div>

            <div class="enlace">
            <div class="icono">
                <i class="fa-solid fa-people-group"></i>
            </div>

            <div class="texto">
                <button><a href= "../pages/admin/equipo.html">Equipos</a></button>
            </div>
            </div>

            <div class="enlace">
            <div class="icono">
                <i class="fa-solid fa-headset"></i>
            </div>

            <div class="texto">
                <button><a href= "../pages/formulario_ventas.html">Ventas</a></button>
            </div>
            </div>
            <div class="enlace">
            <div class="icono">
                <i class="fa-solid fa-user"></i>
            </div>

            <div class="texto">
            <button><a href= "../pages/registro_agentes.html">Registrar agente</a></button>
            </div>
        </div>

            <div class="enlace">
            <div class="icono">
                <i class="fa-solid fa-file-pen"></i>
            </div>

            <div class="texto">
                <button><a href="https://docs.google.com/forms/d/1zmWZxi-XVMlfp2KE7dv9EEhqIPYGcDDSZY75K1s4lDU/viewform?pli=1&pli=1&edit_requested=true" target="_blank" >Reporte diario</a></button>
            </div>
            </div>

            </div>
        </div>

        <div class="pie-menu">

            <div class="enlace">
                <div class="icono">
                    <i class="fa-solid fa-gear"></i>
                </div>

                <div class="texto">
                    <button>Configurar</button>
                </div>
            </div>

            <div class="enlace">
                <div class="icono">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>

                <div class="texto">
                    <button id = "cerrarSesion">Cerrar sesión</button>
                </div>
            </div>
        </div>      
      `;
            }

            const botonCerrarSesion = document.getElementById("cerrarSesion");
            botonCerrarSesion.onclick = function () {
                localStorage.clear();
                location.href = "../pages/login.html";
            };
        } else {
            location.href = "../pages/login.html";
        }
    },

    crearGrafico(myChart, labels_barra, datos_barra, tipo) {

        new Chart(myChart, {
            type: tipo,
            data: {
                labels: labels_barra,
                datasets: [{
                    label: '# de ventas',
                    data: datos_barra,
                    borderWidth: 1
                }]
            },
        });
    },

    crearGraficoLineas(myChart, ventasMiguel, ventasRay, ventasDavina, ventasLaureano) {

        new Chart(myChart, {
            type: 'line',
            data: {
                labels: ['Octubre', 'Noviembre', 'Diciembre', 'Enero'],
                datasets: [
                    {
                        label: 'Ventas Miguel',
                        data: ventasMiguel,
                        borderWidth: 1
                    },
                    {
                        label: 'Ventas Ray',
                        data: ventasRay,
                        borderWidth: 1
                    },
                    {
                        label: 'Ventas Davina',
                        data: ventasDavina,
                        borderWidth: 1
                    },
                    {
                        label: 'Ventas Laureano',
                        data: ventasLaureano,
                        borderWidth: 1
                    },
                ],
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Chart.js Line Chart'
                        }
                    }
                },
            },
        });
    },

    mostrarGraficas(ventas_miguel, ventas_ray, ventas_davina, ventas_laureano) {

        const myChart = document.getElementById('myChart')

        const ventasMiguel = [ventas_miguel.data['cant_ventas_octubre'], ventas_miguel.data['cant_ventas_noviembre'], ventas_miguel.data['cant_ventas_diciembre'], ventas_miguel.data['cant_ventas_enero']]
        const ventasRay = [ventas_ray.data['cant_ventas_octubre'], ventas_ray.data['cant_ventas_noviembre'], ventas_ray.data['cant_ventas_diciembre'], ventas_ray.data['cant_ventas_enero']]
        const ventasDavina = [ventas_davina.data['cant_ventas_octubre'], ventas_davina.data['cant_ventas_noviembre'], ventas_davina.data['cant_ventas_diciembre'], ventas_davina.data['cant_ventas_enero']]
        const ventasLaureano = [ventas_laureano.data['cant_ventas_octubre'], ventas_laureano.data['cant_ventas_noviembre'], ventas_laureano.data['cant_ventas_diciembre'], ventas_laureano.data['cant_ventas_enero']]

        this.crearGraficoLineas(myChart, ventasMiguel, ventasRay, ventasDavina, ventasLaureano)

    },

    modalIncrustado(targetModal, btnAbrir, claseCerrarModal) {

        /* MODAL Agregar datos */
        var modal = document.getElementById(targetModal);
        var btnAbrirModal = document.getElementById(btnAbrir);
        var btnCerrarModal = document.getElementsByClassName(claseCerrarModal)[0];

        btnAbrirModal.onclick = function () {
            modal.style.display = "block";
        }

        btnCerrarModal.onclick = function () {
            modal.style.display = "none";
        }
        /*
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        */
    },

    modalCero(targetModal, claseCerrarModal) {

        /* MODAL Agregar datos */
        var modal = document.getElementById(targetModal);
        //var btnAbrirModal = document.getElementById(btnAbrir);
        //var btnCerrarModal = document.getElementsByClassName(claseCerrarModal)[0];

        //btnAbrirModal.onclick = function () {
        modal.style.display = "block";
        //}

        //btnCerrarModal.onclick = function () {
        //    modal.style.display = "none";
        //}

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    },

    modalContenido(modalCuerpo, modalCabecera, dato) {

        modalCabecera.innerHTML =
            `
         <h1>Información</h1>
        `
        modalCuerpo.innerHTML =
            `
        <div class="informacion-agente-venta">
            <h3>Informacion agente</h3>
                    
            <div class="informacion-agente">
                <p>Id venta:</p>
                <p id = "idVenta" ><i class="fa-solid fa-hashtag"></i> ${dato['id']}</p>
                <p><i class="fa-solid fa-calendar-days"></i> Fecha: ${dato['fecha_ingreso_venta']}</p>
                <p><i class="fa-solid fa-people-group"></i> Lider Equipo: ${dato['lider_equipo']}</p>
                <p><i class="fa-solid fa-address-card"></i>Cedula:</p>
                <p id = "cedula" >${dato['cedula']}</p>
                <p><i class="fa-solid fa-user"></i> Agente: ${dato['nombre_agente']}</p>
                <p><i class="fa-solid fa-database"></i> Base de datos: ${dato['base_de_datos']}</p>                      
            </div>

        </div>

        
    <div class="informacion-editar">

    <div class="contenido-venta">
        <h3>Informacion venta</h3>

        <div class="campo compania">
            <div class="texto">
                <p>Compañia:</p>
            </div>
            <div class="entrada">
                <input id = "campoCompañiaEditar" type = "text" value = "${dato['compania']}">
            </div>
        </div>

        <div class="campo dni">
            <div class="texto">
                <p>DNI:</p>
            </div>
            <div class="entrada">
                <input id = "campoDniEditar" type = "text" value = "${dato['dni']}">
            </div>
        </div>

        <div class="campo nombre">
            <div class="texto">
                <p>Nombre:</p>
            </div>
            <div class="entrada">
                <input id = "campoNombreEditar" type = "text" value = "${dato['nombre']}">
            </div>
        </div>

        <div class="campo telefono">
            <div class="texto">
                <p>Telefono:</p>
            </div>
            <div class="entrada">
                <input id = "campoTelefonoEditar" type = "text" value = "${dato['telefono']}">
            </div>
        </div>

        <div class="campo correo">
            <div class="texto">
                <p>Correo:</p>
            </div>
            <div class="entrada">
                <input id = "campoCorreoEditar" type = "text" value = "${dato['correo']}">
            </div>
        </div>

        <div class="campo direccion">
            <div class="texto">
                <p>Dirección:</p>
            </div>
            <div class="entrada">
                <input id = "campoDireccionEditar" type = "text" value = "${dato['direccion']}">
                <p></p>
            </div>
        </div>

        <div class="campo fecha-nacimiento">
            <div class="texto">
                <p>Fecha de nacimiento:</p>
            </div>
            <div class="entrada">
                <input id = "campoFechaNacimientoEditar" type = "text" value = "${dato['fecha_nacimiento']}">
            </div>
        </div>

        <div class="campo cups-luz">
            <div class="texto">
                <p>CUPS LUZ:</p>
            </div>
            <div class="entrada">
                <input id = "campoCupsLuzEditar" type = "text" value = "${dato['cups_luz']}">
            </div>
        </div>

        <div class="campo cups-gas">
            <div class="texto">
                <p>CUPS GAS:</p>
            </div>
            <div class="entrada">
                <input id = "campoCupsGasEditar" type = "text" value = "${dato['cups_gas']}">
            </div>
        </div>

        <div class="campo iban">
            <div class="texto">
                <p>IBAN:</p>
            </div>
            <div class="entrada">
                <input id = "campoIbanEditar" type = "text" value = "${dato['iban']}">
            </div>
        </div>

        <div class="campo numero-contrato">
            <div class="texto">
                <p>Numero de Contrato:</p>
            </div>
            <div class="entrada">
                <input id = "campoNumeroContratoEditar" type = "text" value = "${dato['numero_contrato']}">
            </div>
        </div>

        <div class="campo potencia">
            <div class="texto">
                <p>POTENCIA:</p>
            </div>
            <div class="entrada">
                <input id = "campoPotenciaEditar" type = "text" value = "${dato['potencia']}">
                <p></p>
            </div>
        </div>

        <div class="campo peajeGas">
            <div class="texto">
                <p>PEAJE GAS:</p>
            </div>
            <div class="entrada">
                <input id = "campoPeajeGasEditar" type = "text" value = "${dato['peaje_gas']}">
            </div>
        </div>

        <div class="campo descripcion-venta">
            <div class="texto">
                <p>Observaciones venta:</p>
            </div>
            <div class="entrada">
                <textarea id="observacionesVenta" disabled>${dato['observaciones_venta']}</textarea>
            </div>
        </div>


    </div>

    <div class="contenido-editable">
    <h3>Informacion editabe</h3>
        <div class="campo llamada-calidad">
            <div class="texto">
                <p>Llamada calidad:</p>
            </div>
            <div class="entrada">
                <select name="" id="llamadaCalidadComboBoxCampoEditar">
                    <option value="${dato['llamada_calidad']}">${dato['llamada_calidad']}</option>
                    <option value="corregida">Corregida</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="realizada">Realizada</option>
                </select>
            </div>
        </div>

        <div class="campo calidad-enviada">
            <div class="texto">
                <p>Calidad enviada:</p>
            </div>
            <div class="entrada">
                <select name="" id="calidadEnviadaComboBoxCampoEditar">
                    <option value="${dato['calidad_enviada']}">${dato['calidad_enviada']}</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>

        <div class="campo verificacion-calidad">
            <div class="texto">
                <p>Verificación calidad:</p>
            </div>
            <div class="entrada">
                <select name="" id="verificacionComboBoxCampoEditar">
                    <option value="${dato['verificacion_calidad']}">${dato['verificacion_calidad']}</option>
                    <option value="realizada">Realizada</option>
                    <option value="no facturables">No facturables</option>
                    <option value="pendiente">Pendiente</option>
                </select>
            </div>
        </div>

        <div class="campo audios-cargados">
            <div class="texto">
                <p>Audios cargados:</p>
            </div>
            <div class="entrada">
                <select name="" id="audiosCargadosComboBoxCampoEditar">
                    <option value="${dato['audios_cargados']}">${dato['audios_cargados']}</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
            </div>
        </div>

        <div class="campo descripcion">
            <div class="texto">
                <p>Observaciones calidad:</p>
            </div>
            <div class="entrada">
                <textarea id="observacionesCalidadCampoEditar">${dato['observaciones_calidad']}</textarea>
            </div>
        </div>

        
        <div class="campo legalizacion">
            <div class="texto">
                <p>Legalización:</p>
            </div>
            <div class="entrada">
                <select name="" id="legalizacion">
                    <option value="${dato['legalizacion']}">${dato['legalizacion']}</option>
                    <option value="Naturgy">Naturgy</option>
                    <option value="Iberdrola">Iberdrola</option>
                    <option value="no aplica">No aplica</option>
                </select>
            </div>
        </div>

        <div class="campo estado">
            <div class="texto">
                <p>Estado:</p>
            </div>
            <div class="entrada">
                <select name="" id="estadoComboBoxCampoEditar">
                <option value="${dato['estado']}">${dato['estado']}</option>
                <option value="activa">Activa</option>
                <option value="temporal">Temporal</option>
                <option value="baja">Baja</option>
                <option value="firmado">Firmado</option>
                <option value="verificado">Verificado</option>
                <option value="cancelada">Cancelada</option>
                <option value="desistimiento">Desistimiento</option>
                <option value="devuelta">Devuelta</option>
                </select>
            </div>
        </div>

        <div class="campo descripcion">
            <div class="texto">
                <p>Observaciones adicionales:</p>
            </div>
            <div class="entrada">
                <textarea id="observacionesAdicionalesCampoEditar">${dato['observaciones_adicionales']}</textarea>
            </div>
        </div>
    </div>

</div>
        
        `
        return modalCabecera, modalCuerpo
    },

    mostrarTodasLasVentas(res) {
        const datos = res.data.ventas

        //const datos = response.data['ventas_realizadas'];
        const tablaDatos = document.getElementById('tablaDatos');
        tablaDatos.innerHTML = '';

        // Definir las columnas que deseas mostrar
        const columnasAMostrar = ['fecha_ingreso_venta', 'compania', 'dni', 'nombre', 'correo', 'nombre_agente', 'estado'];
        //const columnas = Object.keys(datos[0]);

        // Crear encabezado
        const encabezadoRow = document.createElement('tr');
        for (const columna of columnasAMostrar) {
            const th = document.createElement('th');
            th.textContent = columna;
            encabezadoRow.appendChild(th);
        }
        tablaDatos.appendChild(encabezadoRow);

        // Crear filas de datos
        datos.forEach(dato => {
            const fila = document.createElement('tr');
            for (const columna of columnasAMostrar) {
                const celda = document.createElement('td');
                celda.textContent = dato[columna];

                fila.appendChild(celda);
            }
            // Agregar botones de editar, eliminar y ver a cada fila
            for (let i = 0; i < 3; i++) {
                const celda = document.createElement('td');
                const boton = document.createElement('button');
                const icono = document.createElement('i');

                // Agregar la clase especial 'no-padding' a las celdas de los botones
                celda.classList.add('no-padding');

                if (i === 0) {
                    // Configuración para el botón de editar
                    icono.classList.add('fa-solid', 'fa-pen-to-square');
                    icono.setAttribute('id', 'abrirModalInformacionDatos');
                    boton.addEventListener('click', () => {
                        Vista.modalCero("targetModalInformacionDatos", "cerrar-modal-informacion-datos")
                        const modalCuerpo = document.getElementById('modalCuerpo');
                        const modalCabecera = document.getElementById('modalCabecera');
                        Vista.modalContenido(modalCuerpo, modalCabecera, dato)
                    });
                }

                boton.appendChild(icono);
                celda.appendChild(boton);
                fila.appendChild(celda);
            }

            tablaDatos.appendChild(fila);
        });
    },

    editarVenta() {
        const id_venta = document.getElementById('idVenta').textContent;
        const cedula = document.getElementById('cedula').textContent;
        const compania = document.getElementById('campoCompañiaEditar').value;
        const dni = document.getElementById('campoDniEditar').value;
        const nombre = document.getElementById('campoNombreEditar').value;
        const telefono = document.getElementById('campoTelefonoEditar').value;
        const correo = document.getElementById('campoCorreoEditar').value;
        const direccion = document.getElementById('campoDireccionEditar').value;
        const fechaNacimiento = document.getElementById('campoFechaNacimientoEditar').value;
        const cupsLuz = document.getElementById('campoCupsLuzEditar').value;
        const cupsGas = document.getElementById('campoCupsGasEditar').value;
        const iban = document.getElementById('campoIbanEditar').value;
        const numeroContrato = document.getElementById('campoNumeroContratoEditar').value;
        const potencia = document.getElementById('campoPotenciaEditar').value;
        const peajeGas = document.getElementById('campoPeajeGasEditar').value;
        const llamada_calidad = document.getElementById('llamadaCalidadComboBoxCampoEditar').value;
        const calidad_enviada = document.getElementById('calidadEnviadaComboBoxCampoEditar').value;
        const verificacion_calidad = document.getElementById('verificacionComboBoxCampoEditar').value;
        const observaciones_calidad = document.getElementById('observacionesCalidadCampoEditar').value;
        const audios_cargados = document.getElementById('audiosCargadosComboBoxCampoEditar').value;
        const estado = document.getElementById('estadoComboBoxCampoEditar').value;
        const observaciones_adicionales = document.getElementById('observacionesAdicionalesCampoEditar').value;
        const legalizacion = document.getElementById('legalizacion').value;

        return {
            id_venta,
            cedula,
            compania,
            nombre,
            dni,
            telefono,
            correo,
            direccion,
            fechaNacimiento,
            cupsLuz,
            cupsGas,
            iban,
            numeroContrato,
            potencia,
            peajeGas,
            llamada_calidad,
            calidad_enviada,
            verificacion_calidad,
            observaciones_calidad,
            audios_cargados,
            estado,
            observaciones_adicionales,
            legalizacion
        }

    },

    mostrarMensajeError(mensaje) {
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: mensaje,
        })
    },

    mostrarAlertaSatisfactorio(mensaje) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
    },

    recargarPagina(tiempo) {
        setTimeout(function () {
            window.location.reload()
        }, tiempo);
    }
}

export default Vista;

document.addEventListener('DOMContentLoaded', function () {
    Vista.opcionesMenu();
    Controlador.ventasPorLiderEquipo();
    General.horaActual()
    setInterval(General.horaActual, 1000);
    Controlador.mostrarTodasLasVentas()
})

const abrirMenuOpciones = document.getElementById('abrirMenuOpciones');
const opcionesPerfil = document.getElementById('opcionesPerfil');

abrirMenuOpciones.onclick = function () {
    if (opcionesPerfil.style.display === "none" || opcionesPerfil.style.display === "") {
        opcionesPerfil.style.display = "block";
    } else {
        opcionesPerfil.style.display = "none";
    }
};

const botonEditar = document.getElementById('botonEditar');

botonEditar.onclick = function () {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿Estás seguro?',
        text: 'Deseas actualizar esta información de la venta en la BD',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            Controlador.editarventa()
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'No se ha ingresado nada',
                'error'
            );
        }
    });

}

const descargarVentas = document.getElementById('descargarVentas');

descargarVentas.onclick = async function () {
    Controlador.descargarVentas()
};





