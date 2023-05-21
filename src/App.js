import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./componentes/header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/miOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/footer";
import Colaborador from "./componentes/Colaboradores";

console.log(Header);
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    { titulo: "Front", colorPrimario: "#82CFFA", colorSecundario: "#E8F8FF" },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    { titulo: "Devops", colorPrimario: "#E06B69", colorSecundario: "#FDE7E8" },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    { titulo: "Móvil", colorPrimario: "#FFBA05", colorSecundario: "#FFF5D9" },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  //Ternarios -->condicion? se muestra:no se muestra
  const cambirMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    //stread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };
  //eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("elininar colaborador", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  const cambiarColor = (color, id) => {
    console.log("dato:", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {/* {mostrarFormulario === true ? <Formulario /> : <></>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambirMostrar={cambirMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          dato={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          cambiarColor={cambiarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
