import config from '../../supabase/keys.js';

//Modelo que recibe los datos y los envia a la base de datos
const Modelo = {

  async ventasPorLiderEquipo(nombre_lider_equipo){
    const res = axios({
      method: "GET",
      url:'http://192.168.10.18:5600/info-equipo/'+nombre_lider_equipo,
      headers: config.headers,
    });
    return res
  },

}
export default Modelo