import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualiozarEquipo] = useState("");
  const [titulo, actualizarTitulo] = useState("");
  const [color, ActualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  //event=e
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejar envio");
    let datosEnviados = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo,
    };
    registrarColaborador(datosEnviados);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          setValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          setValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          setValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualiozarEquipo={actualiozarEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          setValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar Color en Hex."
          required
          valor={color}
          setValor={ActualizarColor}
          type="color"
        />
        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};
export default Formulario;
