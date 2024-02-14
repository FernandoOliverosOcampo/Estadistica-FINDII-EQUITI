import Modelo from "../modelo/modelo_admin.js";
import Vista from "../vista/admin.js";

const Controlador = {

  async ventasPorLiderEquipo() {
    const ventas_miguel = await Modelo.ventasPorLiderEquipo("miguel");
    const ventas_ray = await Modelo.ventasPorLiderEquipo("ray");
    const ventas_davina = await Modelo.ventasPorLiderEquipo("davina");
    const ventas_laureano = await Modelo.ventasPorLiderEquipo("laureano");

    Vista.mostrarGraficas(
      ventas_miguel,
      ventas_ray,
      ventas_davina,
      ventas_laureano
    );

  },

  async eliminarVenta() {
    try {
      const id = Vista.eliminarVenta();
      const res = await Modelo.eliminarVenta(id.trim())

      if (res.status == 200) {
        Vista.mostrarAlertaSatisfactorio("Se eliminó el registro de la venta correctamente");
        Vista.recargarPagina(500)
      } else {
        Vista.mostrarMensajeError("Error al eliminar la venta")
      }
    } catch (error) {
      console.log(error)
    }
  },

  async editarventa() {
    try {
      const valores = Vista.editarVenta();
      const res = await Modelo.actualizarDatosVenta(valores);
      if (res.status == 200) {
        Vista.mostrarAlertaSatisfactorio("Se actualizo el registro de la venta correctamente");
      } else {
        Vista.mostrarMensajeError("Error al actualizar la venta")
      }

    } catch (error) {
      console.log(error)
      let mensaje = "Hubo un error al actualizar la venta";
      Vista.mostrarMensajeError(mensaje)
    }
  },

  async mostrarTodasLasVentas() {
    const res = await Modelo.traerTodasLasVentas();
    Vista.mostrarTodasLasVentas(res);
  },

  async descargarVentas() {
    try {
      const res = await Modelo.descargarCSV();
      console.log(res)
      const blob = new Blob([res.data], { type: 'text/csv' });

      // Crear un enlace temporal y simular un clic para descargar el archivo
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'ventas_realizadas.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log('Archivo CSV descargado correctamente');
    } catch (error) {
      console.error('Error al descargar el archivo CSV:', error);
    }
  },

  formatearFechaParaEnvio(fecha) {
    // Formatea la fecha en el formato deseado (dd/mm/yyyy)
    if (fecha.length == 0) {
        return fecha

    } else {
        var partes = fecha.split('-');
        var fechaFormateada = partes[2].replace('0', '') + '/' + partes[1] + '/' + partes[0];

        return fechaFormateada
    }
  },

  async datosPorFecha() {

    const {fecha} = Vista.tomarFecha();
    const fechaFormateada = this.formatearFechaParaEnvio(fecha)

    // console.log(fechaFormateada)

    const res = await Modelo.mostrarVentasPorFecha(fechaFormateada)
    console.log(res)
    Vista.mostrarTodasLasVentas(res)
},

};

export default Controlador;
