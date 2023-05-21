import "./ListaOpciones.css";
const ListaOpciones = (props) => {
  //metodo map -> arreglo.map((equipo,index)=>{
  //return <option></option>
  //})

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualiozarEquipo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipo</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          selecionar equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ListaOpciones;
