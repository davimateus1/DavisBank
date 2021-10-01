import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import ContainerWrapper from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ButtonTema } from "./Components/UI";
import MudaTema from "./Components/MudaTema";

function App() {
const [tema, setTema] = useState(true);

const toggleTema = () => {
  setTema((tema) => !tema);
}

  return (
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyle />
        <ButtonTema onClick={toggleTema}>
          <MudaTema tema={tema}/>
        </ButtonTema>
        <Cabecalho />
        <ContainerWrapper />
      </ThemeProvider>
  );
}

export default App;
