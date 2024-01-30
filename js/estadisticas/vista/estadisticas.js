import Controlador from "../controlador/controlador_estadisticas.js"
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
        const cant_ventas_totales_noviembre = res.data.cant_ventas_noviembre
        const cant_ventas_totales_diciembre = res.data.cant_ventas_diciembre
        const cant_ventas_totales_enero = res.data.cant_ventas_enero

        this.llenarCuadroVentasTotales(cant_ventas_totales_realizadas, "Ventas Totales")
        this.llenarCuadroVentasTotales(cant_ventas_totales_noviembre, "Ventas Noviembre")
        this.llenarCuadroVentasTotales(cant_ventas_totales_diciembre, "Ventas Diciembre")
        this.llenarCuadroVentasTotales(cant_ventas_totales_enero, "Ventas Enero")
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
        <i class="fa-solid fa-certificate"></i>
        </div>

        <div class="texto">
            <button><a href= "../pages/admin/calidad.html">Calidad</a></button>
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
    llenarPromedios(res){
        //promedios
        const promedioMesActual = res.data.prom_venta_mes_actual
        const promedioSemanaActual = res.data.prom_venta_semana_actual
        const ventasSemana = res.data.cant_ventas_semana_actual
        const vistaPromedioSemanal = document.getElementById('promedioSemanal');
        const vistaPromedioMensual = document.getElementById("promedioMensual");
        const vistaVentaSemanal = document.getElementById("ventaSemanal");
        vistaPromedioSemanal.innerHTML = `
        <div class="icono">
           <p> <i class="fa-solid fa-percent"></i></p>
        </div>
        <div class="titulo_promedio">
            <p>Promedio ventas semanal</p>
        </div>
        <div class="numero_promedio">
            <p>${promedioSemanaActual} </i></p>
        </div>
    `;
    vistaPromedioMensual.innerHTML = `
        <div class="icono">
            <p> <i class="fa-solid fa-percent"></i></p>
        </div>
        <div class="titulo_promedio">
            <p>Promedio ventas mensual</p>
        </div>
        <div class="numero_promedio">
            <p>${promedioMesActual}</i></p>
        </div>
    `;
    vistaVentaSemanal.innerHTML = `
        <div class="icono">
            <p> <i class="fa-solid fa-calendar-days"></i></p>
        </div>
        <div class="titulo_promedio">
            <p>Cantidad ventas semanal</p>
        </div>
        <div class="numero_promedio">
            <p>${ventasSemana}</p>
        </div>
    `;

        //ventas
        const ventasActivas = res.data.cant_ventas_activas
        const ventasNoFacturable = res.data.cant_ventas_no_facturables
        const ventasOpcionNoSeleccionada = res.data.cant_ventas_opcion_no_seleccionada
        const ventasPendientes = res.data.cant_ventas_pendiente
        const vistaVentasActivas = document.getElementById('ventasActivas')
        const vistaVentasNoFacturables = document.getElementById('ventasNoFacturables')
        const vistaVentasNoSeleccionada = document.getElementById('ventasNoSeleccionada');
        const vistaVentasPendientes = document.getElementById('ventasPendiente')
        vistaVentasActivas.innerHTML = `
        <div class="icono">
             <p><i class="fa-solid fa-check"></i></p>
        </div>
        <div class="titulo_promedio">
            <p>Ventas Activas</p>
        </div>
        <div class="numero_promedio">
            <p>${ventasActivas}</i></p>
        </div>
        `;
        vistaVentasNoFacturables.innerHTML = `
        <div class="icono">
        <p><i class="fa-solid fa-x"></i></p>
        </div>
        <div class="titulo_promedio">
            <p>Ventas no facturables</p>
        </div>
        <div class="numero_promedio">
            <p>${ventasNoFacturable}</p>
        </div>
        `;
        vistaVentasNoSeleccionada.innerHTML = `
        <div class="icono">
        <p><i class="fa-solid fa-question"></i></p>
        </div>
        <div class="titulo_promedio">
            <p>Ventas opcion no seleccionada</p>
        </div>
        <div class="numero_promedio">
            <p>${ventasOpcionNoSeleccionada}</p>
        </div>
        `;
        vistaVentasPendientes.innerHTML = `
        <div class="icono">
        <p> <i class="fa-solid fa-clock-rotate-left"></i></p>
        </div>
        <div class="titulo_promedio">
            <p>Ventas pendientes</p>
        </div>
        <div class="numero_promedio">
            <p>${ventasPendientes}</p>
        </div>
        `;


    }

}
export default Vista;
document.addEventListener('DOMContentLoaded', function () {
    Controlador.ventasRealizadasAgente();
    Controlador.datosAgenteGraficas();
    Controlador.mostrarEstadisticas()
    
    Vista.opcionesMenu();
    General.horaActual()
    setInterval(General.horaActual, 1000);
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