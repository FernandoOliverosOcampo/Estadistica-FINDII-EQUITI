import Controlador from "../controlador/controlador_leader.js"
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

    datosEstadisticos(res) {

        const cant_ventas_totales_realizadas = res.data.cant_ventas_realizadas
        const cant_ventas_totales_diciembre = res.data.cant_ventas_diciembre
        const cant_ventas_totales_enero = res.data.cant_ventas_enero
        const cant_ventas_totales_febrero = res.data.cant_ventas_febrero


        this.llenarCuadroVentasTotales(cant_ventas_totales_realizadas, "Ventas Totales")
        this.llenarCuadroVentasTotales(cant_ventas_totales_diciembre, "Ventas Diciembre")
        this.llenarCuadroVentasTotales(cant_ventas_totales_enero, "Ventas Enero")
        this.llenarCuadroVentasTotales(cant_ventas_totales_febrero, "Ventas Febrero")
        this.llenarCuadroVentasTotales(23, "Promedio equipo")
        this.llenarCuadroVentasTotales(25, 'Promedio mensual')
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
                                <button><a href= "../../home.html">Inicio</a></button>
                            </div>
                        </div>

                        <div class="enlace">
                            <div class="icono">
                                <i class="fa-solid fa-user"></i>
                            </div>
                    
                            <div class="texto">
                                <button><a href= "../perfil.html">Mi perfil</a></button>
                            </div>
                        </div>

                        <div class="enlace">
                            <div class="icono">
                                <i class="fa-solid fa-user"></i>
                            </div>
                    
                            <div class="texto">
                                <button><a href= "./inicio_team_leader.html">Mi equipo</a></button>
                            </div>
                        </div>

                        
                        <div class="enlace">
                        <div class="icono">
                            <i class="fa-solid fa-user"></i>
                        </div>
            
                        <div class="texto">
                            <button><a href= "../formulario_ventas.html">Añadir Venta</a></button>
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
                location.href = "../login.html";
            };
        } else {
            location.href = "../login.html";
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
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(93, 23, 235, 0.2)', // Morado oscuro
                        'rgba(0, 100, 0, 0.2)',   // Verde oscuro
                        'rgba(255, 80, 234, 0.2)',
                    ]
                },


                ]
            },

        });
    },

    mostrarGraficas(res) {

        const myChart = document.getElementById('myChart')
        const dona = document.getElementById('myDona')

        const mesActual = parseInt(res.data.cant_ventas_enero)

        const datos_barra = [res.data.cant_ventas_noviembre, res.data.cant_ventas_diciembre, mesActual]
        const labels_barra = ['Noviembre', 'Diciembre', 'Enero']
        this.crearGrafico(myChart, labels_barra, datos_barra, 'bar')

        const datos_dona = [mesActual, 23 - mesActual]
        const labels_dona = ['Ventas realizadas', 'Ventas por cumplir']
        this.crearGrafico(dona, labels_dona, datos_dona, 'doughnut')

        const tituloGrafica = document.getElementById('tituloGrafica')
        tituloGrafica.innerHTML =
            `
        <p>Ventas mes actual =  ${mesActual}/23</p>
        `;
    },

    traerCedulaAgente() {
        const cedulaAgente = document.getElementById('cedulaAgenteBuscar').value;
        return { cedulaAgente }
    },

    llenarDatosPersonalesAgente(res) {
        const data = res.data
        const contenedorDatosAgente = document.getElementById('contenedorDatosAgente');
        contenedorDatosAgente.innerHTML = `
        <div class="campo">
            <div class="titulo">
                <p>Cédula:</p>
            </div>
            <div class="texto" id="cedulaAgente">
            <p>${data.cedula}</p>

            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Nombre:</p>
            </div>
            <div class="texto" id="nombreAgente">
            <p>${data.nombre}</p>

            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Correo:</p>
            </div>
            <div class="texto" id="correoAgente">
            <p>${data.correo}</p>

            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Celular:</p>
            </div>
            <div class="texto" id="celularAgente">
            <p>${data.celular}</p>

            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Campaña:</p>
            </div>
            <div class="texto" id="campañaAgente">
            <p>${data.campana}</p>

            </div>
        </div>

        `;

    },

    llenarEstadisticasAgente(res) {
        const data = res.data

        const ventasSemanaActual = data.cant_ventas_semana_actual;
        const ventasTotalesMes = data.cant_ventas_mes_actual;
        const ventasRestantes = 26 - ventasTotalesMes // META de ventas mensual
        const promVentasMensuales = (data.cant_ventas_mes_actual / 30).toFixed(2) //Tiene que ser según el día actual y restar sabados y domingos
        const promVentasDiarias = (data.cant_ventas_mes_actual / 1).toFixed(2)  // Se supone que agarra el dia actual
        const promVentasSemanales = (data.cant_ventas_mes_actual / 5).toFixed(2)
        const porcCumplirMeta = ((ventasSemanaActual / 26) * 100).toFixed(2)

        const contenedorEstadisticasAgente = document.getElementById('contenedorEstadisticasAgente');

        contenedorEstadisticasAgente.innerHTML = `
        <div class="campo">
            <div class="titulo">
                <p>Ventas semana actual:</p>
            </div>
            <div class="texto" id="promVentasDiariasAgente">
                <p>${ventasSemanaActual}</p>
            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Ventas totales mes:</p>
            </div>
            <div class="texto" id="promVentasSemanalAgente">
                <p>${ventasTotalesMes}</p>
            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Ventas totales:</p>
            </div>
            <div class="texto" id="ventasTotalesAgente">
                <p>${ventasSemanaActual}</p>
            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Ventas restantes (para meta)</p>
            </div>
            <div class="texto" id="porcCumplirMeta">
                <p>${ventasRestantes}</p>
            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Prom. ventas mensual</p>
            </div>
            <div class="texto" id="ventasSemanaActual">
                <p>${promVentasMensuales}</p>
            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Prom. ventas diarias</p>
            </div>
            <div class="texto" id="ventasSemanaActual">
                <p>${promVentasDiarias}</p>
            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>Prom. ventas semanales</p>
            </div>
            <div class="texto" id="ventasSemanaActual">
                <p>${promVentasSemanales}</p>
            </div>
        </div>

        <div class="campo">
            <div class="titulo">
                <p>% para cumplir meta</p>
            </div>
            <div class="texto" id="ventasSemanaActual">
                <p>${porcCumplirMeta}</p>
            </div>
        </div>

        `;
    },

    agentesPertenecientes(res) {

        const dataAgentes = res.data['agentes_pertenecientes'];
        const agentesPertenecientesContenedor = document.getElementById('agentesPertenecientesContenedor');
        const listaAgentesPertenecientes = document.getElementById('listaAgentesPertenecientes');

        // Limpiar la lista antes de agregar nuevos elementos
        listaAgentesPertenecientes.innerHTML = '';

        dataAgentes.forEach(element => {
            const listItem = document.createElement('div');
            listItem.innerHTML =
                `
                <p>Cedula: ${element.cedula}</p>
                <p>Nombre: ${element.nombre}</p>
                <p>Cantidad de ventas mes actual: ${element.ventas_mes_actual}</p>

            `;
            listaAgentesPertenecientes.appendChild(listItem);
        });

        // Agregar la lista completa al contenedor
        agentesPertenecientesContenedor.appendChild(listaAgentesPertenecientes);
    }

}

export default Vista;

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('agente')) {
        location.href = ("../../home.html");
    }
    Controlador.ventasRealizadasAgente();
    Controlador.datosAgenteGraficas();
    General.horaActual()
    setInterval(General.horaActual, 1000)
    Controlador.traerAgentesPertenecientes()
    Vista.opcionesMenu();
})

const btnEnviarCedulaAgente = document.getElementById('btnEnviarCedulaAgente')

btnEnviarCedulaAgente.onclick = function () {
    Controlador.buscarDatosPersonalesAgente();
}

const abrirMenuOpciones = document.getElementById('abrirMenuOpciones');
const opcionesPerfil = document.getElementById('opcionesPerfil');

abrirMenuOpciones.onclick = function () {
    if (opcionesPerfil.style.display === "none" || opcionesPerfil.style.display === "") {
        opcionesPerfil.style.display = "block";
    } else {
        opcionesPerfil.style.display = "none";
    }
};