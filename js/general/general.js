import Controlador from "./controlador/controlador_general.js";
const General ={
    horaActual() {
        // Función para obtener la hora actual y actualizar el elemento correspondiente
        const currentTimeElement = document.getElementById('horaActual');
        const now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
    
        let ampm = 'am';
    
        // Convertir a formato de 12 horas
        if (hours > 12) {
            hours -= 12;
            ampm = 'pm';
        }
    
        // Formato: HH:MM:SS
        const currentTimeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
        // Actualizar el contenido del elemento
        currentTimeElement.textContent = currentTimeString;
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
    // opcionesMenu() {
    //     if (localStorage.getItem('access_token')) {
    //         const contenidoPerfil = document.getElementById('contenidoPerfil')
    //         if (localStorage.getItem('rol') == "team leader") {
    //             contenidoPerfil.innerHTML =
    //                 `
    //                 <div class="enlaces">
    //                     <div class="enlace">
    //                         <div class="icono">
    //                             <i class="fa-solid fa-house"></i>
    //                         </div>

    //                         <div class="texto">
    //                             <button><a href= "../home.html">Inicio</a></button>
    //                         </div>
    //                     </div>

    //                     <div class="enlace">
    //                         <div class="icono">
    //                             <i class="fa-solid fa-user"></i>
    //                         </div>
                    
    //                         <div class="texto">
    //                             <button><a href= "./pages/perfil.html">Mi perfil</a></button>
    //                         </div>
    //                     </div>

    //                     <div class="enlace">
    //                         <div class="icono">
    //                             <i class="fa-solid fa-user"></i>
    //                         </div>
                    
    //                         <div class="texto">
    //                             <button><a href= "./pages/team_leader/inicio_team_leader.html">Mi equipo</a></button>
    //                         </div>
    //                     </div>

                        
    //                     <div class="enlace">
    //                     <div class="icono">
    //                         <i class="fa-solid fa-user"></i>
    //                     </div>
            
    //                     <div class="texto">
    //                         <button><a href= "./pages/formulario_ventas.html">Añadir Venta</a></button>
    //                     </div>
    //                 </div>
    //                     </div>
    //                 </div>
                
    //                 <div class="pie-menu">
                
    //                     <div class="enlace">
    //                         <div class="icono">
    //                             <i class="fa-solid fa-gear"></i>
    //                         </div>
                
    //                         <div class="texto">
    //                             <button>Configurar</button>
    //                         </div>
    //                     </div>
                
    //                     <div class="enlace">
    //                         <div class="icono">
    //                             <i class="fa-solid fa-right-from-bracket"></i>
    //                         </div>
                
    //                         <div class="texto">
    //                             <button id = "cerrarSesion">Cerrar sesión</button>
    //                         </div>
    //                     </div>
    //                 </div>      
    //             `;
    //         } 
    //         if (localStorage.getItem('rol') == "agente"){
    //             contenidoPerfil.innerHTML =
    //             `
    //       <div class="enlaces">
    //         <div class="enlace">
    //             <div class="icono">
    //                 <i class="fa-solid fa-house"></i>
    //             </div>

    //             <div class="texto">
    //                 <button><a href= "../home.html">Inicio</a></button>
    //             </div>
    //         </div>

    //         <div class="enlace">
    //           <div class="icono">
    //               <i class="fa-solid fa-user"></i>
    //           </div>
    
    //           <div class="texto">
    //             <button><a href= "./pages/perfil.html">Mi perfil</a></button>
    //           </div>
    //         </div>

    //         <div class="enlace">
    //         <div class="icono">
    //             <i class="fa-solid fa-user"></i>
    //         </div>
  
    //         <div class="texto">
    //             <button><a href= "./pages/formulario_ventas.html">Añadir Venta</a></button>
    //         </div>
    //       </div>
    //         </div>
    //     </div>
    //     <div class="enlace">
    //         <div class="icono">
    //         <i class="fa-solid fa-location-crosshairs"></i>
    //         </div>
  
    //         <div class="texto">
    //             <button><a href= "./pages/codigos_postales.html">Codigos postales</a></button>
    //         </div>
    //       </div>
    //         </div>
    //     </div>
    
    //     <div class="pie-menu">
    
    //         <div class="enlace">
    //             <div class="icono">
    //                 <i class="fa-solid fa-gear"></i>
    //             </div>
    
    //             <div class="texto">
    //                 <button>Configurar</button>
    //             </div>
    //         </div>
    
    //         <div class="enlace">
    //             <div class="icono">
    //                 <i class="fa-solid fa-right-from-bracket"></i>
    //             </div>
    
    //             <div class="texto">
    //                 <button id = "cerrarSesion">Cerrar sesión</button>
    //             </div>
    //         </div>
    //     </div>      
    //             `;
    //         }


    //         const botonCerrarSesion = document.getElementById('cerrarSesion')
    //         botonCerrarSesion.onclick = function () {
    //             localStorage.clear()
    //             location.href = ("./pages/login.html");
    //         }

    //     } else {
    //         location.href = ("./pages/login.html");
    //     }
    // },
}
export default General;
document.addEventListener('DOMContentLoaded', function () {
    Controlador.datosAgente()
    // General.opcionesMenu()
})