import { createGlobalStyle } from "styled-components";
import ButtonCompoennts from "./button/Button";
import { CssBaseline } from "@mui/material";

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: red;
//    font-family: "League Spartan", sans-serif;
//   }
// `;
function App() {
  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      <CssBaseline />
      <ButtonCompoennts />
    </div>
  );
}

export default App;
