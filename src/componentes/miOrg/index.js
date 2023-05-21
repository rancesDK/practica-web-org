import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //estado- hooks
  //useState()
  //const [nombreVariable, fincionActualiza]=useState(valorInicial)
  // const [mostrar, actualizarMostrar] = useState(true);

  // const manejarClick = () => {
  //   console.log("mensaje captuado", !mostrar);
  //   actualizarMostrar(!mostrar);
  // };

  return (
    <section className="orgSection">
      <h3 className="titulo">Mi Organizacion</h3>
      <img src="/img/iconC.png" alt="icon" onClick={props.cambirMostrar} />
    </section>
  );
};
export default MiOrg;
