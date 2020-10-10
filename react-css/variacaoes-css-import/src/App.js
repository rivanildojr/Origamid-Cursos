import React from "react";
import CardCss from "./components/card-css/CardCss";
import CardModule from "./components/card-module-css/CardModule";
import CardStyled from "./components/card-styled/CardStyled";
import CardFrameworks from "./components/card-frameworks/CardFrameworks";
import CardFrameworksReact from "./components/card-frameworks-react/CardFrameworkReact";

import "./style.css";

function App() {
  return (
    <div className="App">
      <CardCss title="CSS Padrão" description="Importação de CSS padrão" />
      <CardModule title="CSS Module" description="Importação de CSS module" />
      <CardStyled
        title="Styled Components"
        description="Importação de CSS com styled components"
      />
      <CardFrameworks
        title="Framework bootstrap"
        description="Importação de CSS com o framework bootstrap"
      />
      <CardFrameworksReact
        title="React bootstrap"
        description="Importação de Lib do React bootstrap"
      />
    </div>
  );
}

export default App;
