import Modelo from "../modelo/modelo_leader.js"
import Vista from "../vista/team_leader.js"
const Controlador = {

    async ventasRealizadasAgente() {
        const res2 = await Modelo.traerDatosPersonalesAgente(localStorage.getItem('cedula'))
        const nombre_formatear = res2.data['apodo']
        const liderEquipo = nombre_formatear.split(' ')[0];

        const res = await Modelo.infoEquipo(liderEquipo)
        Vista.datosEstadisticos(res)
        Vista.mostrarTablaDatos(res)
    },

    async datosAgenteGraficas() {
        const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
        Vista.mostrarGraficas(res)
    },

    async buscarDatosPersonalesAgente() {
        const { cedulaAgente } = Vista.traerCedulaAgente();
        const res = await Modelo.traerDatosPersonalesAgente(cedulaAgente)
        //const res2 = await Modelo.traerVentasRealizadasAgente(cedulaAgente)

        const res3 = await Modelo.mostrarEstadisticas(cedulaAgente);

        Vista.llenarDatosPersonalesAgente(res)
        Vista.llenarEstadisticasAgente(res3)
    },

    async traerAgentesPertenecientes() {
        const res = await Modelo.traerDatosPersonalesAgente(localStorage.getItem('cedula'))
        const nombre_formatear = res.data['apodo']
        const liderEquipo = nombre_formatear.split(' ')[0];
        const res2 = await Modelo.agentesPertenecientes(liderEquipo)
        Vista.agentesPertenecientes(res2)
    }

}
export default Controlador;