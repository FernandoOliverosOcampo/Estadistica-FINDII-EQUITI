import Modelo from "../modelo/modelo_leader.js"
import Vista from "../vista/team_leader.js"
const Controlador = {

    async ventasRealizadasAgente() {
        const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
        Vista.datosEstadisticos(res)
    },

    async datosAgenteGraficas() {
        const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
        Vista.mostrarGraficas(res)
    },

    async buscarDatosPersonalesAgente(){
        const { cedulaAgente } = Vista.traerCedulaAgente();
        const res = await Modelo.traerDatosPersonalesAgente(cedulaAgente)
        const res2 = await Modelo.traerVentasRealizadasAgente(cedulaAgente)
        Vista.llenarDatosPersonalesAgente(res)
        Vista.llenarEstadisticasAgente(res2)
    },

    
}
export default Controlador;