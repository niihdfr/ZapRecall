
import Content from "./Components/Content";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <Content />
    </>
  )
}


export default App;
