import Modelo from "../modelo/modelo_general.js";
import General from "../general.js";
const Controlador = {
    async datosAgente() {
        const res = await Modelo.traerDatosPersonalesAgente(localStorage.getItem('cedula'))
        General.datosAgente(res)
    },

}
export default Controlador;