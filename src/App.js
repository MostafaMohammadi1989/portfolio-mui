import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: red;
   font-family: "League Spartan", sans-serif; 
  }
`;
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Meisam</h1>
    </div>
  );
}

export default App;
