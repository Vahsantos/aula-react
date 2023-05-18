/* eslint-disable react/prop-types */
import "./App.css";
import { home_cha_cha, tudo_bem_nao_ser_normal, vicenzo } from "./movies";

function Movie(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <h2>{props.descricao}</h2>
      <p>{props.diretor}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Movie
        titulo={vicenzo.titulo}
        descricao={vicenzo.descricao}
        diretor={vicenzo.diretor}
      />
      <Movie
        titulo={home_cha_cha.titulo}
        descricao={home_cha_cha.descricao}
        diretor={home_cha_cha.diretor}
      />
      <Movie
        titulo={tudo_bem_nao_ser_normal.titulo}
        descricao={tudo_bem_nao_ser_normal.descricao}
        diretor={tudo_bem_nao_ser_normal.diretor}
      />
      {/* <Movie1 />
      <Movie2 />
      <Movie3 /> */}
    </div>
  );
}
export default App;
