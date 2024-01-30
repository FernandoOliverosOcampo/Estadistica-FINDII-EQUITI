import Modelo from "../modelo/modelo_perfil.js"
import Vista from "../vista/perfil.js"
const Controlador = {
    async datosAgente() {
        const res = await Modelo.traerDatosPersonalesAgente(localStorage.getItem('cedula'))
        Vista.mostrarDatosUsuario(res)
    },
}
export default Controlador;