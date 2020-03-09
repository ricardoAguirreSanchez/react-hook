import React, { Fragment } from 'react';
import Contador from './components/Contador';
import Formulario from './components/Formulario';
import Listador from './components/Listador';
import FormularioSimple from './components/FormularioSimple';

function App() {
  return (
    <Fragment>
      <Contador/>
      <br></br>
      ----------------------------
      <br></br>
    <FormularioSimple/>
      {/* <Formulario/>
      <br></br>
      ----------------------------
      <br></br>
      <Listador/> */}
    </Fragment>

  );
}

export default App;
