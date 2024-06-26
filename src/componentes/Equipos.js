import './css/equipos.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import ModalListaClientes from './ModalListaClientes';
import ModalListaEqEntregados from './ModalListaEqEntregados';
import ModalListaEqIngresados from './ModalListaEqIngresados';
import { useState } from 'react';

function Equipos() {

    const [abrirModalListaCLientes, setAbrirModalListaClientes] = useState(false);
    const [abrirModalListaEqEntregados, setAbrirModalListaEqEntregados] = useState(false);
    const [abrirModalListaEqIngresados, setAbrirModalListaEqIngresados] = useState(false);

    return (
        <div id="contenedorPrincipalEquipos">
            <Cabezal titulo="Equipos" cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesEquipos">
                <div id="contBtnRegisIngEquipo" className='tresBotones'><BotonGeneral idImportado="btnRegisIngEquipo" texto="Registrar Ingreso" onClickImportado={() => setAbrirModalListaClientes(true)}/><div> </div></div>
                <div id="contBtnEqIng" className='tresBotones'><div> </div><BotonGeneral idImportado="btnEqIng" texto="Equipos Ingresados"  onClickImportado={() => setAbrirModalListaEqIngresados(true)}/></div>
                <div className="auxTresBotones" ></div>
               <div id="contBtnEqEntreg" className='tresBotones'><BotonGeneral idImportado="btnEqEntreg" texto="Equipos Entregados" onClickImportado={() => setAbrirModalListaEqEntregados(true)}/></div>
            </div>
            <ModalListaClientes deDondeViene="ingresoEquipo" isOpen={abrirModalListaCLientes} onClose={() => setAbrirModalListaClientes(false)} />
            <ModalListaEqEntregados isOpen={abrirModalListaEqEntregados} onClose={() => setAbrirModalListaEqEntregados(false)}/>
            <ModalListaEqIngresados isOpen={abrirModalListaEqIngresados} onClose={() => setAbrirModalListaEqIngresados(false)} />
        </div>
    )
}
export default Equipos;