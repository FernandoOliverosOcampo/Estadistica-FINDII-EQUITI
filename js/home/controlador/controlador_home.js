import Modelo from "../modelo/home_modelo.js"
import Vista from "../vista/home.js"
const Controlador = {

    async ventasRealizadasAgente() {
        const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
        Vista.mostrarTablaDatos(res)
        Vista.datosEstadisticos(res)
    },
    async datosAgenteGraficas() {
        const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
        Vista.mostrarGraficas(res)
      },


}
export default Controlador;