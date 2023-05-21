import "./Equipo.css";
import Colaborador from "../Colaboradores";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //destructuracion
  const { colorPrimario, colorSecundario, titulo, id } = props.dato;
  const { colaboradores, eliminarColaborador, cambiarColor, like } = props;
  const estiloLinia = {
    borderColor: colorPrimario,
  };
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
  };
  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            type="color"
            className="inpunt-color"
            value={colorPrimario}
            onChange={(evento) => {
              cambiarColor(evento.target.value, id);
            }}
          />

          <h3 style={estiloLinia}>{titulo} </h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                dato={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Equipo;
