import Modelo from "../modelo/modelo_equipo.js"
import Vista from "../vista/equipo.js"
const Controlador = {

    async ventasPorLiderEquipo() {
      const ventas_miguel = await Modelo.ventasPorLiderEquipo('miguel')
      const ventas_ray = await Modelo.ventasPorLiderEquipo('ray')
      const ventas_davina = await Modelo.ventasPorLiderEquipo('davina')
      const ventas_laureano = await Modelo.ventasPorLiderEquipo('laureano')
  
      Vista.mostrarGraficas(ventas_miguel, ventas_ray, ventas_davina, ventas_laureano)
  
    },
  
  }
export default Controlador;