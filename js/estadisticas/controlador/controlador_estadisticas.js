import Vista from "../vista/estadisticas.js"
import Modelo from "../modelo/modelo_estadisticas.js"

const Controlador = {

    async ventasRealizadasAgente() {
        const cedula = localStorage.getItem('cedula')
        const res = await Modelo.mostrarEstadisticas(cedula)

        Vista.datosEstadisticos(res)
    },

    async datosAgenteGraficas() {
        const res2 = await Modelo.traerDatosPersonalesAgente(localStorage.getItem('cedula'))

        const liderEquipo = res2.data['apodo']
        const res = await Modelo.infoEquipo(liderEquipo)
        Vista.mostrarGraficas(res)
    },

    async mostrarEstadisticas() {
        const res = await Modelo.mostrarEstadisticas(localStorage.getItem('cedula'))
        Vista.llenarPromedios(res)
    }

}
export default Controlador;