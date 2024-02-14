import General from "../../general/general.js";
import Controlador from "../controlador/controlador_calidad.js";

const Vista = {

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
                <p id = "cedula" ><i class="fa-solid fa-address-card"> </i> Cedula:  ${dato['cedula']}</p>
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
                <p>${dato['compania']}</p>
            </div>
        </div>

        <div class="campo dni">
            <div class="texto">
                <p>DNI:</p>
            </div>
            <div class="entrada">
                <input type = "text" value = "${dato['dni']}">
            </div>
        </div>

        <div class="campo nombre">
            <div class="texto">
                <p>Nombre:</p>
            </div>
            <div class="entrada">
                <input type = "text" value = "${dato['nombre']}">
            </div>
        </div>

        <div class="campo telefono">
            <div class="texto">
                <p>Telefono:</p>
            </div>
            <div class="entrada">
                <input type = "text" value = "${dato['telefono']}">
            </div>
        </div>

        <div class="campo correo">
            <div class="texto">
                <p>Correo:</p>
            </div>
            <div class="entrada">
                <p>${dato['correo']}</p>
            </div>
        </div>

        <div class="campo direccion">
            <div class="texto">
                <p>Dirección:</p>
            </div>
            <div class="entrada">
                <p>${dato['direccion']}</p>
            </div>
        </div>

        <div class="campo fecha-nacimiento">
            <div class="texto">
                <p>Fecha de nacimiento:</p>
            </div>
            <div class="entrada">
                <p>${dato['fecha_nacimiento']}</p>
            </div>
        </div>

        <div class="campo cups-luz">
            <div class="texto">
                <p>CUPS LUZ:</p>
            </div>
            <div class="entrada">
                <p>${dato['cups_luz']}</p>
            </div>
        </div>

        <div class="campo cups-gas">
            <div class="texto">
                <p>CUPS GAS:</p>
            </div>
            <div class="entrada">
                <p>${dato['cups_gas']}</p>
            </div>
        </div>

        <div class="campo iban">
            <div class="texto">
                <p>IBAN:</p>
            </div>
            <div class="entrada">
                <p>${dato['iban']}</p>
            </div>
        </div>

        <div class="campo numero-contrato">
            <div class="texto">
                <p>Numero de Contrato:</p>
            </div>
            <div class="entrada">
                <p>${dato['numero_contrato']}</p>
            </div>
        </div>

        <div class="campo potencia">
            <div class="texto">
                <p>POTENCIA:</p>
            </div>
            <div class="entrada">
                <p>${dato['potencia']}</p>
            </div>
        </div>

        <div class="campo peajeGas">
            <div class="texto">
                <p>PEAJE GAS:</p>
            </div>
            <div class="entrada">
                <p>${dato['peaje_gas']}</p>
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
                    <option value="cumple calidad">Cumple calidad</option>
                    <option value="no cumple calidad">No cumple calidad</option>
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
        const columnasAMostrar = ['fecha_ingreso_venta', 'compania', 'dni', 'nombre', 'direccion', 'verificacion_calidad', 'audios_cargados', 'observaciones_calidad'];
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

                // Agregar la clase "estado-verde" a la celda específica
                if (columna === 'verificacion_calidad' && dato[columna] === 'cumple calidad') {
                    celda.classList.add('letras-estado-verde');
                }

                // Agregar la clase "estado-verde" a la celda específica
                if (columna === 'verificacion_calidad' && dato[columna] === 'no cumple calidad') {
                    celda.classList.add('letras-estado-rojo');
                }                    

                if (columna === 'verificacion_calidad' && dato[columna] === 'pendiente') {
                    celda.classList.add('letras-estado-amarillo');
                }
            


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
                // else if (i === 1) {
                //     // Configuración para el botón de eliminar
                //     icono.classList.add('fa-solid');
                //     boton.addEventListener('click', function () {
                //         // Lógica para eliminar el elemento
                //         Swal.fire({
                //             title: `¿Estás seguro? `,
                //             icon: "warning",
                //             showCancelButton: true,
                //             confirmButtonColor: "#3085d6",
                //             cancelButtonColor: "#d33",
                //             confirmButtonText: "Agregar"
                //         }).then((result) => {
                //             if (result.isConfirmed) {
                //                 const ref = dato['ref'];
                //                 Controlador.eliminarDatosFormulario(ref);
                //             }
                //         });
                //     });
                // }

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
        const llamada_calidad = document.getElementById('llamadaCalidadComboBoxCampoEditar').value;
        const calidad_enviada = document.getElementById('calidadEnviadaComboBoxCampoEditar').value;
        const verificacion_calidad = document.getElementById('verificacionComboBoxCampoEditar').value;
        const observaciones_calidad = document.getElementById('observacionesCalidadCampoEditar').value;
        const audios_cargados = document.getElementById('audiosCargadosComboBoxCampoEditar').value;
        const legalizacion = document.getElementById('legalizacion').value

        return {
            id_venta,
            cedula,
            llamada_calidad,
            calidad_enviada,
            verificacion_calidad,
            observaciones_calidad,
            audios_cargados,
            legalizacion
        };

    },

    opcionesMenu() {
        if (localStorage.getItem("access_token")) {
            const contenidoPerfil = document.getElementById("contenidoPerfil");

            if (localStorage.getItem("rol") == "calidad") {
                contenidoPerfil.innerHTML = `
                    <div class="enlaces">
                        <div class="enlace">
                            <div class="icono">
                                <i class="fa-solid fa-house"></i>
                            </div>

                            <div class="texto">
                                <button><a href= "./calidad.html">Inicio</a></button>
                            </div>
                        </div>
                
                    <div class="pie-menu">          
                
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
                location.href = "../login.html";
            };

        } else {

            location.href = "../login.html";
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
    },

    redirigirAIndex() {
        location.href = ("../../home.html");
    },

}

export default Vista;

document.addEventListener('DOMContentLoaded', function () {
    const rol = localStorage.getItem("rol");
    if(rol != "calidad"){
        Vista.redirigirAIndex()
    }

    Controlador.mostrarTodasLasVentas()
    Vista.opcionesMenu()
    General.horaActual()
    setInterval(General.horaActual, 1000)
})

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
