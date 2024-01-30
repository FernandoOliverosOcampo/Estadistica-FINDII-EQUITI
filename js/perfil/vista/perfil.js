import Controlador from "../controlador/controlador_perfil.js";
import General from "../../general/general.js";
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
  mostrarDatosUsuario(res) {
    const datos = res.data;

    const apodo = datos["apodo"];
    const campana = datos["campana"];
    const cedula = datos["cedula"];
    const celular = datos["celular"];
    const correo = datos["correo"];
    const estado = datos["estado"];
    const grupo = datos["grupo"];
    const lider_equipo = datos["lider_equipo"];
    const lider_responsable = datos["lider_responsable"];
    const nombre = datos["nombre"];
    const rol = datos["rol"];

    const informacionPerfil = document.getElementById("informacionPerfil");
    informacionPerfil.innerHTML = `
            <div class="campo">
                <div class="titulo">
                    <p>Cédula:</p>
                </div>
                <div class="texto nombre">
                    <p>${cedula}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Apodo:</p>
                </div>
                <div class="texto direccion">
                    <p>${apodo}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Nombre:</p>
                </div>
                <div class="texto nombre">
                    <p>${nombre}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Correo:</p>
                </div>
                <div class="texto correo">
                    <p>${correo}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Celular:</p>
                </div>
                <div class="texto celular">
                    <p>${celular}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Campaña:</p>
                </div>
                <div class="texto nombre">
                    <p>${campana}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Estado:</p>
                </div>
                <div class="texto sexo">
                    <p>${estado}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Grupo:</p>
                </div>
                <div class="texto fecha">
                    <p>${grupo}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Lider Equipo:</p>
                </div>
                <div class="texto direccion">
                    <p>${lider_equipo}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Lider responsable:</p>
                </div>
                <div class="texto direccion">
                    <p>${lider_responsable}</p>
                </div>
            </div>

            <div class="campo">
                <div class="titulo">
                    <p>Rol:</p>
                </div>
                <div class="texto direccion">
                    <p>${rol}</p>
                </div>
            </div>


            `;
  },
};

export default Vista;

const abrirMenuOpciones = document.getElementById("abrirMenuOpciones");
const opcionesPerfil = document.getElementById("opcionesPerfil");

abrirMenuOpciones.onclick = function () {
  if (
    opcionesPerfil.style.display === "none" ||
    opcionesPerfil.style.display === ""
  ) {
    opcionesPerfil.style.display = "block";
  } else {
    opcionesPerfil.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  Controlador.datosAgente();
  Vista.opcionesMenu();
  General.horaActual();
  setInterval(General.horaActual, 1000);
});
