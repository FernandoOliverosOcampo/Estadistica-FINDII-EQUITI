import General from "../../general/general.js";
import Controlador from "../controlador/controlador_agente.js";
const Vista = {
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

    enviarDatosAgente(){
        const apodo = document.getElementById('apodoAgente').value;
        const nombre = document.getElementById('nombreAgente').value;
        const cedula = document.getElementById('cedulaAgente').value;
        const correo = document.getElementById('correoAgente').value;
        const contraseña = document.getElementById('contraseñaAgente').value;
        const celular = document.getElementById('celularAgente').value;
        const estado = document.getElementById('estadoAgente').value;
        const grupo = document.getElementById('grupo').value;
        const campaña = document.getElementById('campaña').value;
        const liderResponsable = document.getElementById('liderResponsable').value;
        const liderEquipo = document.getElementById('liderEquipo').value;   

        return{
            apodo,
            nombre,
            cedula,
            correo,
            contraseña,
            celular,
            estado,
            grupo,
            campaña,
            liderResponsable,
            liderEquipo
        };

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

}
export default Vista;
document.addEventListener('DOMContentLoaded', function () {
    Vista.opcionesMenu();
    General.horaActual()
    setInterval(General.horaActual, 1000);
});
const registrarAgente = document.getElementById('enviarAgente');
registrarAgente.onclick = function () {
    Controlador.insertarDatosAgente();
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