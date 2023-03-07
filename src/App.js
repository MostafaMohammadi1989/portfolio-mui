// import { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@mui/material";
import Navbar from "./navbar/Navbar.js";

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
      <Navbar />
    </div>
  );
}

export default App;
