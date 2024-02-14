import Modelo from "../modelo/modelo_reportes.js";
import Vista from "../vista/reportes.js";

const Controlador = {

  async editarventa() {
    try {
      const valores = Vista.editarVenta();
      const res = await Modelo.actualizarDatosVenta(valores);
      if (res.status == 200){
        Vista.mostrarAlertaSatisfactorio("Se actualizo el registro de la venta correctamente");
      }else{
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

  async descargarVentas(){
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
  }

};

export default Controlador;
