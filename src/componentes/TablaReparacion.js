import './css/tablaReparacion.css';
import BotonForm from './BotonForm';
import VentanaDetallesEqIngresado from './VentanaDetallesEqIngresado';
import { useState } from 'react';

function TablaReparacion() {

    const selecEstado = <select className='formListaCliChilds' >
                            <option>Recibido</option>
                            <option>En Reparación</option>
                            <option>Reparado</option>
                        </select>;

    const inputFiltro = <input className='formListaCliChilds' id='inputFiltroEqIngresados'></input>;

    const [ abrirDetallesEqIngresado, setAbrirDetallesEqIngresado ] = useState(false);
    const [mostrarSelect, setMostrarSelect] = useState(false);

    const VerificarFiltroPorEstado = (event) => {
        const seleccion = event.target.value;
        console.log(seleccion);
        if (seleccion == 'estado') setMostrarSelect(true);
        else setMostrarSelect(false);
    }

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
            <div className="modal">
                <div id='formListaEqIngresados'>

                    {mostrarSelect ? selecEstado : inputFiltro}
                    
                    <select name='filtrarListaCli' className='formListaCliChilds' id="selectFiltroEqIngresados" onChange={VerificarFiltroPorEstado}>
                        <option value="fecha">Fecha</option>
                        <option value="cedula">Cédula</option>
                        <option value="nombre">Nombre</option>
                        <option value='modelo'>Modelo</option>
                        <option value='estado'>Estado</option>
                    </select>
                    <table className='formListaCliChilds' id="tablaListaEqIngresados">
                        <tr className='editCliFilaTabla' onClick={() => setAbrirDetallesEqIngresado(true)}>
                            <td>Nombre del Cliente</td>
                            <td className='nombreListaEqIngresados'>Modelo Equipo</td>
                            <td className='nombreListaEqIngresados' >Reparado</td>
                        </tr>
                    </table>
                </div>
                <VentanaDetallesEqIngresado isOpen={abrirDetallesEqIngresado} onClose={() => setAbrirDetallesEqIngresado(false)} />
            </div>
    );
}
export default TablaReparacion;