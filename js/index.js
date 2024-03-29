import config from './supabase/keys.js';
import General from './general/general.js';
//Modelo que recibe los datos y los envia a la base de datos
const Modelo = {

  async traerVentasRealizadasAgente(cedula) {
    //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
    const res = axios({
      method: "GET",
      url: "http://127.0.0.1:5000/mostrar-ventas-realizadas/"+cedula,
      headers: config.headers,
    });
    return res
  },

  async traerDatosPersonalesAgente(cedula) {

    //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
    const res = axios({
      method: "GET",
      url: "http://127.0.0.1:5000/mostrar-datos-personales/"+cedula,
      headers: config.headers,
    });
    return res
  }

}

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


    this.llenarCuadroVentasTotales(cant_ventas_totales_noviembre, "Ventas Noviembre")
    this.llenarCuadroVentasTotales(cant_ventas_totales_diciembre, "Ventas Diciembre")
    this.llenarCuadroVentasTotales(cant_ventas_totales_enero, "Ventas Enero")
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
    if (localStorage.getItem('access_token')) {
      const contenidoPerfil = document.getElementById('contenidoPerfil')
      contenidoPerfil.innerHTML =
        `
      <div class="enlaces">
        <div class="enlace">
          <div class="icono">
              <i class="fa-solid fa-user"></i>
          </div>

          <div class="texto">
            <button><a href= "./pages/perfil.html">Mi perfil</a></button>
          </div>
        </div>

        <div class="enlace">
          <div class="icono">
              <i class="fa-solid fa-user"></i>
          </div>

          <div class="texto">
              <button><a href= "./pages/formulario_ventas.html">Añadir Venta</a></button>
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

      const botonCerrarSesion = document.getElementById('cerrarSesion')
      botonCerrarSesion.onclick = function () {
        localStorage.clear()
        location.href = ("./pages/login.html");
      }

    } else {
        location.href = ("./pages/login.html");
    }
  },

  crearGrafico(myChart, labels_barra, datos_barra, tipo){

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

  mostrarGraficas(res){
    console.log(res.data)
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
  }

}

const Controlador = {

  async ventasRealizadasAgente() {
    const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
    Vista.datosEstadisticos(res)
  },

  async datosAgente() {
    const res = await Modelo.traerDatosPersonalesAgente(localStorage.getItem('cedula'))
    Vista.datosAgente(res)
  },

  async datosAgenteGraficas() {
    const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
    Vista.mostrarGraficas(res)
  },

}

document.addEventListener('DOMContentLoaded', function () {
  Controlador.ventasRealizadasAgente();
  Controlador.datosAgente();
  Vista.opcionesMenu();
  Controlador.datosAgenteGraficas();
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







