import React from "react";
import AppRoutes from "./routes";
import GlobalStyled from "./styles/global";

function App() {
  return (
    <div>
      <>
        <GlobalStyled />
        <AppRoutes />
      </>
    </div>
  );
}

export default App;
