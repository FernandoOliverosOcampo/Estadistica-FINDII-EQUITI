import Vista from "../vista/estadisticas.js"
import Modelo from "../modelo/modelo_estadisticas.js"
import General from "../../general/general.js"
const Controlador = {

    async ventasRealizadasAgente() {
        const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
        Vista.datosEstadisticos(res)
    },
    async datosAgenteGraficas() {
        const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
        Vista.mostrarGraficas(res)
    },
    async mostrarEstadisticas(){
        const res = await Modelo.mostrarEstadisticas(localStorage.getItem('cedula'))
        Vista.llenarPromedios(res)
    }


}
export default Controlador;